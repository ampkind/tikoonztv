# TIKOONZ (static site + Supabase storage/admin)

This repo contains a minimal, high-end static site for **tikoonz.com** with:
- `index.html`: hero YouTube video + caption + navigation + links to `tikoonz.shop` and `tikoonz.tv`
- `about.html`: KR/EN toggle
- `audition.html`: KR/EN toggle + **link-based** submission form (Instagram/Facebook/YouTube required) stored to Supabase
- `contact.html`: KR/EN toggle
- `admin.html`: Admin login -> list -> delete submissions (protected by RLS)

## 1) Configure Supabase
1. Create a project at Supabase.
2. Run the SQL in `supabase/schema.sql` (tables + RLS policies).
3. Create an admin user (Auth -> Users -> Add user).
4. Insert the admin user id into `public.admin_users` as described in the schema file.
5. Copy `SUPABASE_URL` and `SUPABASE_ANON_KEY` into `assets/config.js`.

## 2) Deploy
This is a static site. Deploy to GitHub Pages / Netlify / Vercel / Cloudflare Pages, etc.

## 3) Security notes
- The anon key is safe to use on the client **because RLS is enabled**.
- Public users can only `INSERT` into `auditions`.
- Only users listed in `admin_users` can `SELECT` and `DELETE`.

## 4) YouTube video
Update `index.html`:
- Replace `REPLACE_WITH_YOUTUBE_ID` with your actual YouTube video id (twice in the iframe URL).

- `artist.html`: Artist section (currently: ICE UNICORN)

## Logo
Place your logo at `assets/logo.png` (included).

## GitHub Pages
This repo is configured with **relative paths** (`./assets/...`) so it works on GitHub Pages project sites.
