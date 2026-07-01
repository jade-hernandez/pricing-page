# Pricing Page

A responsive, accessible pricing landing page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/pricing-page) challenge series.

## Live Site

[Pricing Page](https://pricing-page-lyart.vercel.app/)

## Challenge

This project is part of a GreatFrontEnd challenge focused on building a complete, multi-section pricing page — from a billing toggle and plan cards through a FAQ accordion, features grid, testimonials layout, and a fully validated contact form. The goal is to achieve design fidelity, responsive behavior across breakpoints, and solid accessibility throughout.

## Features

- **Billing cycle toggle** — Monthly / Annual switch via a `SegmentedControl` component; prices, subtext, and billing labels update reactively via a single `isAnnual` boolean state in `PricingTiers`.
- **Pricing plan cards** — Three tiers (Basic, Standard, Premium) with a featured card variant styled with an elevated border and drop shadow. Pricing is formatted with `Intl.NumberFormat` and driven by a `Pricing` component that accepts a `variant` prop via CVA.
- **FAQ accordion** — Built on Radix UI's `Accordion.Root` with custom open/close icons and a separator pattern. Each item runs its own `Accordion.Root` instance so items collapse independently.
- **Features grid** — Six feature cards with inline SVG icons, responsive wrapping from a single column to two then three columns via Tailwind flex utilities.
- **Contact form** — Full submission lifecycle managed with `useReducer` and a discriminated union `FormAction` type. Validates name, email, and a length-capped message; routes field errors inline, network/server errors via a `Toast` component rendered in a fixed overlay.
- **Sticky navbar** — Scroll-aware header that transitions to a frosted-glass background (`bg-white/80 backdrop-blur-md`) past 10 px of scroll, using a passive scroll listener for performance.
- **Mobile menu** — Slide-in drawer rendered via a `Portal` into `#portal-root`, with a `useFocusTrap` hook for keyboard accessibility, Escape key dismissal, and body scroll lock while open.
- **Responsive breakpoints** — Layout decisions driven by a `useMediaQuery` hook that maps `window.innerWidth` to `mobile | tablet | desktop` and listens to three `MediaQueryList` instances.
- **Accessibility** — `aria-labelledby` on every `<section>`, `aria-invalid` + `aria-describedby` on form inputs, `role="alert"` / `role="status"` on feedback regions, `aria-current="page"` on active nav links, and semantic HTML throughout.

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
