const { run, queryAll } = require('../../../database/db');

function createConsultation(req, res) {
  try {
    const { name, phone, email, city = '', service = 'pt-standar', method = 'whatsapp', notes = '' } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: 'Nama lengkap, nomor WhatsApp, dan email wajib diisi.'
      });
    }

    run(`
      INSERT INTO consultations (client_name, phone_number, email, city, service_slug, consult_method, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [name, phone, email, city, service, method, notes]);

    // Build prefilled WhatsApp message link
    const waText = `Halo Tim LEGALTA, saya telah menjadwalkan konsultasi via web:\n\n- Nama: ${name}\n- WhatsApp: ${phone}\n- Email: ${email}\n- Domisili: ${city || '-'}\n- Layanan: ${service}\n- Metode: ${method.toUpperCase()}\n- Catatan: ${notes || '-'}\n\nMohon konfirmasi jadwal temu. Terima kasih!`;
    const waLink = `https://wa.me/6281288880192?text=${encodeURIComponent(waText)}`;

    res.json({
      success: true,
      message: 'Jadwal konsultasi berhasil dicatat.',
      data: {
        clientName: name,
        whatsappLink: waLink
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function getConsultations(req, res) {
  try {
    const leads = queryAll('SELECT * FROM consultations ORDER BY created_at DESC LIMIT 50');
    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  createConsultation,
  getConsultations
};
