# SuperConstruction - Premium Construction & Engineering Website

A modern, dark-themed corporate website for a high-end construction and engineering firm built with pure HTML5, Tailwind CSS, and vanilla JavaScript.

## Features

### Pages & Sections
1. **Homepage** - Full-screen hero with stats bar and company intro
2. **Navigation Hub** - Sticky navbar with mobile hamburger menu
3. **Services** - 6 service cards with hover effects
4. **Project Portfolio** - Filterable project gallery (Commercial, Residential, Infrastructure)
5. **Structural Precision** - About/Why Us section with differentiators
6. **News & Insights** - Blog-style news cards
7. **Careers** - Job listings with expandable accordion and application modal
8. **Contact Us** - Contact form with office information
9. **Footer** - Multi-column footer with newsletter signup

### Interactive Features
- Mobile-responsive hamburger menu
- Project filtering by category
- Job listing accordion
- Quote request modal
- Job application modal
- Contact form with loading states
- Smooth scroll animations
- Intersection Observer for fade-in effects
- Custom scrollbar styling

## Tech Stack
- **HTML5** - Semantic markup
- **Tailwind CSS 3.x** - Utility-first CSS via CDN with custom configuration
- **Google Fonts** - Montserrat (400, 500, 700, 800)
- **Material Symbols** - Icon font
- **Vanilla JavaScript** - No frameworks, pure ES6+

## Custom Tailwind Color Palette
```javascript
colors: {
  "on-primary": "#ffffff",
  "inverse-on-surface": "#f0f1f2",
  "tertiary-fixed": "#dce2f3",
  "outline": "#75777a",
  "tertiary": "#000208",
  "on-primary-fixed-variant": "#44474a",
  "tertiary-fixed-dim": "#c0c7d6",
  "secondary-container": "#fdbe50", // Amber/Gold accent
  "outline-variant": "#c5c6ca",
  "on-secondary-fixed": "#281900",
  "on-tertiary-fixed-variant": "#404754",
  "on-error": "#ffffff",
  "primary": "#010204", // Near-black background
  "on-secondary": "#ffffff",
  "on-primary-fixed": "#191c1f",
  "secondary-fixed": "#ffdead"
}
```

## File Structure
```
superconstruction/
├── index.html              # Main website (all sections)
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom styles and animations
│   └── js/
│       └── main.js         # Interactive functionality
└── README.md               # This file
```

## Setup & Installation

1. Clone or download the project
2. Open `index.html` in a modern web browser
3. No build process required - all dependencies loaded via CDN

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Features Breakdown

### Navigation
- Fixed top navbar with backdrop blur
- Desktop horizontal navigation
- Mobile hamburger menu with slide-down animation
- "Get a Quote" CTA button

### Homepage Hero
- Full-screen background with overlay
- Bold headline and subheadline
- Dual CTAs ("View Projects" and "Get a Quote")
- Stats bar with 4 key metrics
- Fade-in animation on load

### Services Section
- 6 service cards in responsive grid
- Material Symbol icons
- Hover effects with border color change
- "Learn More" links with arrow animation

### Project Portfolio
- Category filter buttons (All, Commercial, Residential, Infrastructure)
- Smooth fade animations on filter
- Project cards with images, category tags, and descriptions
- Image hover scale effect

### Structural Precision (About)
- Split layout: image + content
- 4 differentiator items with checkmark icons
- Certification badges with Material Symbols
- Gradient overlay on image

### News & Insights
- 3-column blog card grid
- Category tags, dates, headlines, excerpts
- Card hover scale effect
- "Read More" links

### Careers
- 3 culture value cards
- 4 expandable job accordion items
- Job details: title, location, type, department
- "Apply Now" button opens modal form

### Contact Section
- Contact form with validation
- Project type dropdown
- Loading state on submit
- Office information sidebar
- Google Maps placeholder
- Form uses Tailwind Forms plugin styling

### Modals
- Quote Request Modal - For project quotes
- Application Modal - For job applications
- Click outside to close
- Smooth backdrop blur
- Form validation

### Footer
- 5-column responsive layout
- Newsletter signup
- Social media icons
- Link columns: Services, Company, Resources
- Copyright bar with legal links

## Accessibility Features
- Semantic HTML5 elements
- ARIA labels on interactive buttons
- Alt text on images
- Keyboard navigation support
- Focus states on all interactive elements
- Proper heading hierarchy

## Performance
- Lightweight vanilla JavaScript (no heavy frameworks)
- CDN-hosted dependencies for fast loading
- Optimized image loading with picsum.photos
- CSS transitions instead of JavaScript animations where possible

## Customization

### Colors
Edit the `tailwind.config` object in the `<script>` tag of `index.html`

### Content
All text content is directly in `index.html` - no content management system required

### Sections
Each section is clearly marked with HTML comments for easy editing

### JavaScript
All interactive features are in `assets/js/main.js` with clear function names

## Future Enhancements
- Backend API integration for forms
- CMS integration for news and projects
- Advanced filtering and search
- Blog functionality
- Client portal
- Multi-language support

## Credits
- Design: SuperConstruction Brand Guidelines
- Icons: Google Material Symbols
- Fonts: Google Fonts (Montserrat)
- Images: Picsum Photos (placeholder)

## License
© 2026 SuperConstruction. All rights reserved.
