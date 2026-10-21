require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

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
const PORT = Number(process.env.PORT) || 3000;
const FRONTEND_DIR = path.resolve(__dirname, '../../frontend');

// Initialize local SQLite only if cloud database is not configured
if (!isPrismaConfigured() && !isSupabaseConfigured()) {
  initDatabase({ silent: true });
}

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
  console.error(`[LEGALTA Error] ${err.message}`);
  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server LEGALTA.',
    error: err.message
  });
});

function freePortIfStaleNode(port) {
  try {
    if (process.platform === 'win32') {
      const output = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      const lines = output.split(/\r?\n/).filter(l => l.includes('LISTENING'));
      const pids = new Set();
      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        const pid = Number(parts[parts.length - 1]);
        if (pid && pid !== process.pid) {
          pids.add(pid);
        }
      }
      for (const pid of pids) {
        execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
      }
      return pids.size > 0;
    } else {
      execSync(`lsof -ti tcp:${port} | xargs kill -9`, { stdio: 'ignore' });
      return true;
    }
  } catch (_) {
    return false;
  }
}

async function verifyDatabaseConnection() {
  if (isPrismaConfigured()) {
    const pTest = await testPrisma();
    if (!pTest.connected) {
      console.warn(`[LEGALTA] Peringatan DB: Gagal terhubung ke PostgreSQL (${pTest.error || pTest.reason}). Menggunakan fallback SQLite.`);
    }
  } else if (isSupabaseConfigured()) {
    const sTest = await testSupabase();
    if (!sTest.connected) {
      console.warn(`[LEGALTA] Peringatan DB: Gagal terhubung ke Supabase (${sTest.error || sTest.reason}). Menggunakan fallback SQLite.`);
    }
  }
}

function startServer(port = PORT, retried = false) {
  const server = app.listen(port, () => {
    console.log(`[LEGALTA] Server aktif di http://localhost:${port}`);
    console.log(`[LEGALTA] Database: ${getActiveEngine()}`);
    verifyDatabaseConnection();
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && !retried) {
      if (freePortIfStaleNode(port)) {
        setTimeout(() => startServer(port, true), 300);
        return;
      }
    }
    if (err.code === 'EADDRINUSE') {
      console.error(`[LEGALTA] Gagal menjalankan server: Port ${port} sedang digunakan oleh aplikasi lain.`);
      process.exit(1);
    } else {
      console.error(`[LEGALTA] Gagal menjalankan server: ${err.message}`);
      process.exit(1);
    }
  });
}

if (require.main === module) {
  startServer(PORT);
}

module.exports = app;
