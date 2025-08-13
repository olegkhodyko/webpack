# Webpack Course Project

A modern webpack configuration project with TypeScript, React, and comprehensive build optimization.

## 🚀 Features

- **TypeScript Support** - Full TypeScript compilation with type checking
- **React Development** - Hot Module Replacement (HMR) and Fast Refresh
- **CSS/SCSS Processing** - Support for CSS modules and SCSS compilation
- **Asset Management** - SVG optimization, image handling, and file copying
- **Development Server** - Hot reloading with webpack-dev-server
- **Production Optimization** - CSS extraction, code splitting, and bundle analysis
- **Multi-platform Support** - Configurable for different platforms
- **Internationalization** - Built-in locale support (EN/RU)

## 📁 Project Structure

```
webpack_course/
├── config/webpack/          # Webpack configuration
│   ├── loaders/            # Custom loaders
│   ├── plugins/            # Environment-specific plugins
│   └── types/              # TypeScript types
├── public/                 # Static assets
│   ├── locales/           # Translation files
│   └── index.html         # HTML template
├── src/                   # Source code
│   ├── app/              # Main application
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   └── styles/           # Global styles
└── webpack.config.ts      # Main webpack entry point
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd webpack_course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 📦 Dependencies

### Core Dependencies

- `webpack` - Module bundler
- `webpack-cli` - Command line interface
- `webpack-dev-server` - Development server

### TypeScript & React

- `typescript` - TypeScript compiler
- `ts-loader` - TypeScript loader for webpack
- `@babel/preset-react` - React preset for Babel
- `@babel/preset-typescript` - TypeScript preset for Babel

### Styling

- `css-loader` - CSS processing
- `style-loader` - Style injection
- `sass-loader` - SCSS compilation
- `mini-css-extract-plugin` - CSS extraction for production

### Development Tools

- `html-webpack-plugin` - HTML generation
- `fork-ts-checker-webpack-plugin` - Type checking in separate process
- `@pmmmwh/react-refresh-webpack-plugin` - React Fast Refresh
- `webpack-bundle-analyzer` - Bundle analysis

### Asset Handling

- `@svgr/webpack` - SVG optimization
- `copy-webpack-plugin` - File copying
- `babel-loader` - JavaScript/TypeScript transpilation

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

Starts development server with hot reloading at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Creates optimized production build in the `dist` folder

### Bundle Analysis

```bash
npm run build:analyze
```

Builds and analyzes bundle size and composition

## ⚙️ Configuration

The webpack configuration is modular and organized into:

- **Loaders** - File processing rules
- **Plugins** - Build optimization and features
- **Resolvers** - Module resolution settings
- **Development Server** - Dev server configuration

### Environment Variables

- `NODE_ENV` - Set to `development` or `production`
- `PLATFORM` - Target platform configuration
- `ANALYZER` - Enable bundle analysis

## 🎯 Key Features Explained

### CSS Modules

- `.module.scss` files automatically use CSS modules
- Regular `.scss` files are processed normally
- Production builds extract CSS into separate files

### TypeScript Integration

- Full type checking with `fork-ts-checker-webpack-plugin`
- Fast compilation with `ts-loader`
- React Fast Refresh for development

### Asset Optimization

- SVG files are optimized with SVGR
- Images are handled as assets
- Locale files are copied to build output

## 🔧 Customization

### Adding New Loaders

Create a new file in `config/webpack/loaders/` and import it in `build.loaders.ts`

### Adding New Plugins

Create a new file in `config/webpack/plugins/` and import it in the appropriate plugin file

### Environment-Specific Config

Modify `development.plugins.ts` or `production.plugins.ts` for environment-specific features

## 📚 Learning Resources

This project demonstrates:

- Modern webpack configuration
- TypeScript integration
- React development setup
- CSS/SCSS processing
- Asset optimization
- Development vs production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is part of a webpack course and is for educational purposes.

---

**Happy coding! 🎉**
