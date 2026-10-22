/**
 * LEGALTA Supabase Database Client & Repository Layer
 * Powered by @supabase/supabase-js
 */

const { createClient } = require('@supabase/supabase-js');

// Load environment variables if not already loaded
require('dotenv').config({ quiet: true });

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || '';

let supabaseClient = null;

function isSupabaseConfigured() {
  return Boolean(
    SUPABASE_URL && 
    SUPABASE_KEY && 
    !SUPABASE_URL.includes('your-project-ref') && 
    !SUPABASE_KEY.includes('your-supabase-key')
  );
}

function getSupabase() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }
  return supabaseClient;
}

/**
 * Health check & connection validation for Supabase
 */
async function testConnection() {
  if (!isSupabaseConfigured()) {
    return {
      connected: false,
      reason: 'Kredensial SUPABASE_URL atau SUPABASE_ANON_KEY belum diisi di file .env'
    };
  }
  try {
    const client = getSupabase();
    const { data, error } = await client.from('service_categories').select('count', { count: 'exact', head: true });
    if (error) {
      return { connected: false, error: error.message };
    }
    return { connected: true, message: 'Terhubung ke Supabase PostgreSQL secara sukses.' };
  } catch (err) {
    return { connected: false, error: err.message };
  }
}

// ==========================================================
// REPOSITORY METHODS FOR LEGALTA BACKEND
// ==========================================================

async function getSupabaseCategories() {
  const client = getSupabase();
  const { data, error } = await client
    .from('service_categories')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data || [];
}

async function getSupabaseServices(categorySlug = null) {
  const client = getSupabase();
  let query = client
    .from('services')
    .select(`
      *,
      service_categories (
        name,
        slug
      )
    `)
    .order('id', { ascending: true });

  const { data, error } = await query;
  if (error) throw error;

  // Flatten joined category
  const formatted = (data || []).map(s => ({
    ...s,
    category_name: s.service_categories ? s.service_categories.name : null,
    category_slug: s.service_categories ? s.service_categories.slug : null
  }));

  if (categorySlug) {
    return formatted.filter(s => s.category_slug === categorySlug);
  }
  return formatted;
}

async function getSupabaseServiceBySlug(slug) {
  const client = getSupabase();
  const { data, error } = await client
    .from('services')
    .select(`
      *,
      service_categories (
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }
  if (!data) return null;

  return {
    ...data,
    category_name: data.service_categories ? data.service_categories.name : null,
    category_slug: data.service_categories ? data.service_categories.slug : null
  };
}

async function getSupabaseOrderWithDetails(cleanId) {
  const client = getSupabase();

  // Find user by phone if query looks like phone number
  let orderQuery = client
    .from('orders')
    .select(`
      *,
      services (
        title
      ),
      users!orders_user_id_fkey (
        name,
        email,
        phone_number
      ),
      pla:users!orders_pla_id_fkey (
        name,
        email,
        phone_number,
        avatar_url
      )
    `);

  // Try exact ID match first
  let { data: orderData, error } = await orderQuery.eq('id', cleanId).maybeSingle();

  if (error || !orderData) {
    // Try matching user phone
    const { data: usersWithPhone } = await client
      .from('users')
      .select('id')
      .eq('phone_number', cleanId);

    if (usersWithPhone && usersWithPhone.length > 0) {
      const userIds = usersWithPhone.map(u => u.id);
      const { data: orderByUser } = await client
        .from('orders')
        .select(`
          *,
          services (
            title
          ),
          users!orders_user_id_fkey (
            name,
            email,
            phone_number
          ),
          pla:users!orders_pla_id_fkey (
            name,
            email,
            phone_number,
            avatar_url
          )
        `)
        .in('user_id', userIds)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      orderData = orderByUser;
    }
  }

  if (!orderData) return null;

  // Flatten order fields
  const order = {
    ...orderData,
    service_title: orderData.services ? orderData.services.title : 'Layanan Legalitas',
    client_name: orderData.users ? orderData.users.name : 'Klien LEGALTA',
    client_email: orderData.users ? orderData.users.email : null,
    client_phone: orderData.users ? orderData.users.phone_number : null,
    pla_name: orderData.pla ? orderData.pla.name : 'Najwa',
    pla_email: orderData.pla ? orderData.pla.email : 'halo@legalta.id',
    pla_phone: orderData.pla ? orderData.pla.phone_number : '+6281288880192',
    pla_avatar: orderData.pla ? orderData.pla.avatar_url : null
  };

  // Fetch tracking steps
  const { data: steps } = await client
    .from('order_tracking')
    .select('*')
    .eq('order_id', order.id)
    .order('step_number', { ascending: true });

  // Fetch documents
  const { data: documents } = await client
    .from('documents')
    .select('*')
    .eq('order_id', order.id)
    .order('created_at', { ascending: false });

  return {
    order,
    steps: steps || [],
    documents: documents || [],
    pla: {
      name: order.pla_name || 'Najwa',
      title: order.pla_name === 'Wildan'
        ? 'Chief Technology Officer / Head of Product'
        : 'Head of Client Relations & PLA',
      specialization: order.pla_name === 'Wildan'
        ? 'Arsitektur Otomasi Legaltech & Integrasi API AHU/OSS'
        : 'Hukum Perseroan & Perizinan OSS-RBA',
      email: order.pla_email || (order.pla_name === 'Wildan' ? 'wildan@legalta.id' : 'halo@legalta.id'),
      phone: order.pla_phone || '',
      avatar: order.pla_avatar || (order.pla_name === 'Wildan' 
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg' 
        : 'assets/najwa.jpg')
    }
  };
}

async function insertSupabaseDocument(docData) {
  const client = getSupabase();
  const { data, error } = await client
    .from('documents')
    .insert([docData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function insertSupabaseConsultation(consultData) {
  const client = getSupabase();
  const { data, error } = await client
    .from('consultations')
    .insert([consultData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function getSupabaseConsultations(limit = 50) {
  const client = getSupabase();
  const { data, error } = await client
    .from('consultations')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

async function getSupabaseRegisteredPTs() {
  const client = getSupabase();
  const { data, error } = await client.from('registered_pts').select('name');
  if (error) throw error;
  return data || [];
}

async function getSupabaseRegisteredTrademarks() {
  const client = getSupabase();
  const { data, error } = await client.from('registered_trademarks').select('*');
  if (error) throw error;
  return data || [];
}

async function getSupabaseKBLIItems() {
  const client = getSupabase();
  const { data, error } = await client.from('kbli_items').select('*');
  if (error) throw error;
  return data || [];
}

module.exports = {
  isSupabaseConfigured,
  getSupabase,
  testConnection,
  getSupabaseCategories,
  getSupabaseServices,
  getSupabaseServiceBySlug,
  getSupabaseOrderWithDetails,
  insertSupabaseDocument,
  insertSupabaseConsultation,
  getSupabaseConsultations,
  getSupabaseRegisteredPTs,
  getSupabaseRegisteredTrademarks,
  getSupabaseKBLIItems
};
