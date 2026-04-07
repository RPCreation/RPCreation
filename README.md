# VirajAI Resume Maker

Monorepo with:
- `frontend` (Next.js + Tailwind + React Hook Form + Zod)
- `backend` (Node.js + Express + MongoDB + Puppeteer)

## Quick Start

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Frontend runs on `http://localhost:3000` and calls backend on `http://localhost:5000` by default.
