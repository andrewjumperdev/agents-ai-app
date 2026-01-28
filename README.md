# Agents AI App

An ultra-polished, multilingual marketing site for an AI assistant platform that automates WhatsApp-based ordering, lead engagement, and customer support. Built with Next.js and modern UI tooling to deliver a fast, responsive, and conversion-focused experience.

## Overview

Agents AI App is a single-page, production-ready landing experience designed to showcase AI agents for order capture, document summarization, and lead outreach. The site supports multiple languages (ES/EN/FR), smooth reveal animations, and a prominent call-to-action flow to drive demos and WhatsApp engagement.

## Key Features

- **Multilingual content** (Spanish, English, French) with client-side language persistence.
- **Conversion-first hero + CTA flow** to drive demo requests and WhatsApp trials.
- **Animated sections** with reveal transitions and motion-based UI components.
- **Modular components** for chat, animations, and reusable UI.
- **Responsive layout** optimized for mobile, tablet, and desktop.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI & Styling:** Tailwind CSS, Lucide Icons
- **Animations:** Framer Motion
- **Theming:** next-themes (available for future dark-mode support)
- **Language/Runtime:** TypeScript + React

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or your preferred Node package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    api/           # API routes (if applicable)
    components/    # Reusable UI components
    utils/         # Helper utilities
    layout.tsx     # Root layout
    page.tsx       # Main landing page
```

## Localization

Language selection is handled on the client and stored in `localStorage` for a consistent user experience. Supported locales:

- Spanish (es)
- English (en)
- French (fr)

## Deployment

The application is optimized for deployment on Vercel or any platform that supports Next.js. Typical steps:

1. Install dependencies
2. Build the app
3. Deploy the output

## Contributing

This repository is currently maintained for internal product delivery. If you want to propose improvements, open an issue with context and screenshots where applicable.
