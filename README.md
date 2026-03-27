# Adharvaa Suzuki Website

A modern, animated website for Adharvaa Suzuki motorcycle showroom built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🏍️ **Product Showcase**: Display motorcycles and scooters with color variants
- 🎨 **Animated UI**: Smooth animations and transitions using Framer Motion
- 📱 **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop
- 🎯 **Color Variants**: Interactive color selection for motorcycle variants
- 🔍 **Image Zoom**: Full-screen image viewing with zoom functionality
- ⚡ **Fast Performance**: Optimized images and code splitting

## Motorcycle Variants

The website displays three main motorcycle variants:

1. **V-STROM SX** - Adventure touring motorcycle
   - Color options: Yellow, Red, Black

2. **Gixxer SF 250 / Gixxer 250** - High-performance sports bike
   - Sub-variants: SF 250, 250
   - Multiple color options

3. **Gixxer / Gixxer SF** - Sporty naked sports bike
   - Sub-variants: SF, Naked
   - Multiple color options

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adharvaa-suzuki-website.git
cd adharvaa-suzuki-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Automatic Deployment

The repository is configured with GitHub Actions to automatically deploy to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. The GitHub Action will automatically build and deploy your site.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory.

3. Push the `out` directory to the `gh-pages` branch or use GitHub Pages settings.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── products/          # Product pages
│   │   ├── motorcycles/   # Motorcycles page
│   │   └── scooters/      # Scooters page
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── MotorcycleVariant.tsx # Motorcycle variant with color selector
│   ├── Hero.tsx               # Hero section
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer section
│   ├── Contact.tsx            # Contact form component
│   └── ...
├── public/                 # Static assets
│   └── images/            # Image files
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **GitHub Actions**: CI/CD for deployment

## Customization

### Adding New Motorcycle Variants

Edit `app/products/motorcycles/page.tsx` and add new entries to the `motorcycleVariants` array:

```typescript
{
  name: 'Model Name',
  subVariants: ['Variant 1', 'Variant 2'],
  description: 'Description here',
  price: '₹X.XX Lakh*',
  colors: [
    {
      name: 'Color Name',
      color: 'Color',
      hex: '#HEXCODE',
      image: '/images/image-path.png',
    },
  ],
  defaultImage: '/images/default-image.png',
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'suzuki-blue': '#1E40AF',
  'suzuki-red': '#DC2626',
}
```

## License

This project is private and proprietary.

## Contact

For inquiries, please visit the contact page on the website.
