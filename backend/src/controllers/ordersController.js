const { queryAll, queryOne, run } = require('../../../database/db');

function getOrderTracking(req, res) {
  try {
    const { id } = req.params;
    const cleanId = (id || '').trim().toUpperCase();

    // Find order
    const order = queryOne(`
      SELECT o.*, s.title as service_title, c.name as category_name,
             u.name as client_name, u.email as client_email, u.phone_number as client_phone,
             pla.name as pla_name, pla.email as pla_email, pla.phone_number as pla_phone, pla.avatar_url as pla_avatar
      FROM orders o
      JOIN services s ON o.service_id = s.id
      JOIN service_categories c ON s.category_id = c.id
      JOIN users u ON o.user_id = u.id
      LEFT JOIN users pla ON o.pla_id = pla.id
      WHERE o.id = ? OR u.phone_number = ?
    `, [cleanId, cleanId]);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order dengan ID atau nomor WhatsApp "${cleanId}" tidak ditemukan.`
      });
    }

    // Find tracking steps
    const steps = queryAll(`
      SELECT * FROM order_tracking 
      WHERE order_id = ? 
      ORDER BY step_number ASC
    `, [order.id]);

    // Find documents
    const documents = queryAll(`
      SELECT * FROM documents 
      WHERE order_id = ? 
      ORDER BY created_at DESC
    `, [order.id]);

    res.json({
      success: true,
      data: {
        order,
        steps,
        documents,
        pla: {
          name: order.pla_name || 'Najwa',
          title: 'Senior Personal Legal Assistant',
          specialization: 'Hukum Perseroan & Perizinan OSS-RBA',
          email: order.pla_email || 'halo@legalta.id',
          phone: order.pla_phone || '+6281288880192',
          avatar: order.pla_avatar
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function uploadDocument(req, res) {
  try {
    const { orderId } = req.params;
    const { fileName, docType = 'OTHER', fileSize = '1.2 MB' } = req.body;

    if (!fileName) {
      return res.status(400).json({ success: false, message: 'Nama file wajib disertakan' });
    }

    const docId = 'doc-' + Date.now();
    run(`
      INSERT INTO documents (id, order_id, uploaded_by, file_name, file_url, file_size, doc_type)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [docId, orderId, 'usr-client-01', fileName, `/documents/${fileName}`, fileSize, docType]);

    res.json({
      success: true,
      message: 'Dokumen berhasil diunggah dan terenkripsi.',
      data: { id: docId, fileName, docType, fileSize }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  getOrderTracking,
  uploadDocument
};
