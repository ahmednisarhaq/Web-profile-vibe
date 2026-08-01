# Ahmed Nisar - Professional Portfolio

This package is configured as a standard Next.js application for deployment on Vercel.

## Upload to GitHub

1. Create a new empty GitHub repository.
2. Extract this ZIP.
3. Upload everything inside the extracted folder to the root of the repository.
4. Commit the files to the `main` branch.

## Deploy on Vercel

1. In Vercel, choose **Add New Project**.
2. Import the GitHub repository.
3. Confirm these settings:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: leave blank
   - Install Command: `npm install`
   - Node.js Version: `22.x`
4. Select **Deploy**.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important files

- `app/page.tsx` - webpage content
- `app/globals.css` - design and responsive styling
- `app/layout.tsx` - metadata
- `public/ahmed-nisar.png` - profile photograph
- `private/Ahmed-Nisar-CV.pdf` - résumé stored outside the public web folder

## Protected résumé download

The résumé button asks for an authorized email address. The server checks the
email against the allowlist in `app/api/resume/route.ts` before returning the
PDF. The PDF is not directly available from the `public` folder.

When updating an older repository, delete `public/Ahmed-Nisar-CV.pdf`. Leaving
that old file in place would keep the résumé publicly accessible by URL.

This is an email allowlist, not mailbox verification: anyone who knows one of
the permitted addresses can type it. Use an emailed one-time code or magic link
if proof of email ownership is required.
