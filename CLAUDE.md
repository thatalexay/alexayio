# alex.a-y.io Portfolio

Personal portfolio and CV website for Alex Au Yeung.

## Project Overview

This is a modern Next.js 16 application built with React 19, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture and is designed to showcase professional work, projects, and experience.

## Tech Stack

### Core Framework
- **Next.js**: 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: ^5

### Styling
- **Tailwind CSS**: ^4 (with PostCSS)
- **Font**: Geist Sans & Geist Mono (Google Fonts)
- **Dark Mode**: System preference-based (`prefers-color-scheme`)

### Development Tools
- **ESLint**: ^9 with Next.js config
- **Package Manager**: pnpm

## Project Structure

```
alexayio/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Home page component
├── public/                  # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Key Features

### Current Setup
- **App Router**: Using Next.js 16's App Router for modern routing
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Automatic dark/light mode based on system preferences
- **Custom Fonts**: Geist Sans and Geist Mono via next/font/google
- **Path Aliases**: `@/*` configured for clean imports

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Next.js plugin configured for type checking

### Styling System
- Tailwind CSS v4 with inline theme configuration
- CSS variables for theming:
  - `--background`: White (#ffffff) / Dark (#0a0a0a)
  - `--foreground`: Dark gray (#171717) / Light gray (#ededed)
  - Custom fonts: `--font-geist-sans`, `--font-geist-mono`

## Development

### Commands
```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Development Server
- Default port: http://localhost:3000
- Hot reload enabled
- Fast Refresh for React components

## Git History Context

Based on recent commits, the project has evolved from a previous version with:
- Recent projects showcase
- Font Awesome integration
- Custom footer component
- Various styling improvements

The current version is a fresh Next.js 16 setup ready for building the portfolio from scratch.

## Design System

### Colors
- **Light Mode**:
  - Background: `#ffffff`
  - Foreground: `#171717`
  - Accent: `#0a0a0a`

- **Dark Mode**:
  - Background: `#0a0a0a`
  - Foreground: `#ededed`
  - Accent: `#ccc`

### Typography
- **Sans Serif**: Geist Sans (primary)
- **Monospace**: Geist Mono (code/technical content)
- Antialiased text rendering

### Layout
- Max width: 3xl (48rem)
- Responsive padding and spacing
- Mobile-first breakpoints (sm, md, lg)

## Deployment

This project is configured for deployment on Vercel:
- Zero-config deployment
- Automatic HTTPS
- Edge Network optimization
- Preview deployments for branches

## Future Development Considerations

### Recommended Additions
- [ ] Components directory for reusable UI elements
- [ ] Portfolio/projects showcase section
- [ ] About/CV section
- [ ] Contact form or links
- [ ] Blog/writing section (optional)
- [ ] Animation library (Framer Motion recommended)
- [ ] SEO optimization (update metadata in layout.tsx)
- [ ] Analytics integration
- [ ] Image optimization with next/image
- [ ] Content management (MDX or CMS)

### Performance Optimizations
- Static page generation where possible
- Image optimization for portfolio pieces
- Font subset optimization
- Code splitting via dynamic imports

## Notes for AI Assistants

When working on this project:

1. **Styling**: Use Tailwind utility classes. Custom CSS should be minimal and placed in globals.css
2. **Components**: Create reusable components in a `components/` directory
3. **Images**: Store assets in `public/` and use `next/image` for optimization
4. **Routing**: Use App Router conventions (folders with page.tsx files)
5. **TypeScript**: Maintain strict type safety, define interfaces for props
6. **Responsiveness**: Mobile-first approach, test on multiple breakpoints
7. **Dark Mode**: Use Tailwind's `dark:` prefix for dark mode variants
8. **Metadata**: Update SEO metadata in [layout.tsx](app/layout.tsx) for each route

### Common Patterns
- Server Components by default (use 'use client' only when needed)
- Async data fetching in Server Components
- Client Components for interactivity (forms, animations)
- CSS variables for theme customization

### Import Aliases
Use `@/` prefix for cleaner imports:
```typescript
import Component from '@/components/Component'
import { helper } from '@/lib/helpers'
```

## Contact

Owner: Alex Au Yeung
Repository: alex.a-y.io/alexayio
