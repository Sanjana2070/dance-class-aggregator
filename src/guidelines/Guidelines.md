# DanceHub - Dance Class Aggregator Application Guidelines

## Project Overview

DanceHub is a comprehensive dance class aggregator application built with React and Tailwind CSS. It provides an ecommerce-style browsing experience for discovering and booking dance classes, instructors, and studios. The application features a modern, responsive design with multi-page navigation and shopping cart functionality.

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone/Download the project files**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### Key Dependencies

- **React 18+** - Component-based UI framework
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens
- **ShadCN/UI** - Consistent component library built on Radix UI
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives for accessibility

## Architecture

### Core Technologies
- **React 18+** - Component-based UI framework
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens
- **TypeScript** - Type-safe JavaScript development
- **ShadCN/UI** - Consistent component library
- **Lucide React** - Icon library

### Application Structure

The application uses a client-side routing system with context-based state management:

```
├── App.tsx                 # Main application component with routing
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/
│   ├── Router.tsx          # Client-side routing context
│   ├── CartContext.tsx     # Shopping cart state management
│   ├── Header.tsx          # Global navigation header
│   ├── pages/              # Page components
│   │   ├── ClassesPage.tsx
│   │   ├── InstructorsPage.tsx
│   │   ├── StudiosPage.tsx
│   │   └── CartPage.tsx
│   ├── [Component].tsx     # Feature components
│   └── ui/                 # ShadCN/UI components
├── styles/globals.css      # Tailwind v4 configuration
└── guidelines/Guidelines.md # This file
```

## Routing System

### Router Context (`/components/Router.tsx`)
- Simple state-based routing using React Context
- Supports navigation between: home, classes, instructors, studios, cart
- Usage: `const { currentPage, navigateTo } = useRouter()`

### Page Navigation
```typescript
// Navigate to different pages
navigateTo('classes')    // Classes listing page
navigateTo('instructors') // Instructors directory
navigateTo('studios')    // Studios directory
navigateTo('cart')       // Shopping cart
navigateTo('home')       // Homepage with hero section
```

## State Management

### Cart Context (`/components/CartContext.tsx`)
Manages shopping cart functionality with the following features:

```typescript
interface CartItem {
  id: string;
  title: string;
  instructor: string;
  studio: string;
  price: number;
  date: string;
  time: string;
  image: string;
  quantity: number;
}

// Available methods:
addToCart(item)          // Add item to cart
removeFromCart(id)       // Remove item completely
updateQuantity(id, qty)  // Update item quantity
getTotalPrice()          // Calculate total price
getTotalItems()          // Get total item count
clearCart()              // Empty the cart
```

## Component Guidelines

### Card Components

#### DanceClassCard (`/components/DanceClassCard.tsx`)
- Displays class information in product-style format
- Includes booking functionality that adds to cart
- Props: id, title, instructor, studio, location, price, rating, etc.

#### InstructorCard (`/components/InstructorCard.tsx`)
- Shows instructor profiles with specialties and experience
- Props: name, specialties, experience, location, rating, hourlyRate, etc.

#### StudioCard (`/components/StudioCard.tsx`)
- Displays studio information with amenities and location
- Props: name, description, location, rating, amenities, hours, etc.

### Page Components

Each page follows consistent structure:
```typescript
// Page header with title and description
<div className="bg-muted/30 py-8">
  <h1>Page Title</h1>
  <p className="text-muted-foreground">Description</p>
</div>

// Filter/navigation section
<section className="bg-card py-6 border-b">
  {/* Category filters or location filters */}
</section>

// Main content with search and results
<main className="container mx-auto px-4 py-8">
  {/* Search bar and filters */}
  {/* Results grid */}
  {/* Load more button */}
</main>
```

### Layout Components

#### Header (`/components/Header.tsx`)
- Sticky navigation with logo, search, navigation links, and cart icon
- Shows cart item count badge
- Responsive design with mobile considerations

#### Footer
- Only displayed on homepage
- Contains site links and company information

## Design System

### Tailwind v4 Configuration

The application uses Tailwind v4 with custom design tokens defined in `/styles/globals.css`:

#### Color Tokens
- `--primary` / `--primary-foreground` - Main brand colors
- `--secondary` / `--secondary-foreground` - Secondary colors
- `--muted` / `--muted-foreground` - Subtle backgrounds and text
- `--accent` / `--accent-foreground` - Accent colors for highlights
- `--destructive` - Error and warning states
- `--border` - Border colors
- `--card` / `--card-foreground` - Card backgrounds

#### Typography System
Automatic typography is applied via CSS selectors:
- `h1` - 2xl size, medium weight
- `h2` - xl size, medium weight
- `h3` - lg size, medium weight
- `h4` - base size, medium weight
- `p` - base size, normal weight

**Important**: Do not use Tailwind font size, weight, or line-height classes unless specifically requested, as the design system handles typography automatically. Some ShadCN components may have default styling that needs to be explicitly overridden.

### Component Patterns

#### Consistent Card Structure
```typescript
<Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
  <div className="relative">
    <ImageWithFallback src={image} alt={title} />
    {/* Badges and overlays */}
  </div>
  <CardContent className="p-4 space-y-3">
    {/* Content sections */}
  </CardContent>
</Card>
```

#### Button Patterns
- Primary actions: `<Button>Action</Button>`
- Secondary actions: `<Button variant="outline">Action</Button>`
- Ghost actions: `<Button variant="ghost">Action</Button>`

#### Badge Usage
- Categories: `<Badge variant="secondary">{category}</Badge>`
- Status indicators: `<Badge variant="default">{status}</Badge>`
- Outline badges: `<Badge variant="outline">{info}</Badge>`

## Data Patterns

### Mock Data Structure
All components use structured mock data with consistent properties:

```typescript
// Dance Classes
interface DanceClass {
  id: string;
  title: string;
  instructor: string;
  studio: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  category: string;
  image: string;
  spots: number;
  isPopular?: boolean;
}

// Instructors
interface Instructor {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  location: string;
  rating: number;
  reviewCount: number;
  classesCount: number;
  hourlyRate: number;
  image: string;
  bio: string;
  isVerified?: boolean;
}

// Studios
interface Studio {
  id: string;
  name: string;
  description: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  classesCount: number;
  priceRange: string;
  image: string;
  amenities: string[];
  hours: string;
  isPartner?: boolean;
}
```

## Image Handling

### ImageWithFallback Component
Always use the `ImageWithFallback` component for new images:
```typescript
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="image-url"
  alt="description"
  className="w-full h-48 object-cover"
/>
```

### Unsplash Integration
For mock images, use Unsplash URLs with proper dimensions:
```
https://images.unsplash.com/photo-id?w=600&h=300&fit=crop
```

## Performance Considerations

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Hide elements on mobile: `hidden lg:block`
- Responsive text: Natural responsive behavior via design system

### State Optimization
- Context providers wrap only necessary components
- Cart state persists across page navigation
- Efficient re-renders through proper key props

## Development Guidelines

### File Organization
- Page components in `/components/pages/`
- Feature components in `/components/`
- UI components in `/components/ui/` (ShadCN only)
- Utility functions and contexts in `/components/`

### Import Conventions
```typescript
// External libraries (no version numbers in imports)
import { useState } from 'react';
import { Search, Heart } from 'lucide-react';

// Internal components
import { Button } from './ui/button';
import { useRouter } from './Router';
import { useCart } from './CartContext';
```

**Important**: Never include version numbers in import statements (e.g., `from 'package@1.0.0'`). Use clean imports like `from 'package'`.

### Component Naming
- PascalCase for components: `DanceClassCard`
- camelCase for functions and variables: `getTotalPrice`
- kebab-case for files: `dance-class-card.tsx`

### Styling Guidelines
- Explicitly set spacing, typography, and colors to override ShadCN defaults when needed
- Use design system variables for consistency
- Follow the established patterns in existing components

## Testing Patterns

### Mock Data
Each component includes representative mock data for development and testing. Mock data should:
- Include edge cases (long titles, missing ratings, etc.)
- Use realistic content and proper formatting
- Include optional properties to test conditional rendering

### Responsive Testing
Test components at multiple breakpoints:
- Mobile: 375px width
- Tablet: 768px width  
- Desktop: 1024px+ width

## Future Enhancements

The application is structured to easily support:
- Real API integration (replace mock data)
- User authentication system
- Payment processing integration
- Real-time availability updates
- Advanced filtering and search
- Supabase backend integration
- Progressive Web App features

## Code Quality

### TypeScript Usage
- All props interfaces clearly defined
- Optional properties marked with `?`
- Proper typing for event handlers and state

### Accessibility
- Semantic HTML structure
- Proper ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly content

### Performance
- Efficient re-renders through proper key usage
- Image optimization with proper alt text
- Lazy loading considerations for large lists

## Troubleshooting

### Common Issues
- **Import errors**: Ensure all packages are installed with `npm install`
- **Build errors**: Check TypeScript configurations and fix any type errors
- **Styling issues**: Verify Tailwind v4 is properly configured and CSS variables are defined
- **Component errors**: Check that all ShadCN components are properly imported

### Development Tools
- Use `npm run dev` for development with hot reloading
- Use `npm run build` to check for build errors
- Use browser dev tools for responsive testing