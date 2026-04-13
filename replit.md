# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### iLocksmiths Website (`artifacts/ilocksmiths`, preview: `/`)
- Full professional marketing website for iLocksmiths, a 24/7 emergency locksmith in London
- Dark minimalist design (zinc-950/900/800 palette), Framer Motion animations
- Pages: Home, Services, Service Detail, Pricing, About, Contact
- Contact form wired to backend POST /api/contact

### API Server (`artifacts/api-server`, preview: `/api`)
- Express 5 backend
- Routes: GET /api/healthz, POST /api/contact, GET /api/inquiries
- DB schema: `inquiries` table (PostgreSQL via Drizzle ORM)

## Database Schema

- `inquiries` — contact form submissions (id, name, phone, email, service, message, contactPreference, status, createdAt)

## Business Info (iLocksmiths)
- Phone: +44 7340 041444
- Email: sales@ilocksmiths.uk
- WhatsApp: 447340041444
- Location: London, UK
- Service: 24/7 Emergency Locksmith

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
