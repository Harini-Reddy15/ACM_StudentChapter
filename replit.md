# ACM Student Chapter Website

## Overview

This is a modern web application for the St. Martin's Engineering College ACM Student Chapter. The application is a full-stack web platform built with React/TypeScript for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The application showcases the chapter's activities, team members, events, and provides contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom ACM branding colors
- **UI Components**: Extensive use of Radix UI components via shadcn/ui
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix
- **Middleware**: Request logging, JSON parsing, error handling
- **Storage**: Currently using in-memory storage with interface for database integration

### Component Structure
The frontend follows a section-based architecture with dedicated components for each page section:
- Header with smooth scrolling navigation
- Hero section with call-to-action buttons
- About section showcasing mission, vision, and values
- Events section displaying upcoming activities
- Team section featuring executive committee
- Contact section with form functionality
- Footer with navigation links

## Key Components

### Data Layer
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: User management system with username/password authentication
- **Migrations**: Automated schema management via drizzle-kit

### UI System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom ACM blue branding with light/dark mode support
- **Responsive**: Mobile-first design with responsive breakpoints
- **Animations**: CSS transitions and hover effects for enhanced UX

### Storage Interface
The application implements an abstraction layer for data persistence:
- `IStorage` interface defining CRUD operations
- `MemStorage` class for development/testing
- Ready for database implementation with same interface

## Data Flow

1. **Client Requests**: Browser sends requests to Express server
2. **API Routing**: Express routes requests to appropriate handlers
3. **Data Access**: Storage interface handles data operations
4. **Response**: JSON responses sent back to client
5. **State Management**: React Query manages client-side caching and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema is up-to-date

### Environment Configuration
- **Development**: Uses tsx for hot-reloading TypeScript server
- **Production**: Compiled JavaScript execution with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable

### File Structure
- `client/`: React frontend application
- `server/`: Express backend application  
- `shared/`: Common TypeScript types and schemas
- `migrations/`: Database migration files
- `dist/`: Built application output

The application is designed for easy deployment to platforms like Replit, with development-specific features like error overlays and cartographer integration for enhanced debugging experience.