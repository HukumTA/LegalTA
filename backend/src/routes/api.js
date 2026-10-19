const express = require('express');
const router = express.Router();

const { getCategories, getServices, getServiceBySlug } = require('../controllers/servicesController');
const { getOrderTracking, uploadDocument } = require('../controllers/ordersController');
const { handleCheckPT, handleCheckMerek, handleCheckKBLI } = require('../controllers/toolsController');
const { createConsultation, getConsultations } = require('../controllers/consultationsController');

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

// API Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'LEGALTA Core API Engine',
    version: '2.0.0 (Monorepo Architecture)',
    tagline: 'Keseimbangan • Modern • Adil'
  });
});

module.exports = router;
