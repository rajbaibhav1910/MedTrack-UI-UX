# MedTrack — UI/UX

A medication tracking interface: dose reminders, refill countdowns, and a
weekly adherence view styled after a real blister pack.

## Design direction

The interface borrows its visual language from the physical objects of
medicine-taking — pharmacy label typography, capsule colors, and the
foil-backed blister pack — rather than generic dashboard styling.

- **Color** — deep forest teal (trust, clinical calm) with a capsule-amber
  accent and a dusty-coral for missed doses.
- **Type** — Fraunces (display) for headings, IBM Plex Sans for body copy,
  IBM Plex Mono for dosage figures and timestamps.
- **Signature element** — the *Blister Pack* weekly tracker on the
  dashboard: each medication gets a row of foil pockets, one per day, that
  visually "pop" when a dose is logged.

## Pages

| Route | Purpose |
|---|---|
| `/` | Dashboard — today's schedule, streak, blister pack, upcoming refills |
| `/medications` | Full list of active medications |
| `/medications/add` | Form to add a new medication |
| `/history` | Chronological dose log |
| `/settings` | Profile and notification preferences |

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Stack

- React 18 + React Router
- Vite
- Plain CSS with a token system (`src/styles/tokens.css`) — no UI framework

## Project structure

```
src/
├── components/     # Sidebar, Header, MedicationCard, BlisterPackTracker
├── pages/          # Dashboard, Medications, AddMedication, History, Settings
├── data/           # Mock data (swap for a real API later)
├── styles/         # Design tokens + global styles
├── App.jsx
└── main.jsx
```

All data is currently mocked in `src/data/mockData.js` — wire up a real
backend by replacing those imports with API calls.
