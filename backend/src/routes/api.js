const express = require('express');
const router = express.Router();

const { getCategories, getServices, getServiceBySlug } = require('../controllers/servicesController');
const { getOrderTracking, uploadDocument } = require('../controllers/ordersController');
const { handleCheckPT, handleCheckMerek, handleCheckKBLI } = require('../controllers/toolsController');
const { createConsultation, getConsultations } = require('../controllers/consultationsController');
const { 
  isPrismaConfigured, 
  testPrisma, 
  isSupabaseConfigured, 
  testSupabase, 
  getActiveEngine 
} = require('../../../database/db');

// Services & Categories
router.get('/categories', getCategories);
router.get('/services', getServices);
router.get('/services/:slug', getServiceBySlug);

// Live Tracking & Orders (PRD 3.C)
router.get('/orders/:id', getOrderTracking);
router.post('/orders/:orderId/documents', uploadDocument);

// Public Tools (PRD 3.B)
router.post('/tools/cek-pt', handleCheckPT);
router.post('/tools/cek-merek', handleCheckMerek);
router.get('/tools/cek-kbli', handleCheckKBLI);

// Consultations Leads
router.post('/consultations', createConsultation);
router.get('/consultations', getConsultations);

// Database & Engine Status Endpoints
router.get('/database/status', async (req, res) => {
  const prismaConfigured = isPrismaConfigured();
  const supabaseConfigured = isSupabaseConfigured();
  const prismaTest = await testPrisma();
  const supabaseTest = await testSupabase();
  res.json({
    activeEngine: getActiveEngine(),
    prisma: {
      isConfigured: prismaConfigured,
      connection: prismaTest
    },
    supabase: {
      isConfigured: supabaseConfigured,
      connection: supabaseTest
    }
  });
});

router.get('/supabase/status', async (req, res) => {
  const configured = isSupabaseConfigured();
  const test = await testSupabase();
  res.json({
    isConfigured: configured,
    engine: getActiveEngine(),
    connection: test
  });
});

// API Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'LEGALTA Core API Engine',
    version: '2.0.0 (Monorepo Architecture)',
    databaseEngine: getActiveEngine(),
    tagline: 'Keseimbangan • Modern • Adil'
  });
});

module.exports = router;
