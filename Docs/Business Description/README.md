# Aisle — Project Business Description

## Product Vision

**Aisle** is a multi-tenant **Wedding SaaS platform** that gives every couple their own digital wedding space — a beautiful micro-site to share their love story, venue details, photo gallery, and guestbook with their wedding guests. It's designed to be the central hub where couples, their moderators, and guests come together before, during, and after the wedding day.

---

## Problem Statement

Planning and celebrating a wedding today involves fragmented communication across multiple channels:

- **Scattered information** — Venue details shared via WhatsApp, love stories posted on Instagram, photos uploaded to Google Drive, guest coordination via email chains.
- **No unified experience** — Guests don't have a single place to find all wedding information, contribute photos, or leave well-wishes.
- **No content control** — Couples can't moderate what gets shared publicly or privately among their guests.
- **Complex tools** — Existing wedding websites are either too basic (static pages) or too complex (full CMS platforms not designed for weddings).

---

## Solution

Aisle provides a **simple, elegant, all-in-one wedding platform** where:

1. **Each wedding gets its own mini-site** with a unique URL (`aisle.app/w/sarah-and-james`).
2. **Three clear roles** ensure the right people have the right access:
   - **Admins** create and manage weddings across the platform.
   - **Moderators** (typically the couple or wedding planner) manage their wedding's content, guest list, and moderation queue.
   - **Guests** view the wedding site, upload photos, and leave guestbook messages.
3. **Real-time collaboration** — Photos and notes appear live for everyone, creating a shared experience.
4. **Built-in moderation** — Couples can approve or filter guest-submitted content before it goes live.

---

## Target Users

### Primary Users

| Persona | Description | Pain Points Solved |
|---|---|---|
| **Engaged Couples** | Couples planning their wedding who want a digital presence | Unified wedding site, photo sharing, guest communication |
| **Wedding Guests** | Attendees who want to participate in the celebration | One place for info, easy photo upload, digital guestbook |

---

## Value Proposition

### For Couples & Moderators

- ✨ **Beautiful micro-site** with their love story, venue, and event details
- 📸 **Shared photo gallery** — all guest photos in one place, with moderation
- 📝 **Digital guestbook** — heartfelt messages from guests, preserved forever
- 🔒 **Content control** — approve or hide content before guests see it
- 📱 **Mobile-first** — guests access everything from their phones
- 🎨 **Per-wedding theming** — customize accent colors to match the wedding aesthetic

### For Guests

- 📍 **One link for everything** — venue, schedule, dress code, all in one place
- 📷 **Easy photo sharing** — upload from your phone, no app download required
- 💌 **Leave a message** — write a note the couple will treasure



### For the Platform (Business)

- 💰 **Recurring revenue** — subscription-based or per-event pricing
- 📈 **Scalable** — shared infrastructure serves many small tenants efficiently
- 🔄 **Low churn risk** — weddings are high-commitment events; once set up, they stay
- 🌍 **Global market** — weddings happen everywhere, in every culture

---

## Business Model

### Pricing Tiers (Proposed)

| Tier | Price | Features |
|---|---|---|
| **Free** | $0 | 1 wedding, 50 photos, basic micro-site, 50 guests |
| **Essential** | $29/event | Unlimited photos, 200 guests, custom theme, guestbook |
| **Premium** | $79/event | Everything + custom domain, video uploads, analytics, priority support |
| **Planner Pro** | $199/month | Up to 10 active weddings, client management, branded experience |

### Revenue Streams

1. **Per-event subscriptions** — Primary revenue from couples purchasing event packages.
2. **Planner subscriptions** — Monthly/annual plans for wedding professionals.
3. **Add-ons** — Custom domains, video uploads, premium themes, extended storage.
4. **White-label licensing** — Venues and planners can offer Aisle under their own brand.

---

## Competitive Landscape

| Competitor | Strengths | Aisle Differentiation |
|---|---|---|
| **The Knot / Zola** | Large ecosystem, registry integration | Aisle focuses on the day-of experience: live photo sharing + guestbook |
| **WithJoy** | Beautiful templates, RSVP management | Aisle adds real-time collaboration, moderation, multi-tenant architecture |
| **Google Photos shared album** | Simple, free | Aisle adds wedding context (love story, venue), moderation, guestbook |
| **WhatsApp groups** | Ubiquitous | Aisle provides structure, permanence, and a curated experience |
| **Custom websites** | Full control | Aisle is turnkey — no coding, no hosting, works in minutes |

---

## Key Metrics (KPIs)

| Metric | Description | Target (Year 1) |
|---|---|---|
| **Weddings Created** | Total events on the platform | 1,000+ |
| **Monthly Active Users** | Unique users per month | 10,000+ |
| **Photos Uploaded** | Total guest photos | 100,000+ |
| **Guest Engagement Rate** | % of invited guests who upload a photo or leave a note | > 40% |
| **Conversion Rate** | Free → Paid conversion | > 15% |
| **MRR** | Monthly Recurring Revenue | $5,000+ |
| **NPS** | Net Promoter Score | > 50 |

---

## Build Phases & Roadmap

### Phase 1: Foundation (Weeks 1–3)

- Supabase project setup (Auth, Database, Storage)
- Database schema + RLS policies
- Next.js project skeleton
- Public landing page
- Authentication flows (login, register, magic link)

### Phase 2: Admin Core (Weeks 4–5)

- Create Event wizard
- Weddings list (admin view)
- Admin console (platform management)
- Moderator invite flow

### Phase 3: Wedding Micro-Site (Weeks 6–8)

- Wedding landing page (`/w/[slug]`)
- Love story page with sections
- Venue page with map integration
- Wedding details display
- Moderator CMS for editing content

### Phase 4: Guest Features (Weeks 9–11)

- Wedding-scoped login for guests
- Photo gallery with upload
- Guestbook / notes
- Realtime feed (live updates)
- Mobile-optimized experience

### Phase 5: Moderation Tools (Weeks 12–13)

- Moderator console
- Content approval queue (photos + notes)
- Guest roster management
- Invite management (send, revoke, track)

### Phase 6: Polish & Launch (Weeks 14–16)

- Email notifications (Resend integration)
- Per-wedding theming (accent colors, font choices)
- Image optimization (thumbnails, CDN)
- Audit log for admin/moderator actions
- Analytics dashboard for admin
- Performance optimization
- Launch preparation (documentation, onboarding flow)

---

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| **Data breach** | Critical | Low | RLS everywhere, service-role key isolation, audit logging |
| **Storage costs spiral** | High | Medium | File size limits, thumbnail generation, storage quotas per tier |
| **Low guest engagement** | High | Medium | Frictionless UX (magic link, no app install), push notifications |
| **Seasonal demand** | Medium | High | Wedding planners provide year-round revenue; content persists post-event |
| **Platform dependency (Supabase)** | Medium | Low | Standard Postgres underneath; Edge Functions are portable Deno/TS |

---

## Success Criteria

1. ✅ A couple can create a wedding, customize their micro-site, and invite guests in under 10 minutes.
2. ✅ Guests can view the wedding site, upload a photo, and leave a note without downloading an app.
3. ✅ Photos and notes appear in real-time for all guests.
4. ✅ Moderators can approve or hide content with one click.
5. ✅ Complete tenant isolation — a guest of Wedding A can never see data from Wedding B.
6. ✅ The platform handles 100+ concurrent weddings without performance degradation.
