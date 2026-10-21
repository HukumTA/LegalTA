require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const { initDatabase } = require('../../database/init');
const { isSupabaseConfigured, testSupabase } = require('../../database/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.resolve(__dirname, '../../frontend');

// Initialize local DB fallback
initDatabase();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Serve Frontend Static Files
app.use(express.static(FRONTEND_DIR));

// SPA Fallback: Any route not handled by API or static files returns the Single HTML file
app.use((req, res) => {
  const indexPath = path.join(FRONTEND_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend index.html not found.');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err);
  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada internal server LEGALTA.',
    error: err.message
  });
});

if (require.main === module) {
  app.listen(PORT, async () => {
    const supabaseActive = isSupabaseConfigured();
    console.log(`\n======================================================`);
    console.log(`  ⚖️ LEGALTA MONOREPO APPLICATION`);
    console.log(`  > Front-End SPA: http://localhost:${PORT}`);
    console.log(`  > Back-End API:  http://localhost:${PORT}/api/health`);
    console.log(`  > Supabase:      ${supabaseActive ? '🟢 Configured (PostgreSQL Cloud)' : '🟡 Not configured (Using SQLite Fallback)'}`);
    if (supabaseActive) {
      const connTest = await testSupabase();
      console.log(`  > Connection:    ${connTest.connected ? '✅ Terhubung ke Supabase' : '⚠️ ' + (connTest.error || connTest.reason)}`);
    } else {
      console.log(`  > Tip:           Isi SUPABASE_URL & SUPABASE_ANON_KEY di .env`);
    }
    console.log(`  > Filosofi:      Keseimbangan • Modern • Adil`);
    console.log(`======================================================\n`);
  });
}

module.exports = app;
