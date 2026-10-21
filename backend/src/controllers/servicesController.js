const { getCategories: fetchCategories, getServices: fetchServices, getServiceBySlug: fetchServiceBySlug } = require('../../../database/db');

async function getCategories(req, res) {
  try {
    const categories = await fetchCategories();
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function getServices(req, res) {
  try {
    const { category } = req.query;
    const services = await fetchServices(category);
    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function getServiceBySlug(req, res) {
  try {
    const { slug } = req.params;
    const service = await fetchServiceBySlug(slug);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Layanan tidak ditemukan' });
    }
    res.json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  getCategories,
  getServices,
  getServiceBySlug
};
