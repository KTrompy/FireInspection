# Complete Setup Guide: Git → GitHub → Vercel

This guide takes you from zero to deployed. No prior experience needed.

---

## PART 1: Set Up Git (5 minutes)

Git is version control software. You need it to track changes and deploy.

### Step 1: Install Git

1. Go to https://git-scm.com/download/win
2. Download the Windows installer
3. Run the installer (accept all default options)
4. Open PowerShell or Command Prompt and verify:
   ```
   git --version
   ```
   You should see something like `git version 2.x.x`

### Step 2: Configure Git Locally

Open PowerShell and run these commands (replace with your info):

```powershell
git config --global user.name "Kyle Trompeter"
git config --global user.email "kyletrompeter0@gmail.com"
```

Verify it worked:
```powershell
git config --global user.name
git config --global user.email
```

---

## PART 2: Initialize Git in Your Project (3 minutes)

### Step 1: Open PowerShell in Your Project Folder

1. Navigate to your project: `C:\Users\kylet\OneDrive\Desktop\fire-inspection-app`
2. Right-click in the folder → "Open PowerShell here"

### Step 2: Initialize Git Repository

Run these commands one at a time:

```powershell
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: fire inspection app"
```

You should see output like:
```
[main (root-commit) abc123] Initial commit: fire inspection app
 15 files changed, 500 insertions(+)
```

### Step 3: Verify Git is Tracking Files

```powershell
git status
```

You should see: `On branch main. nothing to commit, working tree clean`

---

## PART 3: Create GitHub Account (5 minutes)

GitHub is where you store your code online.

### Step 1: Sign Up for GitHub

1. Go to https://github.com/signup
2. Enter your email: `kyletrompeter0@gmail.com`
3. Create a password (save it somewhere safe)
4. Username: `kyletrompeter` (or similar)
5. Verify your email by clicking the link GitHub sends

### Step 2: Create a New Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `fire-inspection-app`
   - **Description:** `Fire & security inspection request form`
   - **Public** (checked)
3. Click "Create repository"

You'll see a page with instructions. Copy the commands shown (they'll look like below, but with YOUR username):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fire-inspection-app.git
git push -u origin main
```

---

## PART 4: Push Your Code to GitHub (5 minutes)

### Step 1: Add Remote and Push

In PowerShell (in your project folder), run the commands GitHub showed you:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fire-inspection-app.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: GitHub May Ask for Permission

GitHub will open a browser window asking for permission. Click "Authorize" or "Allow".

### Step 3: Verify Code is on GitHub

1. Go to https://github.com/YOUR_USERNAME/fire-inspection-app
2. You should see your code files listed (app/, lib/, package.json, etc.)

---

## PART 5: Create Vercel Account (3 minutes)

Vercel is the service that hosts your website.

### Step 1: Sign Up

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Complete your profile (company name is optional)

---

## PART 6: Deploy to Vercel (5 minutes)

### Step 1: Create New Project

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Under "Import Git Repository", click "GitHub"
4. Find and select `fire-inspection-app`
5. Click "Import"

### Step 2: Configure Project

1. **Framework Preset:** Leave as "Next.js" (auto-detected)
2. **Root Directory:** Leave blank
3. Click "Continue"

### Step 3: Add Environment Variables

This is important! Your app needs these to connect to Supabase.

On the "Environment Variables" screen:

**Add Variable 1:**
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** Copy from your `.env.local` file (everything after the `=`)
  - It looks like: `https://wulagqruqvyioclf...supabase.co`
- Click "Add"

**Add Variable 2:**
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** Copy from your `.env.local` file
  - It's a long string starting with `eyJ...`
- Click "Add"

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for Vercel to build and deploy
3. You'll see a green checkmark when it's done

### Step 5: Get Your URL

1. Click "Visit"
2. Your app is now LIVE!
3. Copy this URL - it's your deployed website

---

## PART 7: Test Your Deployed App (5 minutes)

### Step 1: Visit Your Live URL

Click the URL Vercel gave you (it looks like `https://fire-inspection-app-xyz123.vercel.app`).

You should see:
- "Fire & Security Inspection" heading
- A form with fields for business name, contact, address, etc.

### Step 2: Test Form Submission

1. Fill out all fields:
   - Business Name: `Test Business`
   - Contact Name: `Your Name`
   - Email: `test@example.com`
   - Phone: `555-123-4567`
   - Address: `123 Main St`
   - City: `Anytown`
   - State: `CA`
   - ZIP: `12345`
   - Inspection Type: `Fire Safety Inspection`

2. Click "Request Inspection"

3. You should see: `✓ Request submitted successfully! We'll contact you shortly.`

### Step 3: Verify Data in Supabase

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click "SQL Editor" (left sidebar)
4. Run this query:
   ```sql
   SELECT * FROM inspections ORDER BY created_at DESC LIMIT 1;
   ```
5. You should see your test submission!

---

## PART 8: How to Update Your App (Going Forward)

Every time you change the code:

### In PowerShell (your project folder):
```powershell
# See what changed
git status

# Add changes
git add .

# Save changes with a message
git commit -m "Your description of changes"

# Push to GitHub
git push
```

Vercel automatically deploys when you push to GitHub!

---

## TROUBLESHOOTING

### "fatal: not a git repository"
- Make sure PowerShell is open in your project folder (right-click → "Open PowerShell here")
- Or use: `cd C:\Users\kylet\OneDrive\Desktop\fire-inspection-app`

### "git: command not found"
- Git wasn't installed properly
- Restart PowerShell after installing Git
- Try `git --version` again

### "Error: authentication failed"
- GitHub is asking for permission
- When prompted, use GitHub to authorize (browser window opens automatically)
- Or run: `git config --global credential.helper wincred`

### "Deployment failed on Vercel"
- Check that environment variables are set correctly
- Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` don't have typos
- Go to Vercel dashboard → Project → Settings → Environment Variables to verify

### Form doesn't submit
- Check browser console (F12 → Console tab)
- Make sure `inspections` table exists in Supabase
- If it doesn't exist, run the SQL from DEPLOYMENT.md

---

## YOU'RE DONE! 🎉

Your fire inspection app is now:
✅ Tracked with Git
✅ Stored on GitHub
✅ Deployed to Vercel
✅ Connected to Supabase
✅ Live on the internet

Share your Vercel URL with anyone to let them submit inspection requests!

---

**Next time you change code:**
```powershell
git add .
git commit -m "describe your changes"
git push
```

That's it. Vercel redeploys automatically.
