# Aisle — Project File Structure

## Root Directory

```
Aisle/
├── .github/                           # GitHub workflows & templates
│   ├── workflows/
│   │   ├── ci.yml                     # Lint, type-check, test on PR
│   │   └── deploy.yml                 # Production deployment pipeline
│   └── PULL_REQUEST_TEMPLATE.md
│
├── Docs/                              # Project documentation
│   ├── Database Schema/
│   │   └── README.md                  # ER diagrams, table definitions, RLS policies
│   ├── Use Case Diagram/
│   │   └── README.md                  # Actor diagrams, use case tables, sequence diagrams
│   ├── Frontend Style/
│   │   └── README.md                  # Design system, components, theming, accessibility
│   ├── Backend Architecture/
│   │   └── README.md                  # Supabase services, Edge Functions, security model
│   ├── Business Description/
│   │   └── README.md                  # Vision, value prop, pricing, roadmap, KPIs
│   └── Project Document/
│       └── README.md                  # General project documentation
│
├── src/                               # Next.js application source
│   ├── app/                           # App Router pages & layouts
│   │   ├── layout.tsx                 # Root layout (fonts, providers, metadata)
│   │   ├── page.tsx                   # Public landing page (/)
│   │   ├── globals.css                # Global styles & CSS variables
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx               # Universal login (/login)
│   │   │
│   │   ├── create-event/
│   │   │   └── page.tsx               # Admin: new wedding wizard (/create-event)
│   │   │
│   │   ├── weddings/
│   │   │   └── page.tsx               # "My Weddings" list (/weddings)
│   │   │
│   │   ├── w/
│   │   │   └── [slug]/
│   │   │       ├── layout.tsx         # Wedding-scoped layout (theme injection)
│   │   │       ├── page.tsx           # Wedding micro-landing (/w/[slug])
│   │   │       ├── login/
│   │   │       │   └── page.tsx       # Wedding-scoped login (/w/[slug]/login)
│   │   │       ├── story/
│   │   │       │   └── page.tsx       # Love story (/w/[slug]/story)
│   │   │       ├── venue/
│   │   │       │   └── page.tsx       # Venue & details (/w/[slug]/venue)
│   │   │       ├── gallery/
│   │   │       │   └── page.tsx       # Photo gallery + upload (/w/[slug]/gallery)
│   │   │       ├── notes/
│   │   │       │   └── page.tsx       # Guestbook / notes (/w/[slug]/notes)
│   │   │       └── moderate/
│   │   │           └── page.tsx       # Moderator console (/w/[slug]/moderate)
│   │   │
│   │   └── admin/
│   │       ├── layout.tsx             # Admin layout with sidebar
│   │       ├── page.tsx               # Admin dashboard (/admin)
│   │       └── weddings/
│   │           └── [id]/
│   │               └── page.tsx       # Admin wedding drill-down (/admin/weddings/[id])
│   │
│   ├── components/                    # Reusable React components
│   │   ├── ui/                        # Design system primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Dialog.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Spinner.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── Skeleton.tsx
│   │   │
│   │   ├── layout/                    # Structural / layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── PageShell.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── wedding/                   # Wedding micro-site components
│   │   │   ├── WeddingHero.tsx
│   │   │   ├── LoveStorySection.tsx
│   │   │   ├── VenueCard.tsx
│   │   │   ├── VenueMap.tsx
│   │   │   ├── WeddingDetailsList.tsx
│   │   │   ├── PhotoGrid.tsx
│   │   │   ├── PhotoCard.tsx
│   │   │   ├── PhotoUploader.tsx
│   │   │   ├── PhotoLightbox.tsx
│   │   │   ├── GuestbookEntry.tsx
│   │   │   ├── GuestbookForm.tsx
│   │   │   └── WeddingNav.tsx
│   │   │
│   │   ├── admin/                     # Admin console components
│   │   │   ├── WeddingsTable.tsx
│   │   │   ├── UsersTable.tsx
│   │   │   ├── StatsCards.tsx
│   │   │   ├── AuditLogTable.tsx
│   │   │   └── PlatformMetrics.tsx
│   │   │
│   │   ├── moderator/                 # Moderator console components
│   │   │   ├── ContentQueue.tsx
│   │   │   ├── PhotoReviewCard.tsx
│   │   │   ├── NoteReviewCard.tsx
│   │   │   ├── GuestRoster.tsx
│   │   │   ├── InviteForm.tsx
│   │   │   ├── ContentEditor.tsx
│   │   │   └── ModerationActions.tsx
│   │   │
│   │   ├── auth/                      # Auth-related components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── MagicLinkForm.tsx
│   │   │   ├── OAuthButtons.tsx
│   │   │   └── AuthGuard.tsx
│   │   │
│   │   └── landing/                   # Public landing page components
│   │       ├── HeroSection.tsx
│   │       ├── FeatureCards.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Testimonials.tsx
│   │       ├── PricingSection.tsx
│   │       └── CTASection.tsx
│   │
│   ├── lib/                           # Shared utilities & configuration
│   │   ├── supabase/
│   │   │   ├── client.ts              # Browser Supabase client
│   │   │   ├── server.ts              # Server-side Supabase client
│   │   │   ├── middleware.ts          # Auth middleware helper
│   │   │   └── admin.ts              # Service-role client (server only)
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                  # Class name merge utility (clsx + twMerge)
│   │   │   ├── formatDate.ts          # Date formatting helpers
│   │   │   ├── slugify.ts             # URL slug generation
│   │   │   ├── validators.ts          # Zod schemas for form validation
│   │   │   └── constants.ts           # App-wide constants
│   │   │
│   │   ├── hooks/                     # Custom React hooks
│   │   │   ├── useAuth.ts             # Auth state hook
│   │   │   ├── useWedding.ts          # Wedding context hook
│   │   │   ├── useRealtime.ts         # Realtime subscription hook
│   │   │   ├── useRole.ts             # Role-based access hook
│   │   │   ├── usePhotos.ts           # Photo gallery state hook
│   │   │   └── useToast.ts            # Toast notification hook
│   │   │
│   │   ├── actions/                   # Server Actions (Next.js)
│   │   │   ├── wedding.actions.ts     # Wedding CRUD actions
│   │   │   ├── photo.actions.ts       # Photo upload/moderate actions
│   │   │   ├── note.actions.ts        # Guestbook note actions
│   │   │   ├── invite.actions.ts      # Guest invite actions
│   │   │   └── auth.actions.ts        # Auth-related server actions
│   │   │
│   │   └── helpers/
│   │       ├── getSessionAndRole.ts   # Shared auth + role resolver
│   │       ├── errorHandler.ts        # Centralized error handling
│   │       └── rateLimit.ts           # Rate limiting utility
│   │
│   ├── types/                         # TypeScript type definitions
│   │   ├── database.types.ts          # Auto-generated Supabase types
│   │   ├── wedding.types.ts           # Wedding-related types
│   │   ├── auth.types.ts              # Auth & role types
│   │   └── api.types.ts               # API request/response types
│   │
│   ├── providers/                     # React context providers
│   │   ├── AuthProvider.tsx           # Supabase auth context
│   │   ├── ThemeProvider.tsx          # Dark mode / wedding theme context
│   │   ├── ToastProvider.tsx          # Toast notification context
│   │   └── RealtimeProvider.tsx       # Realtime subscription context
│   │
│   └── middleware.ts                  # Next.js middleware (auth session refresh)
│
├── supabase/                          # Supabase project config & migrations
│   ├── config.toml                    # Supabase local dev config
│   │
│   ├── migrations/                    # Database migrations (ordered)
│   │   ├── 00001_create_profiles.sql
│   │   ├── 00002_create_weddings.sql
│   │   ├── 00003_create_memberships.sql
│   │   ├── 00004_create_love_story.sql
│   │   ├── 00005_create_venues.sql
│   │   ├── 00006_create_wedding_details.sql
│   │   ├── 00007_create_photos.sql
│   │   ├── 00008_create_notes.sql
│   │   ├── 00009_create_invites.sql
│   │   ├── 00010_create_activity_log.sql
│   │   ├── 00011_create_rls_helpers.sql
│   │   ├── 00012_enable_rls_policies.sql
│   │   └── 00013_create_indexes.sql
│   │
│   ├── functions/                     # Supabase Edge Functions
│   │   ├── create-wedding/
│   │   │   └── index.ts               # Wedding creation (admin)
│   │   ├── invite-guest/
│   │   │   └── index.ts               # Guest invite + email
│   │   ├── process-photo-upload/
│   │   │   └── index.ts               # Photo validation + storage
│   │   ├── moderate-content/
│   │   │   └── index.ts               # Content approval/rejection
│   │   └── send-notifications/
│   │       └── index.ts               # Email/WhatsApp dispatch
│   │
│   └── seed.sql                       # Development seed data
│
├── public/                            # Static assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── logo-dark.svg
│   │   ├── hero-bg.jpg
│   │   ├── og-image.jpg              # Open Graph social preview
│   │   └── placeholder-wedding.jpg
│   ├── fonts/                         # Self-hosted fonts (if any)
│   ├── favicon.ico
│   └── robots.txt
│
├── tests/                             # Test files
│   ├── unit/                          # Unit tests
│   │   ├── utils/
│   │   │   ├── slugify.test.ts
│   │   │   ├── formatDate.test.ts
│   │   │   └── validators.test.ts
│   │   └── components/
│   │       ├── Button.test.tsx
│   │       └── PhotoGrid.test.tsx
│   │
│   ├── integration/                   # Integration tests
│   │   ├── auth.test.ts
│   │   ├── wedding-crud.test.ts
│   │   └── photo-upload.test.ts
│   │
│   └── e2e/                           # End-to-end tests (Playwright)
│       ├── landing.spec.ts
│       ├── create-event.spec.ts
│       ├── guest-flow.spec.ts
│       └── moderator-flow.spec.ts
│
├── .env.local                         # Local environment variables (git-ignored)
├── .env.example                       # Environment variable template
├── .eslintrc.json                     # ESLint configuration
├── .gitignore                         # Git ignore rules
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── postcss.config.js                  # PostCSS configuration (for Tailwind)
├── package.json                       # Dependencies & scripts
├── package-lock.json                  # Lockfile
├── Aisle Archi.md                     # System architecture document
└── README.md                          # Project README
```

---

## Directory Purposes

| Directory | Purpose |
|---|---|
| `src/app/` | Next.js App Router — pages, layouts, and route segments |
| `src/components/` | Reusable React components, organized by domain |
| `src/lib/` | Utilities, hooks, server actions, and Supabase clients |
| `src/types/` | TypeScript type definitions (including auto-generated DB types) |
| `src/providers/` | React context providers for auth, theme, and realtime |
| `supabase/migrations/` | Ordered SQL migration files for schema + RLS |
| `supabase/functions/` | Supabase Edge Functions (Deno/TypeScript) |
| `public/` | Static assets served directly (images, fonts, favicon) |
| `tests/` | Unit, integration, and E2E test files |
| `Docs/` | Project documentation across five domains |

---

## Key Files

| File | Purpose |
|---|---|
| `src/middleware.ts` | Refreshes Supabase auth session on every request |
| `src/lib/supabase/server.ts` | Creates Supabase client for Server Components |
| `src/lib/supabase/client.ts` | Creates Supabase client for Client Components |
| `src/lib/helpers/getSessionAndRole.ts` | Shared helper that resolves user session + wedding role |
| `src/types/database.types.ts` | Auto-generated from `supabase gen types typescript` |
| `supabase/seed.sql` | Development seed data for local testing |
| `.env.local` | Contains `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |

---

## Environment Variables

### `.env.example`

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-only (NEVER prefix with NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email Provider
RESEND_API_KEY=your-resend-key

# WhatsApp Business API (Meta Cloud API)
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
WHATSAPP_BUSINESS_ACCOUNT_ID=your-business-account-id

# Monitoring
SENTRY_DSN=https://your-sentry-dsn

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:e2e": "playwright test",
    "db:gen-types": "supabase gen types typescript --local > src/types/database.types.ts",
    "db:migrate": "supabase db push",
    "db:seed": "supabase db reset",
    "db:studio": "supabase studio",
    "functions:serve": "supabase functions serve",
    "functions:deploy": "supabase functions deploy"
  }
}
```
