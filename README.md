# Adharvaa Suzuki Website

A modern, responsive website for Adharvaa Suzuki dealership built with Next.js, React, and Tailwind CSS.

## Features

- 🚗 **Vehicle Showcase** - Display all Suzuki models with beautiful cards
- 🎨 **Modern Design** - Clean, professional UI with Suzuki brand colors
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎯 **Service Sections** - Comprehensive service offerings
- 📧 **Contact Form** - Easy way for customers to reach out

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── VehicleModels.tsx # Vehicle showcase
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

- Update vehicle models in `components/VehicleModels.tsx`
- Modify contact information in `components/Contact.tsx` and `components/Footer.tsx`
- Adjust colors in `tailwind.config.js`
- Update content in respective component files

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

