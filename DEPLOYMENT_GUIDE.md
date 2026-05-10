# 🚀 Portfolio Deployment Guide

## Deploy Your Portfolio in 5 Minutes!

Complete step-by-step guides for deploying your portfolio on GitHub Pages, Netlify, or Vercel.

---

## 🎯 Quick Comparison

| Platform | Difficulty | Speed | Cost | Custom Domain |
|----------|-----------|-------|------|----------------|
| **GitHub Pages** | ⭐ Easy | ⭐⭐⭐ Fast | **Free** | Yes (paid domain) |
| **Netlify** | ⭐⭐ Medium | ⭐⭐⭐ Fast | **Free** | Yes (paid domain) |
| **Vercel** | ⭐⭐ Medium | ⭐⭐⭐⭐ Fastest | **Free** | Yes (paid domain) |

**Recommendation for beginners:** Start with **GitHub Pages** (easiest) or **Netlify** (more features).

---

## 📦 Before You Deploy

Make sure:
- [ ] All code is committed: `git status`
- [ ] No console errors: Open DevTools (F12)
- [ ] Production build works: `npm run build && npm run preview`
- [ ] All links are updated
- [ ] Images are optimized

---

## 🌟 **Option 1: GitHub Pages** (Easiest)

### Perfect for: Beginners, GitHub-native workflow

### Step 1: Push Code to GitHub

```bash
# Make sure all changes are committed
git add .
git commit -m "feat: Complete portfolio setup"
git push origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository: `github.com/khushbukarki/Portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select `GitHub Actions`
   - **Branch:** Keep as `main`

### Step 3: Create GitHub Actions Workflow

Create file `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: actions/deploy-pages@v2
```

### Step 4: Verify Deployment

- [ ] Wait 2-3 minutes for build to complete
- [ ] Check "Actions" tab to see build status
- [ ] Your site is live at: `https://khushbukarki.github.io/Portfolio`

### Update Your README

```markdown
**Live Portfolio:** [https://khushbukarki.github.io/Portfolio](https://khushbukarki.github.io/Portfolio)
```

### ✅ GitHub Pages Completed!

**Your portfolio is now live!** 🎉

---

## 🎨 **Option 2: Netlify** (Recommended)

### Perfect for: More control, automatic deployments, built-in analytics

### Step 1: Sign Up on Netlify

1. Go to https://netlify.com
2. Click **Sign Up**
3. Choose **GitHub** to sign up with your GitHub account
4. Authorize Netlify to access your repositories

### Step 2: Create New Site

1. Click **Add new site** → **Import an existing project**
2. Select **GitHub** as your Git provider
3. Find and select your `Portfolio` repository
4. Click **Authorize Netlify**

### Step 3: Configure Build Settings

- **Owner:** khushbukarki
- **Branch to deploy:** main
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

Your settings should look like:
```
Build command:    npm run build
Publish directory: dist
```

### Step 4: Deploy

1. Click **Deploy site**
2. Netlify will build and deploy automatically (1-2 minutes)
3. Your site is live at: `https://[random-name].netlify.app`

### ✅ Netlify Deployment Complete!

---

## ⚡ **Option 3: Vercel** (Fastest for React)

### Perfect for: React apps, best performance, easiest workflow

### Step 1: Sign Up on Vercel

1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **GitHub** and authorize Vercel

### Step 2: Import Project

1. Click **Add New...** → **Project**
2. Find your `Portfolio` repository
3. Click **Import**

### Step 3: Configure Project

Vercel auto-detects Vite, but verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18

### Step 4: Deploy

1. Click **Deploy**
2. Wait for build to complete (30-60 seconds)
3. Your site is live at: `https://portfolio-[random].vercel.app`

### ✅ Vercel Deployment Complete!

---

## 🌐 **Setup Custom Domain** (All Platforms)

### Domain Registration (Choose One)

**Budget Options:**
- **Namecheap:** ~$8.88/year
- **GoDaddy:** $0.99/year (promo)
- **Google Domains:** $12/year

**Premium Options:**
- **Bluehost:** $2.95/month
- **HostGator:** $2.75/month

### Domain Setup Process

#### For GitHub Pages:

1. Buy domain (e.g., `khushbukarki.com`)
2. Go to Domain Registrar settings
3. Add **CNAME record:**
   - **Name:** www
   - **Value:** `khushbukarki.github.io`
4. Add **A records** (from GitHub docs):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. GitHub Settings → Pages → Custom domain: `www.khushbukarki.com`
6. Enable HTTPS (auto)

#### For Netlify:

1. Buy domain
2. In Netlify: **Site settings** → **Domain management**
3. Click **Add domain** → Enter your domain
4. Follow Netlify's DNS setup instructions
5. HTTPS auto-enabled (SSL certificate provided)

#### For Vercel:

1. Buy domain
2. In Vercel: **Settings** → **Domains**
3. Add your domain
4. Update DNS at your registrar
5. HTTPS auto-enabled

**Wait time:** 24-48 hours for DNS propagation

---

## 🔄 **Automatic Deployments**

After initial setup, deployments are automatic:

### How It Works:
```
You push code to GitHub
         ↓
GitHub webhook triggers
         ↓
Platform builds your code (npm run build)
         ↓
Output published to live site
         ↓
Your portfolio is updated! ✅
```

### Deployment Flow:
```bash
# Make changes locally
nano src/components/Projects.jsx

# Commit and push
git add .
git commit -m "feat: Add new project"
git push origin main

# Done! Site updates automatically in 30-60 seconds
```

---

## 🆘 Troubleshooting Deployments

### Build fails with "npm ERR!"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
git add .
git commit -m "fix: Reinstall dependencies"
git push
```

### Site shows 404 errors

**For GitHub Pages:**
- Check `dist/` folder exists
- Verify build command is correct
- Check GitHub Actions logs

**For Netlify/Vercel:**
- Verify build command: `npm run build`
- Check publish directory: `dist`
- Check build logs for errors

### Custom domain not working

- [ ] DNS propagated? (Wait 24-48 hours)
- [ ] CNAME record correct?
- [ ] Domain SSL certificate installed?
- [ ] Check domain registrar settings

**Debug:**
```bash
# Test DNS resolution
nslookup yourdomain.com
```

### Site loads but styles are broken

**Solution:**
- Check Netlify/Vercel build logs
- Ensure Tailwind CSS CDN loads
- Clear browser cache (Ctrl+Shift+Delete)
- Test in incognito/private window

---

## ✅ Post-Deployment Checklist

After going live, verify:

### Functionality
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Videos/media play
- [ ] Navigation works

### Performance
- [ ] Page loads in <3 seconds
- [ ] Lighthouse score >90
- [ ] Mobile responsive
- [ ] No console errors

### SEO & Analytics
- [ ] Meta tags display correctly
- [ ] Google Search Console submitted
- [ ] Analytics tracking works
- [ ] Sitemap.xml created

### Security
- [ ] HTTPS enabled (green lock)
- [ ] No mixed content warnings
- [ ] No vulnerable dependencies

**Check Performance:**
```bash
# Run production build
npm run build
npm run preview

# Open DevTools (F12)
# Go to Lighthouse tab
# Click "Analyze page load"
```

---

## 📊 Monitor Deployments

### GitHub Pages

```bash
# Check deployment status
# Settings → Pages → "Your site is published at..."
```

### Netlify

1. **Deploys tab:** See all past deployments
2. **Analytics:** Traffic, devices, referrers
3. **Logs:** Build logs for debugging

### Vercel

1. **Deployments tab:** Every push shows here
2. **Analytics:** Visit insights dashboard
3. **Logs:** Streaming build logs

---

## 🚀 Continuous Deployment Setup

### Auto-Deploy on Every Push

**GitHub Actions** (already covered above):
```yaml
# .github/workflows/deploy.yml
On every push to main:
1. Install dependencies
2. Build project
3. Deploy to GitHub Pages
```

### Environment Variables (if needed)

**Netlify:**
1. Site settings → Build & deploy → Environment
2. Add KEY=VALUE pairs

**Vercel:**
1. Settings → Environment Variables
2. Add NAME=VALUE pairs

---

## 💡 Deployment Best Practices

✅ **DO:**
- [ ] Test locally before pushing: `npm run preview`
- [ ] Use meaningful commit messages
- [ ] Keep dependencies updated: `npm update`
- [ ] Monitor deployment logs
- [ ] Setup analytics
- [ ] Use custom domain (looks professional)

❌ **DON'T:**
- [ ] Push directly without testing
- [ ] Leave console.log statements
- [ ] Commit node_modules
- [ ] Use unoptimized images
- [ ] Hardcode API keys in code

---

## 📞 Support

**Deployment Issues?**

1. Check platform-specific docs:
   - [GitHub Pages Docs](https://docs.github.com/en/pages)
   - [Netlify Docs](https://docs.netlify.com)
   - [Vercel Docs](https://vercel.com/docs)

2. Check build logs in deployment platform

3. Try clearing cache:
   ```bash
   rm -rf .git/hooks/pre-commit
   npm cache clean --force
   git push
   ```

4. Contact support or open GitHub issue

---

## 🎉 Congrats!

Your portfolio is live and accessible to the world! 🌍

**Next Steps:**
1. Share your portfolio link
2. Update LinkedIn with portfolio URL
3. Add to GitHub bio
4. Monitor analytics
5. Keep adding projects!

---

<div align="center">

### All Platforms Ready?

✅ GitHub Pages → `https://khushbukarki.github.io/Portfolio`
✅ Netlify → `https://[name].netlify.app`
✅ Vercel → `https://portfolio-[id].vercel.app`

**Choose your platform and deploy now!** 🚀

</div>
