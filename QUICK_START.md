# SuperConstruction - Quick Start Guide

## Instant Preview
Simply open `index.html` in your browser - no installation needed!

## What You Get
✅ Fully responsive multi-page website in one HTML file  
✅ Dark premium theme with amber/gold accents  
✅ All interactive features working (modals, filters, accordions)  
✅ Mobile-friendly hamburger menu  
✅ Smooth animations and transitions  

## Key Sections (Navigate with Navbar or Scroll)

### Home (#home)
- Hero section with background image
- 4 stats counters
- Company introduction

### Services (#services)
- 6 service cards with icons
- Hover effects
- "Learn More" links

### Projects (#projects)
- Filterable project gallery
- 6 sample projects
- Category filters: All, Commercial, Residential, Infrastructure

### About (#about)
- "Structural Precision" content
- 4 key differentiators
- Certification badges

### News (#news)
- 3 news/blog articles
- Category tags and dates
- "Read More" links

### Careers (#careers)
- 3 culture value cards
- 4 expandable job listings
- "Apply Now" opens modal

### Contact (#contact)
- Contact form with validation
- Office information
- Map placeholder

### Footer
- Newsletter signup
- Social links
- Multi-column navigation

## Interactive Features to Test

### Mobile Menu
- Click hamburger icon (top right on mobile)
- Menu slides down
- Click links to navigate

### Project Filters
- Click filter buttons above project grid
- Watch projects fade in/out smoothly

### Job Accordions
- Click job listings to expand/collapse
- Click "Apply Now" to open application modal

### Modals (2 types)
1. **Quote Modal** - Click "Get a Quote" buttons
2. **Application Modal** - Click "Apply Now" in job listings
- Fill out forms and submit
- Click outside or "X" to close

### Contact Form
- Fill out and submit
- Watch loading state animation
- See success message

## Customization Quick Tips

### Change Colors
Edit the `tailwind.config` in `<head>` section of index.html

### Update Content
All text is in HTML - just find and replace directly

### Add Projects
Copy a project card `<div>` and update:
- Image seed in URL
- Category tag
- Title and description
- data-category attribute

### Add Jobs
Copy a job accordion item and update:
- ID attributes
- Job title, location, type
- Description
- onclick function call

### Modify Forms
Forms are in modals at bottom of HTML - easily customizable

## Testing Checklist

- [ ] Open index.html in browser
- [ ] Test mobile menu (resize window)
- [ ] Click all navigation links
- [ ] Filter projects by category
- [ ] Open/close job accordions
- [ ] Open "Get a Quote" modal
- [ ] Open "Apply Now" modal
- [ ] Submit contact form
- [ ] Test all hover effects
- [ ] Scroll through all sections

## Browser Developer Tools Tips

Press `F12` to open DevTools:
- **Responsive mode** - Test mobile layouts
- **Console** - Check for JavaScript errors
- **Network** - Verify all resources load

## Common Issues

**Modals won't open?**
- Check that main.js is loading
- Open browser console for errors

**Styles look wrong?**
- Ensure Tailwind CDN is loading
- Check internet connection

**Images not loading?**
- Images come from picsum.photos
- Requires internet connection

## Need Help?

All JavaScript is in: `assets/js/main.js`  
All custom CSS is in: `assets/css/custom.css`  
Main HTML is in: `index.html`

Each section is clearly commented for easy navigation.

## Deploy to Production

### Option 1: Static Host (Netlify, Vercel)
1. Drag the `superconstruction` folder
2. Auto-deploys in seconds

### Option 2: Traditional Host
1. Upload all files via FTP
2. Set index.html as default document

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch

**No build process needed - it's ready to deploy!**
