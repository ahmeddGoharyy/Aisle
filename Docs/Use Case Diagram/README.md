# Aisle — Use Case Diagrams

## Overview

Aisle has three actor roles that interact with the system:

| Role | Scope | Description |
|---|---|---|
| **Admin** | Global (platform) | Creates/manages all weddings, manages moderators, full platform oversight |
| **Moderator** | Single wedding (tenant) | Moderates content, manages guest list, edits wedding details |
| **Attendee (Guest)** | Single wedding (tenant) | Views wedding site, uploads photos, leaves notes/guestbook messages |

---

## System Use Case Diagram

```mermaid
graph LR
    subgraph Actors
        A["🛡️ Admin"]
        M["📋 Moderator"]
        G["👤 Attendee / Guest"]
        P["🌐 Public Visitor"]
    end

    subgraph Platform["Platform Use Cases"]
        UC1["View Landing Page"]
        UC2["Login / Register"]
        UC3["Create Wedding Event"]
        UC4["Manage All Weddings"]
        UC5["Suspend / Delete Wedding"]
        UC6["View Platform Analytics"]
        UC7["Manage Platform Users"]
    end

    subgraph Wedding["Wedding Tenant Use Cases"]
        UC8["View Wedding Micro-Site"]
        UC9["Edit Love Story"]
        UC10["Edit Venue & Details"]
        UC11["Invite Guests"]
        UC12["Manage Guest List"]
        UC13["Upload Photos"]
        UC14["View Photo Gallery"]
        UC15["Post Guestbook Note"]
        UC16["View Guestbook"]
        UC17["Moderate Photos"]
        UC18["Moderate Notes"]
        UC19["Approve / Reject Content"]
    end

    P --> UC1
    P --> UC2

    A --> UC1
    A --> UC2
    A --> UC3
    A --> UC4
    A --> UC5
    A --> UC6
    A --> UC7
    A --> UC8
    A --> UC13
    A --> UC14
    A --> UC15
    A --> UC16
    A --> UC17
    A --> UC18

    M --> UC1
    M --> UC2
    M --> UC8
    M --> UC9
    M --> UC10
    M --> UC11
    M --> UC12
    M --> UC13
    M --> UC14
    M --> UC15
    M --> UC16
    M --> UC17
    M --> UC18
    M --> UC19

    G --> UC1
    G --> UC2
    G --> UC8
    G --> UC13
    G --> UC14
    G --> UC15
    G --> UC16
```

---

## Use Cases by Actor

### 🛡️ Admin Use Cases

```mermaid
graph TD
    Admin["🛡️ Admin"]

    Admin --> A1["UC-A1: Create Wedding Event"]
    Admin --> A2["UC-A2: View All Weddings"]
    Admin --> A3["UC-A3: Suspend Wedding"]
    Admin --> A4["UC-A4: Delete Wedding"]
    Admin --> A5["UC-A5: Assign Moderator"]
    Admin --> A6["UC-A6: View Platform Dashboard"]
    Admin --> A7["UC-A7: Manage Users"]
    Admin --> A8["UC-A8: Override Content Moderation"]
    Admin --> A9["UC-A9: View Audit Logs"]

    A1 --> A1a["Fill couple names, date"]
    A1 --> A1b["Set venue details"]
    A1 --> A1c["Write love story sections"]
    A1 --> A1d["Send moderator invite"]
```

| UC ID | Use Case | Description | Precondition | Postcondition |
|---|---|---|---|---|
| UC-A1 | Create Wedding Event | Admin fills a wizard with couple names, date, venue, love story sections | Admin is authenticated | Wedding created, moderator invite sent |
| UC-A2 | View All Weddings | Admin sees a list of all weddings across the platform | Admin is authenticated | List of weddings rendered |
| UC-A3 | Suspend Wedding | Admin changes a wedding status to 'suspended' | Wedding exists and is active | Wedding becomes inaccessible to guests |
| UC-A4 | Delete Wedding | Admin permanently removes a wedding and its data | Wedding exists | All wedding data purged |
| UC-A5 | Assign Moderator | Admin sends a moderator invite to a user for a specific wedding | Wedding exists | Invite token generated and emailed |
| UC-A6 | View Platform Dashboard | Admin views platform-wide analytics and metrics | Admin is authenticated | Dashboard rendered |
| UC-A7 | Manage Users | Admin views/edits platform users, can revoke access | Admin is authenticated | User records updated |
| UC-A8 | Override Content Moderation | Admin can approve/reject/delete any content on the platform | Content exists | Content status updated |
| UC-A9 | View Audit Logs | Admin reviews the activity_log for accountability | Admin is authenticated | Audit entries displayed |

---

### 📋 Moderator Use Cases

```mermaid
graph TD
    Mod["📋 Moderator"]

    Mod --> M1["UC-M1: Edit Love Story"]
    Mod --> M2["UC-M2: Edit Venue"]
    Mod --> M3["UC-M3: Edit Wedding Details"]
    Mod --> M4["UC-M4: Invite Guests"]
    Mod --> M5["UC-M5: Remove Guest"]
    Mod --> M6["UC-M6: View Guest List"]
    Mod --> M7["UC-M7: Review Photo Queue"]
    Mod --> M8["UC-M8: Review Notes Queue"]
    Mod --> M9["UC-M9: Approve / Hide / Delete Content"]
    Mod --> M10["UC-M10: Upload Photos"]
    Mod --> M11["UC-M11: Post Guestbook Note"]

    M7 --> M9
    M8 --> M9
```

| UC ID | Use Case | Description | Precondition | Postcondition |
|---|---|---|---|---|
| UC-M1 | Edit Love Story | Moderator adds/edits/reorders love story sections | Moderator is a member of the wedding | Love story updated |
| UC-M2 | Edit Venue | Moderator updates venue name, address, map coordinates | Moderator is a member of the wedding | Venue info updated |
| UC-M3 | Edit Wedding Details | Moderator manages key-value detail entries (dress code, schedule, etc.) | Moderator is a member of the wedding | Details updated |
| UC-M4 | Invite Guests | Moderator sends invite emails with unique tokens | Moderator is a member of the wedding | Invite tokens created, emails sent |
| UC-M5 | Remove Guest | Moderator removes a guest's membership | Guest is a member | Membership row deleted |
| UC-M6 | View Guest List | Moderator sees all guests and their RSVP/join status | Moderator is a member of the wedding | Guest list rendered |
| UC-M7 | Review Photo Queue | Moderator views pending photos awaiting approval | Photos exist with status='pending' | Queue rendered |
| UC-M8 | Review Notes Queue | Moderator views pending guestbook notes | Notes exist with status='pending' | Queue rendered |
| UC-M9 | Approve / Hide / Delete Content | Moderator changes status of photos or notes | Content exists in own wedding | Content status updated, reflected in real-time |
| UC-M10 | Upload Photos | Moderator uploads photos to the wedding gallery | Moderator is a member | Photo stored, row created |
| UC-M11 | Post Guestbook Note | Moderator posts a note to the guestbook | Moderator is a member | Note created |

---

### 👤 Attendee (Guest) Use Cases

```mermaid
graph TD
    Guest["👤 Attendee"]

    Guest --> G1["UC-G1: Accept Invite & Join"]
    Guest --> G2["UC-G2: View Wedding Micro-Site"]
    Guest --> G3["UC-G3: View Love Story"]
    Guest --> G4["UC-G4: View Venue & Details"]
    Guest --> G5["UC-G5: Browse Photo Gallery"]
    Guest --> G6["UC-G6: Upload Photo"]
    Guest --> G7["UC-G7: Post Guestbook Note"]
    Guest --> G8["UC-G8: Delete Own Photo"]
    Guest --> G9["UC-G9: Delete Own Note"]
    Guest --> G10["UC-G10: View Guestbook"]

    G2 --> G3
    G2 --> G4
    G2 --> G5
    G2 --> G10
```

| UC ID | Use Case | Description | Precondition | Postcondition |
|---|---|---|---|---|
| UC-G1 | Accept Invite & Join | Guest clicks invite link, creates account or logs in, joins wedding | Valid invite token | Membership created, token consumed |
| UC-G2 | View Wedding Micro-Site | Guest sees the wedding's landing page with couple info | Guest is a member | Micro-site rendered |
| UC-G3 | View Love Story | Guest reads the love story sections | Guest is a member | Love story rendered |
| UC-G4 | View Venue & Details | Guest sees venue info and wedding details | Guest is a member | Venue/details rendered |
| UC-G5 | Browse Photo Gallery | Guest views approved photos in a gallery grid | Guest is a member | Gallery rendered (real-time updates) |
| UC-G6 | Upload Photo | Guest uploads a photo with optional caption | Guest is a member | Photo stored, appears after moderation |
| UC-G7 | Post Guestbook Note | Guest submits a message to the guestbook | Guest is a member | Note created (pending or approved) |
| UC-G8 | Delete Own Photo | Guest deletes a photo they uploaded | Photo exists, uploaded_by = current user | Photo removed |
| UC-G9 | Delete Own Note | Guest deletes a note they authored | Note exists, author_id = current user | Note removed |
| UC-G10 | View Guestbook | Guest reads approved guestbook messages | Guest is a member | Guestbook rendered |

---

## Core Sequence Diagrams

### Flow 1: Create Event (Admin)

```mermaid
sequenceDiagram
    actor Admin
    participant UI as Create Event Wizard
    participant EF as Edge Function: create-wedding
    participant DB as Postgres
    participant Email as Email Provider

    Admin->>UI: Fill couple names, date, venue, love story
    UI->>EF: POST /create-wedding (payload)
    EF->>DB: INSERT INTO weddings
    EF->>DB: INSERT INTO wedding_memberships (role=moderator)
    EF->>DB: INSERT love_story_sections, venue, details
    EF->>Email: Send moderator invite link
    EF-->>UI: { wedding_id, slug }
    UI-->>Admin: Redirect to wedding dashboard
```

### Flow 2: Guest Joins & Uploads Photo

```mermaid
sequenceDiagram
    actor Guest
    participant Landing as Public Landing Page
    participant Auth as Supabase Auth
    participant WSite as Wedding Micro-Site
    participant EF as Edge Function: process-photo-upload
    participant Storage as Supabase Storage
    participant DB as Postgres

    Guest->>Landing: Click Login
    Landing->>Auth: Magic link / OTP
    Auth-->>Guest: Session established
    Guest->>WSite: Select their wedding from list
    WSite->>DB: RLS-scoped fetch (love story, venue, details)
    DB-->>WSite: Wedding content
    Guest->>WSite: Upload photo
    WSite->>EF: Multipart upload
    EF->>Storage: Store at photos/{wedding_id}/{uuid}
    EF->>DB: INSERT photos row (status=pending)
    DB-->>WSite: Realtime broadcast: new photo
    WSite-->>Guest: Photo appears in gallery
```

### Flow 3: Moderator Reviews Content

```mermaid
sequenceDiagram
    actor Moderator
    participant Panel as Moderator Console
    participant EF as Edge Function: moderate-content
    participant DB as Postgres

    Moderator->>Panel: Open Photos/Notes queue
    Panel->>DB: SELECT (RLS: role=moderator, own wedding)
    DB-->>Panel: Pending items
    Moderator->>Panel: Approve / Hide / Delete
    Panel->>EF: PATCH content status
    EF->>DB: UPDATE photos/notes status
    DB-->>Panel: Realtime update reflected to all guests
```

---

## Permissions Matrix

| Action | Admin | Moderator (own wedding) | Attendee (own wedding) | Public |
|---|:---:|:---:|:---:|:---:|
| View landing page | ✅ | ✅ | ✅ | ✅ |
| Create a wedding | ✅ | ❌ | ❌ | ❌ |
| View list of all weddings | ✅ | ❌ (only own) | ❌ (only own) | ❌ |
| Edit love story / venue / details | ✅ | ✅ (own) | ❌ | ❌ |
| Invite / remove guests | ✅ | ✅ (own) | ❌ | ❌ |
| Upload photos | ✅ | ✅ | ✅ (own wedding) | ❌ |
| Delete/hide any photo or note | ✅ | ✅ (own wedding) | Own content only | ❌ |
| Post a guestbook message | ✅ | ✅ | ✅ | ❌ |
| View guest list & roster | ✅ | ✅ (own) | ❌ | ❌ |
| Suspend/delete a wedding | ✅ | ❌ | ❌ | ❌ |
