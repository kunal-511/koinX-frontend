# KoinX-Frontend 

A modern React application built with Vite, TypeScript, and shadcn/ui components using pnpm as the package manager.

## Tech Stack

- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Prerequisites

- Node.js (version 22.0.0 or higher)
- pnpm (version 10.0.0 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Creates a production build
- `pnpm preview` - Locally preview the production build
- `pnpm lint` - Run ESLint

## Project Structure

```
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utility functions and hooks
│   ├── App.tsx         # Root component
│   └── main.tsx        # Application entry point
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Adding shadcn/ui Components

To add new shadcn/ui components, use the CLI:

```bash
pnpm dlx shadcn-ui@latest add <component-name>
```

Example:
```bash
pnpm dlx shadcn-ui@latest add button
```