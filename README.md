# Allina-Luminaries

A modern, responsive web application built with React, TypeScript, and shadcn/ui components. This project showcases a precision-built UI design system with a focus on accessibility and user experience.

## 🚀 Features

- Modern and responsive UI design
- Built with TypeScript for type safety
- Comprehensive component library using shadcn/ui
- Fully customizable themes
- Accessible components following WCAG guidelines
- Fast development environment with Vite

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [React Router](https://reactrouter.com/) - Client-side routing
- [React Query](https://tanstack.com/query/latest) - Data synchronization for React
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/7uyash/Allina-Luminaries
   cd Allina-Luminaries
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run build:dev` - Create a development build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── assets/        # Static assets like images
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── lib/          # Utility functions and configurations
├── pages/        # Page components
├── styles/       # Global styles and Tailwind configurations
└── types/        # TypeScript type definitions
```

## 🎨 Customization

### Themes
The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
    // Add other theme customizations
  }
}
```

### Components
All shadcn/ui components can be customized in the `components.json` file and in their respective component files.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the shadcn/ui team for their amazing component library
- Built with ❤️ by the Allina-Luminaries team
