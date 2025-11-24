# Portfolio Website

## Overview

This is a modern, minimalist portfolio website built with React and Express. The application follows Apple HIG-inspired design principles, focusing on clean typography, generous whitespace, and content-first presentation. It's designed to be universally appealing across all professions and industries, with easy customization for personal branding.

The application is a full-stack TypeScript project using Vite for frontend bundling, Express for the backend server, and is configured to work with PostgreSQL via Drizzle ORM. The UI is built with shadcn/ui components and styled with Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application currently has two routes:
- `/` - Main portfolio page
- Catch-all route for 404 Not Found page

**State Management**: TanStack Query (React Query) for server state management. The query client is configured with:
- Custom query functions for API requests
- Infinite stale time (data doesn't automatically refetch)
- No automatic refetching on window focus or intervals
- 401 unauthorized responses can either throw or return null based on configuration

**UI Component Library**: shadcn/ui (New York style variant) - a collection of re-usable components built on:
- Radix UI primitives for accessibility and unstyled base components
- Tailwind CSS for styling
- class-variance-authority (cva) for component variant management

**Styling Approach**: Tailwind CSS with custom design tokens following Apple HIG principles:
- CSS variables for theming (light mode configured, dark mode structure in place)
- Custom spacing units (4, 6, 8, 12, 16, 20, 24)
- Typography system using Inter font family
- Elevation system with subtle shadows
- Content-focused max-width containers (max-w-4xl for reading width)

**Design System**: Typography-driven hierarchy with:
- Hero text: 4xl-6xl, bold (48-60px)
- Section headings: 3xl-4xl, semibold (36-48px)
- Project titles: xl-2xl, medium (24-30px)
- Body text: base-lg (16-18px) with relaxed leading
- Labels: sm, medium, uppercase with wide tracking

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM (ECMAScript modules) mode.

**Development vs Production**:
- Development mode uses Vite's middleware for HMR (Hot Module Replacement)
- Production mode serves pre-built static files from dist/public
- Separate entry points: `server/index-dev.ts` and `server/index-prod.ts`

**Build Process**: 
- Client built with Vite to dist/public
- Server bundled with esbuild to dist/index.js as ESM bundle
- External packages not bundled in server build

**API Structure**: 
- API routes are intended to be prefixed with `/api`
- Route registration handled in `server/routes.ts`
- Currently minimal routes configured (starter template)

**Data Storage Strategy**: 
- Abstracted storage interface (`IStorage`) allowing for multiple implementations
- In-memory storage (`MemStorage`) provided as default
- Database-ready with Drizzle ORM schema defined
- Schema defines users table with id, username, and password fields

**Request Handling**:
- JSON body parsing with raw body capture for webhook verification
- URL-encoded form data support
- Request logging with timestamps and duration tracking
- Credentials included in requests for session management

### Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL dialect.

**Schema Design**: 
- Users table with UUID primary keys (using PostgreSQL's gen_random_uuid())
- Zod schemas generated from Drizzle tables for validation
- Type-safe inserts and selects

**Migration Strategy**: 
- Migrations stored in `/migrations` directory
- Schema defined in `/shared/schema.ts` for sharing between client and server
- Push-based workflow available via `npm run db:push`

**Connection**: Expects `DATABASE_URL` environment variable for PostgreSQL connection.

### Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # shadcn/ui components
│   │   ├── hooks/       # React hooks (mobile detection, toast)
│   │   ├── lib/         # Utilities and query client
│   │   ├── pages/       # Route components
│   │   ├── App.tsx      # Root component with routing
│   │   └── main.tsx     # React entry point
│   └── index.html       # HTML template
├── server/              # Backend Express application
│   ├── app.ts          # Express app configuration
│   ├── routes.ts       # API route definitions
│   ├── storage.ts      # Data storage abstraction
│   ├── index-dev.ts    # Development server with Vite
│   └── index-prod.ts   # Production server
├── shared/             # Shared code between client/server
│   └── schema.ts       # Database schema and types
└── migrations/         # Database migrations
```

### Path Aliases

TypeScript and build tools configured with path aliases:
- `@/*` → client/src/*
- `@shared/*` → shared/*
- `@assets/*` → attached_assets/*

## External Dependencies

### Core Framework Dependencies

**Frontend**:
- React 18 with TypeScript
- Vite for build tooling and development server
- Wouter for client-side routing
- TanStack Query v5 for server state management

**Backend**:
- Express.js for HTTP server
- tsx for TypeScript execution in development
- esbuild for production bundling

### UI Component Libraries

**shadcn/ui Component Dependencies** (all @radix-ui packages):
- Comprehensive set of accessible, unstyled primitives
- Includes: accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, select, tabs, toast, tooltip, and many more
- All components are locally defined in client/src/components/ui/

**Styling**:
- Tailwind CSS for utility-first styling
- PostCSS with Autoprefixer
- class-variance-authority for component variants
- clsx and tailwind-merge for conditional class merging

**Icons**: Lucide React for icon components

**Form Handling**:
- React Hook Form for form state management
- @hookform/resolvers for validation integration
- Zod for schema validation

**Additional UI**:
- cmdk for command menu/palette
- embla-carousel-react for carousels
- react-day-picker for date picking
- vaul for drawer components

### Database & ORM

- Drizzle ORM v0.39.1 for type-safe database operations
- drizzle-zod for automatic Zod schema generation
- @neondatabase/serverless for PostgreSQL connection (Neon-compatible)
- drizzle-kit for migrations and schema management

### Development Tools

**Replit Integration**:
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for development tooling
- @replit/vite-plugin-dev-banner for development indicators

**Build & Development**:
- TypeScript compiler for type checking
- Vite plugins for React (@vitejs/plugin-react)

### Utilities

- nanoid for unique ID generation
- date-fns for date manipulation
- @jridgewell/trace-mapping for source map handling

### Session Management

- connect-pg-simple for PostgreSQL-backed session storage (configured but session middleware not yet implemented)

### Font Loading

Google Fonts CDN for Inter font family (preconnected in index.html for performance)