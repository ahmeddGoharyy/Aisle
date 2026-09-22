# Aisle — Frontend Style Guide

## Overview

Aisle's frontend is built with **Next.js 14+ (App Router)** and **TypeScript**, styled with **Tailwind CSS**, and designed as a multi-tenant wedding platform where each wedding can have its own accent theme.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Server Components + Client Components |
| Language | TypeScript | Type safety across the entire frontend |
| Styling | Tailwind CSS | Utility-first, fast per-wedding theming |
| State/Data | Supabase JS Client | Auth, Realtime subscriptions, data fetching |
| Hosting | Vercel | Next.js-native hosting with preview deployments |

---

## Design System

### Typography

```css
/* Primary Font Family */
--font-heading: 'Playfair Display', serif;    /* Elegant, wedding-appropriate */
--font-body: 'Inter', sans-serif;              /* Clean, modern readability */
--font-accent: 'Great Vibes', cursive;         /* Decorative, for couple names */

/* Scale */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
```

### Color Palette

#### Platform Colors (Global)

```css
/* Neutrals */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-black: #000000;

/* Brand */
--color-primary: #B76E79;          /* Dusty Rose — romantic, warm */
--color-primary-light: #D4A0A7;
--color-primary-dark: #8B4F58;
--color-secondary: #2C3E50;        /* Dark Slate — professional, grounding */
--color-accent: #D4AF37;           /* Gold — celebratory, premium */

/* Semantic */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

#### Per-Wedding Theming

Each wedding can customize its accent color via `wedding_details` key-value:

```typescript
// CSS custom properties injected at the wedding layout level
interface WeddingTheme {
  accentColor: string;      // e.g., "#B76E79"
  accentColorLight: string;
  accentColorDark: string;
  fontChoice?: 'classic' | 'modern' | 'romantic';
}
```

```html
<!-- Applied via a Server Component at /w/[slug]/layout.tsx -->
<div style={{
  '--wedding-accent': theme.accentColor,
  '--wedding-accent-light': theme.accentColorLight,
  '--wedding-accent-dark': theme.accentColorDark,
}}>
  {children}
</div>
```

### Spacing & Layout

```css
/* Spacing scale (Tailwind default) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */

/* Breakpoints */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;

/* Container max widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### Shadows & Borders

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-full: 9999px;    /* pill */
```

---

## Component Architecture

### Component Categories

```
src/
├── components/
│   ├── ui/                      # Design system primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── Avatar.tsx
│   │   ├── Spinner.tsx
│   │   └── Toast.tsx
│   │
│   ├── layout/                  # Structural components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Container.tsx
│   │   └── PageShell.tsx
│   │
│   ├── wedding/                 # Wedding-specific components
│   │   ├── LoveStorySection.tsx
│   │   ├── VenueCard.tsx
│   │   ├── WeddingDetailsList.tsx
│   │   ├── PhotoGrid.tsx
│   │   ├── PhotoUploader.tsx
│   │   ├── GuestbookEntry.tsx
│   │   ├── GuestbookForm.tsx
│   │   └── WeddingHero.tsx
│   │
│   ├── admin/                   # Admin console components
│   │   ├── WeddingsTable.tsx
│   │   ├── UsersTable.tsx
│   │   ├── StatsCards.tsx
│   │   └── AuditLogTable.tsx
│   │
│   └── moderator/               # Moderator console components
│       ├── ContentQueue.tsx
│       ├── GuestRoster.tsx
│       ├── InviteForm.tsx
│       └── ContentEditor.tsx
```

### Component Conventions

1. **Server Components by default** — use `'use client'` only when interactivity is required (event handlers, state, effects, browser APIs).
2. **Props typing** — always define a `Props` interface per component.
3. **Composition over inheritance** — use React children and render props patterns.
4. **Naming** — PascalCase for components, camelCase for utilities.

```typescript
// Example component pattern
interface PhotoGridProps {
  weddingId: string;
  initialPhotos: Photo[];
  canUpload: boolean;
}

export function PhotoGrid({ weddingId, initialPhotos, canUpload }: PhotoGridProps) {
  // ...
}
```

---

## Page Layout Patterns

### Public Landing Page (`/`)

```
┌─────────────────────────────────────┐
│            Navigation Bar           │
│  Logo          [Login] [Create]     │
├─────────────────────────────────────┤
│                                     │
│          Hero Section               │
│    "Celebrate Your Love Story"      │
│         [Get Started]               │
│                                     │
├─────────────────────────────────────┤
│         Feature Cards               │
│   📸  Gallery  │  📝  Guestbook    │
│   🗺️  Venue    │  💌  Invites      │
├─────────────────────────────────────┤
│       How It Works (Steps)          │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

### Wedding Micro-Site (`/w/[slug]`)

```
┌─────────────────────────────────────┐
│     Wedding Navigation Bar          │
│  Couple Names     Story│Venue│Photos│
├─────────────────────────────────────┤
│                                     │
│       Wedding Hero Image            │
│     "Sarah & James"                 │
│      June 15, 2027                  │
│                                     │
├─────────────────────────────────────┤
│        Content Area                 │
│   (Love Story / Venue / Gallery     │
│    / Guestbook — route dependent)   │
│                                     │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

### Admin Console (`/admin`)

```
┌───────┬───────────────────────────────┐
│       │        Top Bar                │
│  S    ├───────────────────────────────┤
│  i    │                               │
│  d    │     Stats Cards Row           │
│  e    │   📊 Active │ 👥 Users │ ...  │
│  b    │                               │
│  a    ├───────────────────────────────┤
│  r    │                               │
│       │     Data Table                │
│  N    │   Weddings / Users / Logs     │
│  a    │                               │
│  v    │                               │
└───────┴───────────────────────────────┘
```

---

## Animation & Interaction Patterns

### Transitions

```css
/* Default transition */
transition: all 0.2s ease-in-out;

/* Page transitions */
transition: opacity 0.3s ease, transform 0.3s ease;

/* Gallery image load */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Micro-interactions

- **Button hover**: Subtle scale (1.02) + shadow elevation
- **Card hover**: Lift effect with shadow-lg
- **Photo gallery**: Masonry grid with staggered fade-in animations
- **Real-time updates**: Gentle slide-in animation for new photos/notes
- **Form submission**: Button loading state with spinner + disabled style
- **Toast notifications**: Slide in from top-right, auto-dismiss after 5s

### Scrolling Behavior

- **Love story page**: Parallax scroll effect on section images
- **Photo gallery**: Infinite scroll with intersection observer
- **Smooth scroll**: `scroll-behavior: smooth` for anchor navigation

---

## Responsive Design

| Breakpoint | Target | Layout Changes |
|---|---|---|
| `< 640px` (mobile) | Phones | Single column, hamburger nav, full-width cards |
| `640-768px` (sm) | Large phones | 2-column photo grid |
| `768-1024px` (md) | Tablets | Side-by-side content, visible nav |
| `1024-1280px` (lg) | Laptops | Full layout with sidebar (admin) |
| `> 1280px` (xl) | Desktops | Max-width container, spacious layout |

### Mobile-First Approach

- All styles are mobile-first, using `min-width` media queries for larger screens.
- Touch targets minimum 44×44px.
- Swipe gestures for photo gallery navigation on mobile.

---

## Accessibility Guidelines

- **Color contrast**: WCAG AA minimum (4.5:1 for normal text, 3:1 for large text).
- **Focus indicators**: Visible focus rings on all interactive elements.
- **Semantic HTML**: Proper heading hierarchy, landmark regions, ARIA labels.
- **Keyboard navigation**: Full tab navigation support, escape to close modals.
- **Alt text**: Required for all images; auto-suggested from captions.
- **Reduced motion**: Respect `prefers-reduced-motion` for all animations.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode Support

The platform supports dark mode via Tailwind's `dark:` variant:

```typescript
// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  // ...
}
```

Toggle stored in `localStorage` and synced with system preference.
