@echo off
rem Запуск SPGFEA в режиме разработки (двойной щелчок по этому файлу).
rem Браузер откроется автоматически на http://localhost:5173
cd /d "%~dp0"
set "PATH=%USERPROFILE%\Tools\nodejs;%PATH%"
npm run dev -- --open
pause
