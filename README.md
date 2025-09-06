# Learnify AI

A modern AI-powered learning platform built with Next.js 14, TypeScript, TailwindCSS, shadcn/ui, MongoDB, and Clerk authentication.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **TailwindCSS** for styling
- 🧩 **shadcn/ui** for beautiful components
- 🔐 **Clerk** for authentication
- 🗄️ **MongoDB** with Mongoose for database
- 📱 **Responsive design** with dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (local or cloud)
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd learnify-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string_here
```

4. Set up Clerk:
   - Go to [Clerk Dashboard](https://dashboard.clerk.com/)
   - Create a new application
   - Copy your publishable key and secret key to the `.env.local` file

5. Set up MongoDB:
   - Create a MongoDB database (local or MongoDB Atlas)
   - Copy your connection string to the `MONGODB_URI` in `.env.local`

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
learnify-ai/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles with TailwindCSS
│   │   ├── layout.tsx       # Root layout with Clerk provider
│   │   └── page.tsx         # Home page
│   ├── lib/                 # Utility functions
│   │   ├── mongodb.ts       # MongoDB connection utility
│   │   └── utils.ts         # shadcn/ui utilities
│   └── types/               # TypeScript type definitions
│       └── global.d.ts      # Global type definitions
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # TailwindCSS configuration
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Clerk** - Authentication and user management
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.