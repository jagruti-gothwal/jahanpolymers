# Hostinger Deployment Guide

## Prerequisites
- Your code is pushed to GitHub
- You have access to Hostinger hosting panel

## Step 1: Set Environment Variables on Hostinger

1. Log into your Hostinger panel
2. Go to your website → **Advanced** → **Environment Variables** (or similar section)
3. Add these environment variables:

```
DATABASE_URL=mysql://u824472015_jahan:jahan%40polymersJumbolite123@62.72.28.52:3306/u824472015_jahanpolymers
ADMIN_PASSWORD=jahan@polymersJumbolite
NODE_ENV=production
```

## Step 2: Build Your Application

On your local machine, run:

```bash
npm install
npm run build
```

This will:
- Install all dependencies
- Generate Prisma client
- Build the Next.js application

## Step 3: Upload to Hostinger

### Option A: Using Git (Recommended)
1. Push your code to GitHub
2. In Hostinger, use Git deployment to pull from your repository
3. Run build command on the server

### Option B: Manual Upload
1. Upload these folders/files to your Hostinger public_html or app directory:
   - `.next/` (built files)
   - `node_modules/`
   - `public/`
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `prisma/` folder

2. Create a `.env` file on the server with:
```
DATABASE_URL=mysql://u824472015_jahan:jahan%40polymersJumbolite123@62.72.28.52:3306/u824472015_jahanpolymers
ADMIN_PASSWORD=jahan@polymersJumbolite
```

## Step 4: Start the Application

On Hostinger, you'll need to:
1. Install Node.js (if not already installed)
2. Run: `npm install --production`
3. Run: `npm start` (or configure as a service)

## Common Issues

### Issue: "Unexpected token '<'" error
**Cause**: API route is returning HTML instead of JSON
**Fix**: 
- Ensure environment variables are set correctly
- Check that Prisma client is generated (`npx prisma generate`)
- Verify the API route is accessible at `/api/contact`

### Issue: Database connection fails
**Cause**: Environment variables not loaded
**Fix**: 
- Double-check DATABASE_URL is set correctly
- Ensure the MySQL remote connection is allowed (% wildcard)

### Issue: Build fails
**Cause**: Missing dependencies or Prisma not generated
**Fix**: 
- Run `npm install` first
- Run `npx prisma generate` manually
- Then run `npm run build`

## Verification

After deployment, test:
1. Visit your website homepage
2. Submit a contact form
3. Go to `/admin/leads`
4. Login with password: `jahan@polymersJumbolite`
5. Verify the contact appears in the dashboard

## Support

If you encounter issues, check:
- Hostinger error logs
- Browser console for errors
- Network tab to see API responses
