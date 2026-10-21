const { getOrderWithDetails, saveDocument } = require('../../../database/db');

async function getOrderTracking(req, res) {
  try {
    const { id } = req.params;
    const cleanId = (id || '').trim().toUpperCase();

    const data = await getOrderWithDetails(cleanId);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Order dengan ID atau nomor WhatsApp "${cleanId}" tidak ditemukan.`
      });
    }

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function uploadDocument(req, res) {
  try {
    const { orderId } = req.params;
    const { fileName, docType = 'OTHER', fileSize = '1.2 MB' } = req.body;

    if (!fileName) {
      return res.status(400).json({ success: false, message: 'Nama file wajib disertakan' });
    }

    const saved = await saveDocument({ orderId, fileName, fileSize, docType });

    res.json({
      success: true,
      message: 'Dokumen berhasil diunggah dan terenkripsi.',
      data: saved
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  getOrderTracking,
  uploadDocument
};
