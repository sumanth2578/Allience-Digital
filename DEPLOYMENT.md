# Deployment & Domain Setup Guide

To host your application on your custom domain `alliancedigitalmarketing.in`, I recommend using **Vercel** (the creators of Next.js) for the smoothest experience.

## Step 1: Push Code to GitHub
1. Create a repository on [GitHub](https://github.com).
2. Push your project code to this repository.

## Step 2: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Import your `Alliance Digital` repository.
4. Keep the default settings and click **Deploy**.

## Step 3: Connect your Domain
1. In your Vercel Project Dashboard, go to **Settings** > **Domains**.
2. Add `alliancedigitalmarketing.in`.
3. Vercel will provide **A Records** or **CNAME** records.
4. Log into your domain registrar (where you bought the domain) and update your **DNS Records** with the values from Vercel.

## Missing "Growth Image" Note
I've verified that `public/growth.png` exists. If you are seeing a blank space, it might be due to the animation delay or the file name case-sensitivity. I will double-check the `src/components/WhyUs.tsx` file for any issues.
