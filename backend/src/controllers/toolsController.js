const { validatePTName } = require('../services/ptValidator');
const { searchTrademarkSimilarity } = require('../services/merekMatcher');
const { searchKBLI } = require('../services/kbliEngine');

function handleCheckPT(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Usulan nama PT wajib diisi.' });
    }
    const result = validatePTName(name);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function handleCheckMerek(req, res) {
  try {
    const { brandName, niceClass } = req.body;
    if (!brandName) {
      return res.status(400).json({ success: false, message: 'Nama merek wajib diisi.' });
    }
    const result = searchTrademarkSimilarity(brandName, niceClass);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function handleCheckKBLI(req, res) {
  try {
    const { q = '', sector = 'all' } = req.query;
    const result = searchKBLI(q, sector);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  handleCheckPT,
  handleCheckMerek,
  handleCheckKBLI
};
