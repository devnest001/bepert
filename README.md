# BEPERT Solutions website

Corporate website for **BEPERT Solutions**, a Technology Services & Consulting company.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript

## Configuration

Copy `.env.example` to `.env.local` and fill in values as they become available.

Forms validate on the client and server. They only report successful delivery when `RESEND_API_KEY` + `CONTACT_TO_EMAIL`, or `CONTACT_WEBHOOK_URL`, is configured.

## Content you can edit

- Navigation and company copy: `lib/site.ts`
- Services, industries, values, case studies, jobs: `lib/content.ts`

Add a case study by pushing an object into `caseStudies`. Add a vacancy by pushing an object into `jobOpenings`.
