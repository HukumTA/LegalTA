const { queryAll, queryOne } = require('../../../database/db');

function getCategories(req, res) {
  try {
    const categories = queryAll('SELECT * FROM service_categories ORDER BY id ASC');
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function getServices(req, res) {
  try {
    const { category } = req.query;
    let sql = `
      SELECT s.*, c.name as category_name, c.slug as category_slug 
      FROM services s 
      JOIN service_categories c ON s.category_id = c.id
    `;
    const params = [];
    if (category) {
      sql += ' WHERE c.slug = ?';
      params.push(category);
    }
    sql += ' ORDER BY s.id ASC';

    const services = queryAll(sql, params);
    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function getServiceBySlug(req, res) {
  try {
    const { slug } = req.params;
    const service = queryOne(`
      SELECT s.*, c.name as category_name, c.slug as category_slug 
      FROM services s 
      JOIN service_categories c ON s.category_id = c.id
      WHERE s.slug = ?
    `, [slug]);

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
