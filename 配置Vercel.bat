@echo off
setlocal
cd /d "%~dp0"
title Configure Vercel Deployment

set "CODEX_RUNTIME=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies"
if exist "%CODEX_RUNTIME%\node\bin\node.exe" if exist "%CODEX_RUNTIME%\bin\fallback\pnpm.cmd" (
  set "PATH=%CODEX_RUNTIME%\node\bin;%CODEX_RUNTIME%\bin\fallback;%PATH%"
)

where pnpm >nul 2>&1
if errorlevel 1 (
  echo pnpm 11 is required.
  pause
  exit /b 1
)
if not exist "node_modules\.bin\vercel.cmd" (
  echo Installing dependencies...
  call pnpm install --frozen-lockfile
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Step 1: Sign in to Vercel.
call pnpm exec vercel login
if errorlevel 1 (
  echo Login was not completed.
  pause
  exit /b 1
)
echo Step 2: Link or create a Vercel project.
call pnpm exec vercel link
if errorlevel 1 (
  echo Project linking was not completed.
  pause
  exit /b 1
)
echo Vercel is ready. Return to the manager and click Deploy to Vercel.
pause
