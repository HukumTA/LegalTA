/**
 * LEGALTA Prisma Client & Repository Layer
 * Powered by @prisma/client & Prisma ORM
 */

const { PrismaClient } = require('@prisma/client');
require('dotenv').config({ quiet: true });

let prismaInstance = null;

function isPrismaConfigured() {
  const dbUrl = process.env.DATABASE_URL || '';
  return Boolean(
    dbUrl && 
    !dbUrl.includes('YOUR-PROJECT-REF') &&
    !dbUrl.includes('[') &&
    !dbUrl.includes('user:password@host:port') && 
    !dbUrl.includes('postgres://postgres:password@') &&
    (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://'))
  );
}

function getPrisma() {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
    });
  }
  return prismaInstance;
}

async function testPrismaConnection() {
  if (!isPrismaConfigured()) {
    return {
      connected: false,
      reason: 'DATABASE_URL belum dikonfigurasi di file .env'
    };
  }
  try {
    const prisma = getPrisma();
    await prisma.$queryRaw`SELECT 1 as connected`;
    return { connected: true, message: 'Terhubung ke PostgreSQL via Prisma ORM secara sukses.' };
  } catch (err) {
    return { connected: false, error: err.message };
  }
}

// ==========================================================
// REPOSITORY METHODS VIA PRISMA ORM
// ==========================================================

async function getPrismaCategories() {
  const prisma = getPrisma();
  const categories = await prisma.serviceCategory.findMany({
    orderBy: { id: 'asc' }
  });
  return categories.map(c => ({
    ...c,
    id: Number(c.id)
  }));
}

async function getPrismaServices(categorySlug = null) {
  const prisma = getPrisma();
  const services = await prisma.service.findMany({
    where: categorySlug ? { category: { slug: categorySlug } } : undefined,
    include: {
      category: {
        select: {
          name: true,
          slug: true
        }
      }
    },
    orderBy: { id: 'asc' }
  });

  return services.map(s => ({
    ...s,
    id: Number(s.id),
    category_id: Number(s.categoryId),
    base_price: Number(s.basePrice),
    estimated_days: s.estimatedDays,
    category_name: s.category ? s.category.name : null,
    category_slug: s.category ? s.category.slug : null
  }));
}

async function getPrismaServiceBySlug(slug) {
  const prisma = getPrisma();
  const service = await prisma.service.findUnique({
    where: { slug },
    include: {
      category: {
        select: {
          name: true,
          slug: true
        }
      }
    }
  });

  if (!service) return null;

  return {
    ...service,
    id: Number(service.id),
    category_id: Number(service.categoryId),
    base_price: Number(service.basePrice),
    estimated_days: service.estimatedDays,
    category_name: service.category ? service.category.name : null,
    category_slug: service.category ? service.category.slug : null
  };
}

async function getPrismaOrderWithDetails(cleanId) {
  const prisma = getPrisma();
  const orderData = await prisma.order.findFirst({
    where: {
      OR: [
        { id: cleanId },
        { user: { phoneNumber: cleanId } }
      ]
    },
    include: {
      service: {
        include: {
          category: true
        }
      },
      user: true,
      pla: true,
      trackingSteps: {
        orderBy: { stepNumber: 'asc' }
      },
      documents: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!orderData) return null;

  const createdDateStr = orderData.createdAt
    ? new Date(orderData.createdAt).toISOString().slice(0, 10)
    : '-';

  const order = {
    ...orderData,
    user_id: orderData.userId,
    service_id: Number(orderData.serviceId),
    pla_id: orderData.plaId,
    total_amount: Number(orderData.totalAmount || 0),
    voucher_code: orderData.voucherCode || '-',
    kemenkumham_id: orderData.kemenkumhamId || '-',
    created_at: createdDateStr,
    service_title: orderData.service ? orderData.service.title : 'Layanan Legalitas',
    category_name: orderData.service && orderData.service.category ? orderData.service.category.name : 'Badan Usaha',
    client_name: orderData.user ? orderData.user.name : 'Klien LEGALTA',
    client_email: orderData.user ? orderData.user.email : null,
    client_phone: orderData.user ? orderData.user.phoneNumber : null,
    pla_name: orderData.pla ? orderData.pla.name : 'Najwa',
    pla_email: orderData.pla ? orderData.pla.email : 'halo@legalta.id',
    pla_phone: orderData.pla ? orderData.pla.phoneNumber : '+6281288880192',
    pla_avatar: orderData.pla ? orderData.pla.avatarUrl : null
  };

  const steps = (orderData.trackingSteps || []).map(s => ({
    ...s,
    id: Number(s.id),
    order_id: s.orderId,
    step_number: s.stepNumber,
    step_name: s.stepName,
    completed_at: s.completedAt
      ? new Date(s.completedAt).toISOString().replace('T', ' ').slice(0, 16)
      : null
  }));

  const documents = (orderData.documents || []).map(d => ({
    ...d,
    order_id: d.orderId,
    uploaded_by: d.uploadedBy,
    file_name: d.fileName,
    file_url: d.fileUrl,
    file_size: d.fileSize,
    doc_type: d.docType,
    created_at: d.createdAt ? new Date(d.createdAt).toISOString().slice(0, 10) : null
  }));

  return {
    order,
    steps,
    documents,
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

async function savePrismaDocument({ orderId, fileName, fileSize = '1.2 MB', docType = 'OTHER' }) {
  const prisma = getPrisma();
  const docId = 'doc-' + Date.now();

  const saved = await prisma.document.create({
    data: {
      id: docId,
      orderId,
      uploadedBy: 'usr-client-01',
      fileName,
      fileUrl: `/documents/${fileName}`,
      fileSize,
      docType: docType.toUpperCase()
    }
  });

  return {
    ...saved,
    order_id: saved.orderId,
    file_name: saved.fileName,
    file_url: saved.fileUrl,
    file_size: saved.fileSize,
    doc_type: saved.docType
  };
}

// BigInt JSON serialization support
BigInt.prototype.toJSON = function () {
  return this.toString();
};

async function savePrismaConsultation({ name, phone, email, city = '', service = 'pt-standar', method = 'whatsapp', notes = '' }) {
  const prisma = getPrisma();
  const validMethod = (method || 'whatsapp').toLowerCase();

  const saved = await prisma.consultation.create({
    data: {
      clientName: name,
      phoneNumber: phone,
      email,
      city,
      serviceSlug: service,
      consultMethod: ['whatsapp', 'gmeet', 'office'].includes(validMethod) ? validMethod : 'whatsapp',
      notes
    }
  });

  return {
    ...saved,
    id: Number(saved.id),
    client_name: saved.clientName,
    phone_number: saved.phoneNumber,
    service_slug: saved.serviceSlug,
    consult_method: saved.consultMethod
  };
}

async function getPrismaConsultations(limit = 50) {
  const prisma = getPrisma();
  const consultations = await prisma.consultation.findMany({
    orderBy: { createdAt: 'desc' },
    take: limit
  });
  return consultations.map(c => ({
    ...c,
    id: Number(c.id),
    client_name: c.clientName,
    phone_number: c.phoneNumber,
    service_slug: c.serviceSlug,
    consult_method: c.consultMethod,
    created_at: c.createdAt
  }));
}

async function getPrismaRegisteredPTs() {
  const prisma = getPrisma();
  return prisma.registeredPt.findMany({
    select: { name: true }
  });
}

async function getPrismaRegisteredTrademarks() {
  const prisma = getPrisma();
  const marks = await prisma.registeredTrademark.findMany();
  return marks.map(m => ({
    id: Number(m.id),
    brand_name: m.brandName,
    nice_class: m.niceClass,
    application_number: m.applicationNumber,
    owner_name: m.ownerName,
    status: m.status,
    phonetic_key: m.phoneticKey
  }));
}

async function getPrismaKBLIItems() {
  const prisma = getPrisma();
  const items = await prisma.kbliItem.findMany();
  return items.map(k => ({
    code: k.code,
    title: k.title,
    category: k.category,
    sector_name: k.sectorName,
    description: k.description,
    risk_level: k.riskLevel,
    permits_required: k.permitsRequired,
    dpi_rules: k.dpiRules
  }));
}

module.exports = {
  isPrismaConfigured,
  getPrisma,
  testPrismaConnection,
  getPrismaCategories,
  getPrismaServices,
  getPrismaServiceBySlug,
  getPrismaOrderWithDetails,
  savePrismaDocument,
  savePrismaConsultation,
  getPrismaConsultations,
  getPrismaRegisteredPTs,
  getPrismaRegisteredTrademarks,
  getPrismaKBLIItems
};
