@echo off
setlocal
cd /d "%~dp0"
title Firefly Local Manager

rem Explorer does not inherit the runtime PATH supplied to Codex terminals.
set "CODEX_RUNTIME=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies"
if exist "%CODEX_RUNTIME%\node\bin\node.exe" if exist "%CODEX_RUNTIME%\bin\fallback\pnpm.cmd" (
  set "PATH=%CODEX_RUNTIME%\node\bin;%CODEX_RUNTIME%\bin\fallback;%PATH%"
)

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js 22.23 or newer was not found. Install Node.js, then run this file again.
  pause
  exit /b 1
)
node -e "const [major,minor]=process.versions.node.split('.').map(Number);process.exit(major>22||(major===22&&minor>=23)?0:1)"
if errorlevel 1 (
  echo Node.js 22.23 or newer is required.
  pause
  exit /b 1
)
where pnpm >nul 2>&1
if errorlevel 1 (
  echo pnpm 11 was not found. Run: corepack enable pnpm
  pause
  exit /b 1
)
rem Opening a second copy should show the already-running manager.
node -e "require('http').get('http://127.0.0.1:4174/api/state',r=>{let data='';r.on('data',chunk=>data+=chunk);r.on('end',()=>{try{process.exit(JSON.parse(data).remote==='https://github.com/lunch-rain/lunch-rain.github.io.git'?0:1)}catch{process.exit(1)}})}).on('error',()=>process.exit(1))" >nul 2>&1
if not errorlevel 1 (
  echo Manager is already running. Opening it in your browser...
  start "" "http://localhost:4174"
  exit /b 0
)

if not exist "node_modules\.bin\astro.cmd" (
  echo Installing dependencies...
  call pnpm install --frozen-lockfile
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)
echo Manager: http://localhost:4174
echo Blog preview: http://localhost:4321
echo Close this window to stop the manager.
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 4; Start-Process 'http://localhost:4174'"
call pnpm manager
echo Manager stopped.
pause
