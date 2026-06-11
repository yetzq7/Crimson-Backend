@echo off
title Crimson Dependency Installer

echo Installing packages...
echo.

echo Running npm install...
call npm i

echo.
echo Installing Express...
call npm install express

echo.
echo Installing Dotenv...
call npm install dotenv

echo.
echo Installing discord.js...
call npm install discord.js

echo.
echo ==========================
echo Packages installed
echo ==========================
pause