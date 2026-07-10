# Quick Reference Card

## The Big Picture

```
Your Computer → GitHub → Vercel → Live Website
   (Git)       (Cloud)   (Deploy)   (Internet)
```

## Installation Checklist

- [ ] Git installed? → https://git-scm.com/download/win
- [ ] GitHub account? → https://github.com/signup
- [ ] Vercel account? → https://vercel.com/signup

## Commands You'll Use

### First Time Only (Setup)
```powershell
# 1. Configure git
git config --global user.name "Kyle Trompeter"
git config --global user.email "kyletrompeter0@gmail.com"

# 2. Initialize project
git init
git add .
git commit -m "Initial commit"

# 3. Connect to GitHub (use YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/fire-inspection-app.git
git branch -M main
git push -u origin main
```

### Every Time You Change Code
```powershell
git add .
git commit -m "describe what you changed"
git push
```

That's it! Vercel auto-deploys.

## GitHub to Vercel Flow

1. Make changes locally
2. `git add . && git commit -m "message" && git push`
3. GitHub gets updated
4. Vercel sees the change
5. Vercel auto-deploys (2-3 minutes)
6. Your live site updates

## Environment Variables (Vercel Dashboard)

Add these in Vercel Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL = [copy from .env.local]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [copy from .env.local]
```

## Important Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Your form (what users see) |
| `lib/supabase.ts` | Connects to Supabase database |
| `.env.local` | Your secrets (never commit!) |
| `SETUP_GUIDE.md` | Full step-by-step instructions |

## Your URLs

- **GitHub:** https://github.com/YOUR_USERNAME/fire-inspection-app
- **Vercel:** https://fire-inspection-app-[random].vercel.app
- **Supabase:** https://supabase.com/dashboard

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| "not a git repository" | Open PowerShell in your project folder |
| "git not found" | Restart PowerShell after installing Git |
| "Failed authentication" | Click GitHub authorization when prompted |
| Form doesn't submit | Check environment variables in Vercel |
| Data not in Supabase | Create `inspections` table (see DEPLOYMENT.md) |

## Next Steps

1. ✅ Install Git
2. ✅ Create GitHub account
3. ✅ Create Vercel account
4. ✅ Follow SETUP_GUIDE.md step by step
5. ✅ Share your Vercel URL with others

---

**Questions?** Refer to SETUP_GUIDE.md for detailed explanations.
