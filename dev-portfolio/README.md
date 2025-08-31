# Divyesh Lahane - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development, component architecture, and modern web development techniques.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **TypeScript**: Full type safety and better development experience
- **Component-Based**: Modular, reusable components
- **Custom Hooks**: Reusable logic with custom hooks
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized with lazy loading and efficient rendering
- **SEO Ready**: Meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Code Quality**: Prettier (recommended)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── hooks/              # Custom React hooks
│   ├── useTypingEffect.ts
│   └── useScrollTracking.ts
├── data/               # Static data and interfaces
│   ├── skills.ts
│   ├── experience.ts
│   └── projects.ts
├── utils/              # Utility functions
│   └── scrollUtils.ts
├── constants/          # Application constants
│   └── index.ts
├── styles/             # Global styles
│   └── globals.css
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Constants** (`src/constants/index.ts`):
   - Update `PERSONAL_INFO` with your details
   - Update `SOCIAL_LINKS` with your social media profiles
   - Update `ROLES` array with your professional titles

2. **Data Files**:
   - `src/data/skills.ts` - Update your skills and proficiency levels
   - `src/data/experience.ts` - Update your work experience
   - `src/data/projects.ts` - Update your projects

### Styling

The project uses Tailwind CSS for styling. You can customize:

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Global Styles**: Modify `src/styles/globals.css`
3. **Component Styles**: Update individual component classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

This project follows accessibility best practices:

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🚀 Performance Optimizations

- **Code Splitting**: Components are modular and lazy-loadable
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Proper cache headers and service worker ready

## 🔧 Development Best Practices

### Code Organization

1. **Component Structure**: Each component is in its own file with proper TypeScript interfaces
2. **Custom Hooks**: Reusable logic extracted into custom hooks
3. **Data Separation**: Static data separated from components
4. **Utility Functions**: Common functions extracted to utils

### TypeScript

- Strict type checking enabled
- Proper interface definitions
- Type-safe props and state

### ESLint Configuration

- React hooks rules
- TypeScript support
- Modern JavaScript features
- Accessibility rules

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Contact

- **Email**: divyeshlahane15@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/divyesh-lahane/
- **GitHub**: https://github.com/divs1502/

---

Made with ❤️ and React
