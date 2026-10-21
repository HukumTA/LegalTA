/**
 * LEGALTA Supabase Verification & Seeding Assistant
 * Checks Supabase connection and displays table status.
 */

require('dotenv').config({ quiet: true });
const { isSupabaseConfigured, getSupabase, testConnection } = require('./supabase');

async function checkSupabaseStatus() {
  console.log('\n======================================================');
  console.log('  ⚡ LEGALTA SUPABASE VERIFICATION ENGINE');
  console.log('======================================================\n');

  if (!isSupabaseConfigured()) {
    console.log('⚠️  Status: SUPABASE BELUM DIKONFIGURASI');
    console.log('    Silakan buka file .env dan isi:');
    console.log('    SUPABASE_URL=https://<your-project-ref>.supabase.co');
    console.log('    SUPABASE_ANON_KEY=<your-anon-key>\n');
    console.log('    Panduan:');
    console.log('    1. Buat project baru di https://supabase.com');
    console.log('    2. Buka menu "SQL Editor"');
    console.log('    3. Salin & jalankan seluruh isi file: database/supabase_setup.sql');
    console.log('    4. Isi kredensial di file .env');
    console.log('======================================================\n');
    return;
  }

  console.log('🔍 Menguji koneksi ke Supabase...');
  const test = await testConnection();

  if (!test.connected) {
    console.error('❌ Gagal terhubung ke Supabase:');
    console.error(`   ${test.error || test.reason}`);
    console.log('\n💡 Pastikan URL dan API Key di .env sudah benar dan skrip database/supabase_setup.sql sudah dijalankan di SQL Editor.');
    return;
  }

  console.log('✅ Berhasil terhubung ke Supabase PostgreSQL!\n');

  const supabase = getSupabase();
  const tables = [
    'service_categories',
    'services',
    'users',
    'orders',
    'order_tracking',
    'documents',
    'consultations',
    'kbli_items',
    'registered_pts',
    'registered_trademarks'
  ];

  console.log('📊 Ringkasan Status Tabel di Supabase:');
  console.log('------------------------------------------------------');
  for (const table of tables) {
    try {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.log(`  ❌ ${table.padEnd(24)} : [Error: ${error.message}]`);
      } else {
        console.log(`  ✅ ${table.padEnd(24)} : ${count} baris data`);
      }
    } catch (e) {
      console.log(`  ⚠️ ${table.padEnd(24)} : [Exception: ${e.message}]`);
    }
  }
  console.log('------------------------------------------------------');
  console.log('✨ Supabase database siap digunakan oleh backend LEGALTA!\n');
}

if (require.main === module) {
  checkSupabaseStatus()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { checkSupabaseStatus };
