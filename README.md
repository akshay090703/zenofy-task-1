# AI for a Better World - Frontend Task Documentation

## Project Overview

This project is a landing page for an AI-focused company creating products in health, climate, and habits. It's built using Next.js, React, and Framer Motion.

## Features

1. Responsive design
2. Dark mode support
3. Mock Backend
4. Interactive components with animations
5. Sections for Hero, About, Offerings, Trusted Companies, and Testimonials

## Technologies Used

- Next.js 15 (App Router, Turpo pack)
- React 18+
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion (for animations)
- mock-api - https://app.beeceptor.com
- next-themes (for dark mode)

## Project Structure

```
/app
  /auth
    /forgot-password
      page.tsx
    /signin
      page.tsx
    /signup
      page.tsx
    layout.tsx
    page.tsx
    globals.css
/components
  /ui
    button.tsx
    dropdown-menu.tsx
    skeleton.tsx
  ModeToggle.tsx
  About.tsx
  Contact.tsx
  Hero.tsx
  Navbar.tsx
  Offerings.tsx
  Testimonials.tsx
  TrustedBy.tsx
/contexts
  UserContext.tsx
  theme-provider.tsx
/lib
  axios.ts
  constants.ts
/public
  /logos
    amazon.svg
    apple.svg
    facebook.svg
    google.svg
    ibm.svg
    microsoft.svg
```

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   bun install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_API_URL='https://zenofytask.free.beeceptor.com/api'
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   bun dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Component Breakdown

1. **Navbar (`Navbar.tsx`)**:

   - Displays the logo, dark mode toggle, and authentication status
   - Uses `next-themes` for dark mode functionality
   - Uses `local-storage` for store authentication status

2. **Hero (`Hero.tsx`)**:

   - Main landing section with animated background
   - Call-to-action button

3. **About (`About.tsx`)**:

   - Company mission statement
   - Animated on scroll

4. **Offerings (`Offerings.tsx`)**:

   - Displays company's main products/services
   - Animated cards

5. **TrustedBy (`TrustedBy.tsx`)**:

   - Showcases logos of trusted companies
   - Animated appearance of logos

6. **Testimonials (`Testimonials.tsx`)**:

   - Customer testimonials
   - Animated appearance on scroll

7. **Contact (`Contact.tsx`)**:

   - Contact form for user inquiries
   - Form submission handled by the mock API

8. **Authentication Pages**:
   - Sign In (`/auth/signin/page.tsx`)
   - Sign Up (`/auth/signup/page.tsx`)
   - Forgot Password (`/auth/forgot-password/page.tsx`)

## Authentication Flow

1. User clicks "Login" in the Navbar
2. Redirected to `/auth/signin`
3. User enters credentials
4. Frontend sends request to mock backend API
5. On successful authentication, user is redirected to home page
6. Navbar updates to show user is logged in

## Dark Mode Implementation

- Uses `next-themes` package
- Theme toggle in Navbar
- CSS classes in Tailwind handle dark mode styles

## Animations

- Implemented using Framer Motion
- Scroll-triggered animations in most components
- Hover and tap animations on interactive elements

## API Integration

- Authentication endpoints (`/api/auth/*`)
- Contact form submission (`/api/contact-mail`)

## User Context

- The mock api sends a 200 status code response
- The frontend stores a mock user in the local storage and setup the user for the context
- Using this context, the navbar renders login button dynamically

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

   or

   ```bash
   bun start
   ```

3. For deployment on Vercel:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and set up the build configuration

## Performance Considerations

- Uses Next.js App Router for improved performance
- Images are optimized using Next.js Image component
- Code splitting is handled automatically by Next.js

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast ratios adhere to WCAG guidelines

## Future Improvements

- Implement server-side rendering for dynamic content
- Enhance form validation and error handling
