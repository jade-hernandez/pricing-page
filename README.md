# Pricing Page

A responsive, accessible pricing landing page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/pricing-page) challenge series.

## Live Site

[Pricing Page](https://pricing-page-lyart.vercel.app/)

## Challenge

This project is part of a GreatFrontEnd challenge focused on building a complete, multi-section pricing page from a billing toggle and plan cards through a FAQ accordion, features grid, testimonials layout, and a fully validated contact form. The goal is to achieve design fidelity, responsive behavior across breakpoints, and solid accessibility throughout.

## Features

- **Billing cycle toggle** — `SegmentedControl` switches between "Monthly" and "Annually," recalculating price, cycle label, and annual total per plan.
- **Pricing plan cards** — Three tiers (Basic, Standard, Premium) rendered from a single `pricingPlans` array; the Standard plan sets `isFeatured` to show the "Most Popular" badge and highlighted border/shadow styling.
- **Independent FAQ accordions** — Each `FaqItem` wraps its own Radix `Accordion.Root`, so expanding one item doesn't affect the others.
- **Features grid** — Six feature cards driven by `cardsData`, wrapping from one to three columns depending on width.
- **Testimonials layout** — Splits the nine testimonials into balanced 2-column (md) and 3-column (lg), collapsing to a single stacked column on mobile.
- **Contact form** — `useContactForm` reducer validates name, email format, and message length (≤500 characters), submits to the GreatFrontEnd API endpoint, and swaps in a success state or error toast depending on the response.
- **Sticky navbar** — background switches to blurred white as the page scrolls.
- **Mobile menu** — slide-in drawer rendered via `Portal`; closes on Escape or overlay click, with focus trapped inside via `useFocusTrap`.
- **Care for A11y** — semantic HTML, ARIA attributes, WAI-ARIA patterns.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** — No SSR or complex routing needed; Vite is the straightforward choice.
- **Radix UI** — Accordion primitive for the FAQ section.
- **CVA** — Component variant management for buttons, links, and pricing display.
- **clsx** + **tailwind-merge** — Conditional class merging without specificity conflicts.
- **react-icons** — Icon set for the contact section and success state.

## Project Structure

```
src/
├── blocks/
│   ├── contact-section/          # Form, useContactForm reducer, Toast, FormSuccess
│   ├── features-section/         # FeaturesSection, FeatureCard, icons, data
│   ├── pricing-faq-section/      # FaqSection, FaqItem, data, open/close icons
│   ├── pricing-tiers-section/    # PricingTiers, PriceCard, Pricing, FeatureList, FeatureIcon, data, types
│   └── testimonials-section/     # TestimonialsSection, TestimonialCard, data, profile images
├── components/
│   ├── footer/                   # Footer, footer link/icon data, social icons
│   ├── navigation/                # Navbar, MobileMenu, nav link data, icons
│   └── ui/                        # Button, Link, Accordion, Switch (SegmentedControl), Toast, Textarea, Badge, Portal
├── hooks/
│   ├── useMediaQuery.ts          # Breakpoint detection (mobile | tablet | desktop)
│   └── useFocusTrap.ts           # Keyboard focus containment for the mobile drawer
└── utils/
    ├── utils.ts                  # cn() — clsx + tailwind-merge helper
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
