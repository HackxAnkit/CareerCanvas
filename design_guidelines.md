# Portfolio Website Design Guidelines

## Design Approach
**Apple HIG-Inspired Minimalism**: Content-focused, minimalist design prioritizing clarity, professional presentation, and easy customization. Drawing from clean portfolio patterns seen in professional platforms.

## Core Design Principles
- **Content-First**: Typography and hierarchy drive the experience
- **Breathing Room**: Generous whitespace creates sophistication
- **Scannable**: Clear visual hierarchy for quick information absorption
- **Universal Appeal**: Design works across all professions and industries

## Typography System
- **Primary Font**: Inter or SF Pro Display (Google Fonts CDN)
- **Hierarchy**:
  - Name/Hero: 4xl-6xl, font-bold (48-60px desktop)
  - Section Headings: 3xl-4xl, font-semibold (36-48px)
  - Project Titles: xl-2xl, font-medium (24-30px)
  - Body Text: base-lg (16-18px), leading-relaxed
  - Captions/Labels: sm, font-medium, tracking-wide uppercase

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 md:py-24 (mobile to desktop)
- Component Spacing: space-y-8 to space-y-12
- Container: max-w-4xl mx-auto px-6 (focused reading width)

## Page Structure

### Header/Navigation
- Fixed or sticky header with name/logo
- Simple nav links: About, Projects, Contact
- Clean, minimal design - text-only links with subtle hover states

### Hero/Introduction Section
- Large, bold name display (centered or left-aligned)
- Single-line tagline or professional title below name
- Brief 1-2 sentence introduction
- **No background image** - pure typography on clean background
- Generous padding: py-20 md:py-32

### About Section
- Single column, max-w-3xl for optimal reading
- Professional headshot (circular, 200-300px, positioned left or centered above text)
- 2-3 paragraph bio
- Skills or expertise areas displayed as clean tags/pills or simple list
- Section padding: py-16 md:py-24

### Projects/Achievements Showcase
- Single-column layout for project cards (NOT grid)
- Each project card includes:
  - Project image (16:9 ratio, rounded corners)
  - Title and brief description
  - Optional tech stack tags
  - Link to view more (subtle, underlined)
- Cards stacked vertically with space-y-12
- Maximum 4-6 featured projects for initial view

### Contact Section
- Centered content, max-w-2xl
- Email address as primary contact (large, clickable)
- Social media icons (LinkedIn, GitHub, Twitter, etc.) using Heroicons
- Simple, clean icon arrangement
- Optional: Brief call-to-action text
- Section padding: py-16 md:py-24

## Component Library

**Navigation Links**: Text-based, subtle underline on hover, smooth transitions

**Project Cards**: 
- White/subtle background with soft shadow
- Rounded corners (rounded-lg)
- Padding: p-6
- Image fills width, mb-4
- Clear title and description hierarchy

**Buttons/Links**: 
- Primary: Solid background with rounded corners
- Secondary: Outlined or text-only
- Hover states: Slight background shift, no dramatic effects

**Social Icons**: 
- Use Heroicons via CDN
- Size: w-6 h-6
- Subtle hover scale or color shift

**Skill Tags**: 
- Rounded-full, px-4 py-2
- Small text, subtle background

## Images

**Professional Headshot**: 
- Circular crop, 200-300px diameter
- Positioned in About section
- High-quality, professional photo

**Project Images**: 
- Placeholder: Abstract patterns, mockups, or project screenshots
- Aspect ratio: 16:9 for consistency
- Rounded corners for polish
- Alt text: "[Project Name] preview"

**No Hero Image**: This portfolio uses typography-driven hero section, not image backgrounds

## Mobile Responsiveness
- Single column on all viewports for simplicity
- Reduce font sizes proportionally (text-3xl → text-5xl on larger screens)
- Stack navigation vertically on mobile or use hamburger menu
- Maintain generous padding scaled down (py-12 on mobile vs py-24 desktop)
- Touch-friendly tap targets (min 44x44px)

## Accessibility
- Semantic HTML throughout (header, nav, main, section, footer)
- ARIA labels for icon-only links
- Sufficient contrast ratios for all text
- Keyboard navigable
- Focus states on all interactive elements

## Animations
- Minimal, purposeful motion only
- Smooth scroll behavior for anchor links
- Subtle fade-in for sections on scroll (optional)
- No distracting parallax or complex animations

## Customization Strategy
All variable content clearly marked with comments:
- Text content: `<!-- CUSTOMIZE: Your name here -->`
- Images: Descriptive alt text and sizing specs
- Links: `<!-- CUSTOMIZE: Add your email/social URLs -->`
- Keep structure intact, modify content only