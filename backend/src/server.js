require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const { initDatabase } = require('../../database/sqlite/init');
const { 
  isPrismaConfigured, 
  testPrisma, 
  isSupabaseConfigured, 
  testSupabase, 
  getActiveEngine 
} = require('../../database/db');
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
  const server = app.listen(PORT, async () => {
    const prismaActive = isPrismaConfigured();
    const supabaseActive = isSupabaseConfigured();

    console.log(`\n======================================================`);
    console.log(`  ⚖️ LEGALTA MONOREPO APPLICATION`);
    console.log(`  > Front-End SPA: http://localhost:${PORT}`);
    console.log(`  > Back-End API:  http://localhost:${PORT}/api/health`);
    console.log(`  > Database DB:   ${getActiveEngine()}`);
    console.log(`  > Prisma ORM:    ${prismaActive ? '🟢 Active (DATABASE_URL configured)' : '🟡 Not configured (Set DATABASE_URL in .env)'}`);
    console.log(`  > Supabase API:  ${supabaseActive ? '🟢 Active' : '🟡 Not configured (Set SUPABASE_URL in .env)'}`);

    if (prismaActive) {
      const pTest = await testPrisma();
      console.log(`  > Prisma Conn:   ${pTest.connected ? '✅ Terhubung ke PostgreSQL' : '⚠️ ' + (pTest.error || pTest.reason)}`);
    } else if (supabaseActive) {
      const connTest = await testSupabase();
      console.log(`  > Supabase Conn: ${connTest.connected ? '✅ Terhubung ke Supabase' : '⚠️ ' + (connTest.error || connTest.reason)}`);
    } else {
      console.log(`  > Status:        🚀 Berjalan mulus via Local SQLite (Zero-config)`);
    }
    console.log(`  > Filosofi:      Keseimbangan • Modern • Adil`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`\n❌ [PORT CONFLICT] Port ${PORT} sedang dipakai oleh proses lain.`);
      console.error(`   Solusi di PowerShell: Stop-Process -Id (Get-NetTCPConnection -LocalPort ${PORT}).OwningProcess -Force\n`);
      process.exit(1);
    } else {
      console.error('[SERVER LISTEN ERROR]', err);
    }
  });
}

module.exports = app;
