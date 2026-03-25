<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])


```
<p align="center">
  <a href="https://github.com/lucide-icons/lucide">
    <img src="https://lucide.dev/package-logos/lucide-react.svg" alt="Lucide icon library for React applications." width="540">
  </a>
</p>

<p align="center">
Lucide icon library for React applications.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/lucide-react?color=blue)](https://www.npmjs.com/package/lucide-react)
  ![NPM Downloads](https://img.shields.io/npm/dw/lucide-react)
  [![GitHub](https://img.shields.io/github/license/lucide-icons/lucide)](https://lucide.dev/license)
</div>

<p align="center">
  <a href="https://lucide.dev/guide/">About</a>
  ·
  <a href="https://lucide.dev/icons/">Icons</a>
  ·
  <a href="https://lucide.dev/guide/react">Documentation</a>
  ·
  <a href="https://lucide.dev/license">License</a>
</p>

# Lucide React

Implementation of the Lucide icon library for React applications.

## Installation

```sh
pnpm add lucide-react
```

```sh
npm install lucide-react
```

```sh
yarn add lucide-react
```

```sh
bun add lucide-react
```

## Documentation

For full documentation, visit [lucide.dev](https://lucide.dev/guide/packages/lucide-react)

## Community

Join the [Discord server](https://discord.gg/EH6nSts) to chat with the maintainers and other users.

## License

Lucide is licensed under the ISC license. See [LICENSE](https://lucide.dev/license).

## Sponsors

<a href="https://vercel.com?utm_source=lucide&utm_campaign=oss">
  <img src="https://lucide.dev/vercel.svg" alt="Powered by Vercel" width="200" />
</a>

<a href="https://www.digitalocean.com/?refcode=b0877a2caebd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://lucide.dev/digitalocean.svg" width="200" alt="DigitalOcean Referral Badge" /></a>

[//]: <> (Open Collective backers)
### Awesome backers 🍺

<a href="https://github.com/pdfme/pdfme"><img src="https://lucide.dev/sponsors/pdfme.svg" width="180" alt="pdfme – Open-source PDF generation library built with TypeScript and React." /></a>
<a href="https://www.paxhistoria.co/"><img src="https://lucide.dev/sponsors/paxhistoria.svg?" width="180" alt="Pax Historia – An alternate history sandbox game" /></a>

### Backers ☕

<a href="https://www.fina.money/"><img src="https://lucide.dev/sponsors/fina-money.png" width="180" alt="Fina Money – Modular Finance Tracker" /></a>

### Other contributors 💸

You can find all our past and non-recurring financial contributors at [our Open Collective page](https://opencollective.com/lucide-icons).
=======
# Panithan-s-Portfolio-w-vibe-coding
Built on 70% Vibe Code and 30% Flexibility.
