/**
 * LEGALTA API Client
 * Centralized asynchronous data-fetching layer communicating with the Monorepo Backend API
 */

const API_BASE = '/api';

export const api = {
  // Services & Categories
  async getCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    return res.json();
  },

  async getServices(categorySlug = '') {
    const url = categorySlug 
      ? `${API_BASE}/services?category=${encodeURIComponent(categorySlug)}` 
      : `${API_BASE}/services`;
    const res = await fetch(url);
    return res.json();
  },

  async getServiceBySlug(slug) {
    const res = await fetch(`${API_BASE}/services/${encodeURIComponent(slug)}`);
    return res.json();
  },

  // Live Tracking System (PRD 3.C)
  async getOrderTracking(orderId) {
    const res = await fetch(`${API_BASE}/orders/${encodeURIComponent(orderId)}`);
    return res.json();
  },

  async uploadOrderDocument(orderId, fileName, docType = 'OTHER') {
    const res = await fetch(`${API_BASE}/orders/${encodeURIComponent(orderId)}/documents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName, docType })
    });
    return res.json();
  },

  // Public Legal Tools (PRD 3.B)
  async checkPTName(name) {
    const res = await fetch(`${API_BASE}/tools/cek-pt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    return res.json();
  },

  async checkMerek(brandName, niceClass = 42) {
    const res = await fetch(`${API_BASE}/tools/cek-merek`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brandName, niceClass })
    });
    return res.json();
  },

  async searchKBLI(query = '', sector = 'all') {
    const res = await fetch(`${API_BASE}/tools/cek-kbli?q=${encodeURIComponent(query)}&sector=${encodeURIComponent(sector)}`);
    return res.json();
  },

  // Consultation Leads
  async submitConsultation(payload) {
    const res = await fetch(`${API_BASE}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  // System & Database Health
  async getSupabaseStatus() {
    const res = await fetch(`${API_BASE}/supabase/status`);
    return res.json();
  },

  async getHealth() {
    const res = await fetch(`${API_BASE}/health`);
    return res.json();
  }
};
