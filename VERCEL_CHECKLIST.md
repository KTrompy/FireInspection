# Vercel Deployment Checklist

## Before Deploying

- [ ] All changes committed and pushed to GitHub
- [ ] Supabase project is set up and active
- [ ] `inspections` table exists in Supabase (or use the SQL provided in DEPLOYMENT.md)
- [ ] Test locally: `npm run dev` → `http://localhost:3000`
- [ ] Form displays and accepts input
- [ ] Form submission works locally (check Supabase dashboard)

## Vercel Setup

- [ ] Have GitHub account connected to Vercel
- [ ] Vercel project created from GitHub repository
- [ ] Environment variables added to Vercel:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Project deployed to production

## Post-Deployment Verification

- [ ] Visit your Vercel URL
- [ ] Form displays correctly
- [ ] Fill out and submit test form
- [ ] Data appears in Supabase `inspections` table
- [ ] Success message displays after submission

## Custom Domain (Optional)

- [ ] Purchase domain (e.g., firesecurityinspections.com)
- [ ] Add domain in Vercel Settings → Domains
- [ ] Update DNS records per Vercel instructions
- [ ] Test custom domain URL

## Ongoing Maintenance

- [ ] Monitor Vercel deployment logs
- [ ] Set up email notifications for form submissions (via Supabase webhooks)
- [ ] Review submitted inspection requests regularly
- [ ] Update form fields as needed

---

**Status:** Ready for deployment ✓
