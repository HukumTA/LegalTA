@echo off
set "PATH=%PATH%;C:\Program Files\nodejs;%APPDATA%\npm"
echo [LEGALTA] Menjalankan server LEGALTA...
node backend/src/server.js
pause
