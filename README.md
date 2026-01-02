# Netflix Clone

A full-stack Netflix clone built with Next.js, featuring user authentication, movie browsing, and video playback.

## Features

- User authentication (sign up/sign in)
- Browse movies with categories (Trending, Top Rated, Action, Comedy, etc.)
- Movie details with trailers
- Responsive design
- Static movie data with random images and videos

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js with credentials
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=mongodb://localhost:27017/netflix
   ```

4. Start MongoDB if running locally

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- Sign up for a new account or sign in
- Browse movies in different categories
- Click on movies to view details and trailers
- Enjoy the Netflix-like experience!

## Build

```bash
npm run build
```

## Note

This app uses static movie data with placeholder images from Picsum and sample YouTube videos. No external API keys required.
