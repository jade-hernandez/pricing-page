# Pricing Page

A responsive, accessible pricing landing page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/pricing-page) challenge series.

## Live Site

[Pricing Page](https://pricing-page-lyart.vercel.app/)

## Challenge

This project is part of a GreatFrontEnd challenge focused on building a complete, multi-section pricing page from a billing toggle and plan cards through a FAQ accordion, features grid, testimonials layout, and a fully validated contact form. The goal is to achieve design fidelity, responsive behavior across breakpoints, and solid accessibility throughout.

## Features

- **Billing cycle toggle** — Switch between monthly and annual pricing with labels and subtext updating accordingly.
- **Pricing plan cards** — Three tiers (Basic, Standard, Premium) with a highlighted featured card variant.
- **FAQ accordion** — Collapsible items with custom open/close icons; each item collapses independently.
- **Features grid** — Six feature cards, responsive from one to three columns.
- **Testimonials** — Responsive masonry layout adapting from one to three columns across breakpoints.
- **Contact form** — Name, email, and message fields with inline validation, error handling, and success/error feedback via toast.
- **Sticky navbar** — With scroll-aware background.
- **Mobile menu** — Slide-in drawer with focus trap and keyboard navigation.
- **Care for A11y** — semantic HTML, ARIA attributes, WAI-ARIA patterns.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** — No SSR or complex routing needed; Vite is the straightforward choice.
- **Radix UI** — Accordion primitive for the FAQ section.
- **CVA** — Component variant management for buttons, links, and pricing display.
- **clsx** + **tailwind-merge** — Conditional class merging without specificity conflicts.
- **react-icons** — Icon set for the contact section and success state.
- **pnpm** — Package manager.

## Project Structure

```
src/
├── blocks/
│   ├── contact-section/          # Form, useContactForm reducer, validation, Toast, FormSuccess
│   ├── features-section/         # Feature cards, icons, data
│   ├── pricing-faq-section/      # Accordion items, data, open/close icons
│   ├── pricing-tiers-section/    # PriceCard, Pricing, FeatureList, FeatureIcon, data, types
│   └── testimonials-section/     # TestimonialCard, data
├── components/
│   ├── footer/                   # Footer with nav links and social icons
│   ├── navigation/               # Navbar, MobileMenu, Portal, icons
│   └── ui/                       # Button, Link, Accordion, Switch, Toast, Textarea, Badge
├── hooks/
│   ├── useMediaQuery.ts          # Breakpoint detection (mobile | tablet | desktop)
│   └── useFocusTrap.ts           # Keyboard focus containment for the mobile drawer
└── utils/
    ├── cn.ts                     # clsx + tailwind-merge helper
    └── validation.ts             # Email regex validator
```

## Getting Started

```bash
pnpm install   # install dependencies
pnpm dev       # start development server
pnpm lint      # run linters
pnpm format    # run code formatter
pnpm build     # build for production
```

## Code Conventions

- **Named exports** via `export { }` at the bottom of each file.
- **`type`** over `interface` for all type definitions.
- **kebab-case** for everything non-React.
- **camelCase** for hooks.
- **PascalCase** for component files.
- **`aria-labelledby`** on all `<section>` elements.
- **Semantic HTML hierarchy** — headings, lists, and landmarks used appropriately throughout.
