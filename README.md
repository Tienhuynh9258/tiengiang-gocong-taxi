# Taxi Go Cong - Tien Giang

<p align="center">
  <img src="public/images/logo.png" alt="Taxi Go Cong Logo" width="120" />
</p>

<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Vite-5.4.1-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4.11-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://ui.shadcn.com/" target="_blank">
    <img src="https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square" alt="shadcn/ui" />
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/Tienhuynh9258/gocong-taxi-web/issues">
    <img src="https://img.shields.io/github/issues/Tienhuynh9258/gocong-taxi-web?style=flat-square&color=F97316" alt="Issues" />
  </a>
  <a href="https://github.com/Tienhuynh9258/gocong-taxi-web/pulls">
    <img src="https://img.shields.io/github/issues-pr/Tienhuynh9258/gocong-taxi-web?style=flat-square&color=10B981" alt="Pull Requests" />
  </a>
  <a href="#license">
    <img src="https://img.shields.io/badge/License-MIT-EAB308?style=flat-square" alt="License" />
  </a>
</p>

<p align="center">
  A modern, responsive landing website for <strong>Taxi Go Cong - Tien Giang</strong>, a trusted taxi service in Vietnam.
  <br />
  Built with React, TypeScript, and Tailwind CSS for fast performance and a seamless user experience.
</p>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)
- [Contributing](#contributing)
- [License](#license)

---

## Features

| Feature | Description |
|---------|-------------|
| **Modern UI/UX** | Clean, professional design powered by shadcn/ui and Tailwind CSS. Fully responsive across all devices. |
| **Online Booking** | Smart booking form allowing customers to easily submit ride requests with trip details, date, time, and passenger info. |
| **Service Showcase** | Clearly presents core services: inner-city taxi, long-distance taxi, travel taxi, and contract taxi. |
| **Floating Contact** | Quick-access floating buttons for phone calls and Zalo messaging, visible on every page. |
| **SEO Optimized** | Meta tags, Open Graph, and Twitter Card integration for better search engine visibility and social sharing. |
| **Google Ads Tracking** | Integrated Google Tag Manager for conversion tracking and ad performance measurement. |
| **Email Notifications** | Booking confirmations sent via email using the Resend API. |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) |
| **Routing** | [React Router](https://reactrouter.com/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) |
| **Validation** | [Zod](https://zod.dev/) |
| **Serverless API** | [Vercel Node](https://vercel.com/docs/functions/runtimes/node-js) |
| **Email Service** | [Resend](https://resend.com/) |
| **State Management** | [TanStack Query](https://tanstack.com/query/latest) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```
gocong-taxi-web/
├── api/                          # Vercel serverless API routes
│   └── book.js                   # Booking/Reservation API endpoint
├── public/                       # Static assets
│   ├── images/                   # Service images, fleet photos, logos
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components (Button, Card, Form, etc.)
│   │   ├── AboutSection.tsx      # About the company
│   │   ├── BookingFormSection.tsx# Online booking form
│   │   ├── CarCard.tsx           # Fleet vehicle card
│   │   ├── ContactSection.tsx    # Contact information
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Hero.tsx              # Hero banner section
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── ServiceBenefits.tsx   # Why choose us
│   │   └── WhyChooseUs.tsx       # Service benefits
│   ├── pages/                    # Route-level pages
│   │   ├── Index.tsx             # Homepage
│   │   └── NotFound.tsx          # 404 page
│   ├── App.tsx                   # Root application component
│   ├── main.tsx                  # Application entry point
│   └── App.css                   # Global styles
├── components.json               # shadcn/ui configuration
├── index.html                    # HTML entry point (with SEO meta tags)
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or higher
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for local serverless API testing)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tienhuynh9258/gocong-taxi-web.git
   cd gocong-taxi-web
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using Bun:
   ```bash
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

   To test serverless API routes locally, run:

   ```bash
   vercel dev
   ```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key for [Resend](https://resend.com/) email service. Used in the booking API to send confirmation emails. |

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## Deployment

This project is deployed on [Vercel](https://vercel.com/).

### Deploy to Vercel

1. Install the Vercel CLI if you haven't already:

   ```bash
   npm install -g vercel
   ```

2. Run the deploy command:

   ```bash
   vercel --prod
   ```

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history (force pushes, rebasing, amending, or squashing commits that are already pushed) as it rewrites history on Lovable's side and may result in lost project history.

---

## SEO & Analytics

- **Meta Tags**: Optimized `<title>`, `<description>`, and Open Graph tags for Vietnamese and social media sharing.
- **Google Ads**: Conversion tracking via `gtag.js` with tracking ID `AW-17174568555`.
- **Robots.txt**: Configured to allow search engine indexing.
- **Favicon**: Custom brand favicon.
- **Twitter Card**: `summary_large_image` for rich Twitter sharing.

---

## Contributing

Contributions are welcome! If you have ideas for improvements, please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License.

---

<p align="center">
  <strong>Taxi Go Cong - Tien Giang</strong>
  <br />
  <sub>Reliable, Quality Taxi Service in Go Cong</sub>
</p>
