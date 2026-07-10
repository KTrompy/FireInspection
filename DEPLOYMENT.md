# Fire Inspection App - Deployment Guide

## What I Fixed

✅ Replaced the default Next.js template with your actual fire inspection form
✅ Created `/lib/supabase.ts` for proper Supabase client initialization
✅ Updated metadata and layout for the inspection app

Your app now displays the complete fire & security inspection request form with:
- Business information collection
- Property address fields
- Inspection type selection
- Date preference
- Notes section
- Form submission to Supabase

## Vercel Deployment Steps

### 1. Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Fix app routing and prepare for deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account (or create one)
3. Click "Add New..." → "Project"
4. Import your repository from GitHub
5. Select your `fire-inspection-app` repository

### 3. Configure Environment Variables

In the Vercel dashboard, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://wulagqruqvyioclf...supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

These are already in your `.env.local` file. Copy them from there.

### 4. Deploy

Click "Deploy" - Vercel will automatically:
- Install dependencies
- Build the Next.js app
- Deploy to production

Your app will be live at a URL like: `https://fire-inspection-app.vercel.app`

## Verifying Supabase Integration

After deployment, test the form submission:

1. Visit your Vercel deployment URL
2. Fill out the inspection request form
3. Click "Request Inspection"
4. Check your Supabase dashboard:
   - Go to [https://supabase.com](https://supabase.com)
   - Select your project
   - Go to "SQL Editor"
   - Query: `SELECT * FROM inspections;`
   - You should see your submitted form data

## Troubleshooting

### "Missing Supabase credentials" error
- Verify environment variables are set in Vercel dashboard
- Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are added
- Redeploy after adding environment variables

### Form not submitting
- Check browser console (F12) for errors
- Verify the `inspections` table exists in your Supabase database
- Ensure Supabase RLS (Row Level Security) policies allow insertions

### Supabase table doesn't exist
Create it with this SQL in Supabase:

```sql
CREATE TABLE inspections (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  inspection_type TEXT NOT NULL,
  preferred_date DATE,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Disable RLS to allow public inserts (for testing)
ALTER TABLE inspections DISABLE ROW LEVEL SECURITY;
```

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

The form should work locally with your Supabase credentials from `.env.local`.

## Next Steps

1. Push your changes to GitHub
2. Follow the Vercel deployment steps above
3. Test the form submission
4. Share your live URL with stakeholders

---

**Questions?** Check the [Next.js Docs](https://nextjs.org/docs) and [Supabase Docs](https://supabase.com/docs)
