# GoodFella Landing Page

A professional, high-converting landing page for GoodFella - Your AI Life Partner built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme and brand colors
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion animations with scroll-triggered reveals
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **High Performance**: Optimized for Core Web Vitals
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.4 (Pages Directory)
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.279.0
- **Language**: TypeScript 5.2.2

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd goodfella-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── components/           # Reusable React components
│   ├── Hero.tsx         # Hero section with CTA
│   ├── ProblemSection.tsx # Problem identification
│   ├── Features.tsx     # Feature showcase with tabs
│   ├── Testimonials.tsx # User testimonials and stats
│   ├── Personas.tsx     # AI personality selection
│   ├── ComparisonTable.tsx # Competitive comparison
│   ├── FinalCTA.tsx     # Final call-to-action with form
│   └── Footer.tsx       # Site footer
├── pages/               # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Main landing page
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports and custom styles
├── public/             # Static assets
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Background**: #0F172A (brand-dark)
- **Primary**: #4F46E5 (brand-indigo)
- **Accent**: #FCD34D (brand-amber)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Components
- **Buttons**: Rounded with hover effects
- **Cards**: Glass morphism with hover animations
- **Forms**: Clean inputs with focus states

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The app is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

For Vercel:
```bash
npm run build
```

## 📄 License

This project is proprietary and confidential. 