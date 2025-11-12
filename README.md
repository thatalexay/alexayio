# Alex Au-Yeung Portfolio & CV

A modern, print-friendly portfolio and CV website built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

This is a personal portfolio and digital CV showcasing 20+ years of technical leadership and full-stack development experience. The site is optimized for both web viewing and printing, with comprehensive SEO metadata and structured data.

## Tech Stack

- **Framework**: Next.js 16.0.1 with App Router
- **React**: 19.2.0 (Server Components by default)
- **TypeScript**: Strict type checking enabled
- **Styling**: Tailwind CSS v4 (inline configuration)
- **Font**: Inter (variable font via next/font)

## Features

- **Responsive Design**: Mobile-first, responsive layout with dark mode support
- **Print-Optimized**: Maintains 2-column layout when printing to PDF
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and JSON-LD structured data
- **Component-Based**: Modular architecture with reusable components
- **Data-Driven**: CV content managed in a separate data file for easy updates

## Project Structure

```
app/
├── components/          # React components
│   ├── Footer.tsx      # Client component with print functionality
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   └── EducationSection.tsx
├── data/
│   └── resume.ts       # CV content (experiences, education, skills, personal info)
├── page.tsx            # Homepage
├── layout.tsx          # Root layout with metadata
└── globals.css         # Global styles and print CSS
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Updating CV Content

All CV content is managed in [app/data/resume.ts](app/data/resume.ts):

- `experiences` - Work experience entries
- `education` - Education history
- `skills` - Skills organized by category
- `personalInfo` - Contact information and bio

### Building for Production

```bash
npm run build
npm start
```

### Print Functionality

Click the "Print CV" button in the footer to open the print dialog. The layout automatically adjusts for A4 printing with proper margins and a 2-column layout.

## SEO & Metadata

The site includes:
- Comprehensive metadata in [app/layout.tsx](app/layout.tsx)
- JSON-LD structured data (Schema.org Person type)
- Open Graph tags for social media
- Twitter Card metadata
- Sitemap and robots.txt configuration

## Documentation

For detailed project information, see [CLAUDE.md](CLAUDE.md).

## License

© 2025 Alex Au-Yeung. All rights reserved.
