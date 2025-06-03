# Property Management Frontend

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript)

A comprehensive React-based frontend application for property management, providing a user interface for managing properties, purchases, receipts, and users.

## 📝 Documentation

Comprehensive documentation is available in the `__documentation` folder:

- [Overview](./__documentation/overview.md) - General overview and purpose
- [Architecture](./__documentation/architecture.md) - Frontend architecture and state management
- [Features](./__documentation/features.md) - Key features and user interfaces
- [Components](./__documentation/components.md) - Reusable components and their usage
- [Integration](./__documentation/integration.md) - Backend API integration

## 🛠️ Technology Stack

- **React 18** - Front-end UI library
- **TypeScript** - Type-safe JavaScript
- **Redux** - State management
- **Material-UI** - Component library
- **Vite** - Build tool and dev server
- **React Router** - Routing
- **Axios** - API client

## 🏗️ Project Structure

```
property-frontend/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   │   ├── button/      # Button components
│   │   ├── header/      # Header components
│   │   ├── leftNavigation/ # Navigation sidebar
│   │   ├── overview/    # Dashboard components
│   │   ├── properties/  # Property management
│   │   ├── purchases/   # Purchase tracking
│   │   ├── receipts/    # Receipt management
│   │   ├── reports/     # Reporting components
│   │   └── users/       # User management
│   ├── pages/           # Page components
│   ├── api/             # API integration
│   ├── redux/           # State management
│   │   ├── slices/      # Redux slices
│   │   ├── hooks.ts     # Redux hooks
│   │   └── store.ts     # Redux store
│   ├── assets/          # Images and icons
│   ├── services/        # Service modules
│   ├── constants/       # Application constants
│   ├── config/          # Configuration
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:3000.

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## ✨ Features

- **Property Management**: Track and manage real estate properties and units
- **Purchase Tracking**: Monitor purchases and assignments to properties
- **Receipt Management**: Organize and categorize receipts
- **User Authentication**: Secure login and access control
- **Reporting**: Generate and view property performance reports
- **Multi-Company Support**: Manage data across multiple companies
- **Responsive Design**: Works seamlessly across different devices

## 👥 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

This project is proprietary and confidential.
