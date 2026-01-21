# Quick Vercel Deployment Guide

## Why Vercel?
- ✅ FREE for personal projects
- ✅ Made specifically for Next.js
- ✅ API routes work automatically
- ✅ Your MySQL database on Hostinger will still work
- ✅ Automatic HTTPS
- ✅ Global CDN

## Steps:

### 1. Push to GitHub (if not already done)
```bash
git add .
git commit -m "Ready for deployment"
git push
```

### 2. Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Click "Add New Project"
4. Select your repository: "jahanpolymers" or similar
5. Click "Import"

### 3. Add Environment Variables
Before clicking Deploy, add these:

**Key:** `DATABASE_URL`
**Value:** `mysql://u824472015_jahan:jahan%40polymersJumbolite123@62.72.28.52:3306/u824472015_jahanpolymers`

**Key:** `ADMIN_PASSWORD`
**Value:** `jahan@polymersJumbolite`

### 4. Deploy
Click "Deploy" and wait 2-3 minutes.

### 5. Done!
Your site will be live at: `https://your-project-name.vercel.app`

You can add a custom domain later if you want.

## Your Database
Your MySQL database stays on Hostinger - Vercel will connect to it remotely using the DATABASE_URL.

## Cost
$0 - Completely free for personal projects!
