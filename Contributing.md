# 🧭 Contributing to Fluxxion Studio

Welcome to **Fluxxion Studio** — we’re thrilled you’re here! 💫
Fluxxion Studio is an **open-source frontend-only project** focused on modern UI, animation, and creative web experiences. Whether you’re a beginner or an experienced developer, your contribution matters.

## 🚀 Getting Started

### 1️⃣ Fork the Repository

Click the **Fork** button on the top right of the repository page.

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Fluxxion-Studio.git
cd Fluxxion-Studio
```

### 3️⃣ Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

### 4️⃣ Install Dependencies

```bash
npm install
```

### 5️⃣ Run the Development Server

```bash
npm run dev
```

Your app will run on **[http://localhost:5173](http://localhost:5173)**

## 🧱 Project Setup

Fluxxion Studio is a **frontend-only React project** using the following stack:

- ⚛️ React 19 + Vite
- 🎨 Tailwind CSS + SCSS
- 🎞️ Framer Motion, GSAP, React Three Fiber
- 🧭 Zustand / React Context for state management
- 🧰 ESLint + Prettier for clean code
- 🚀 Deployed on Vercel / Netlify

## 🧩 Contribution Areas

We welcome all kinds of contributions!

| Type                       | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| 🐛 **Bug Fixes**           | Identify and fix existing bugs in UI or animations         |
| ✨ **New Features**        | Add creative components, animations, or effects            |
| 🧠 **Documentation**       | Improve or clarify README, Contributing guide, or comments |
| 🎨 **Design Enhancements** | Improve UI/UX visuals and responsiveness                   |
| 🧪 **Testing**             | Add or enhance unit tests                                  |
| ⚙️ **Refactoring**         | Optimize performance, cleanup code structure               |

## 🧠 Code Style Guidelines

We follow standard conventions for consistency:

- **Components:** `PascalCase` → `HeroSection.jsx`
- **Functions & variables:** `camelCase`
- **File names:** match component or utility purpose
- **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Example Commit Messages

feat: add 3D scroll-based project showcase
fix: resolve animation stutter on About page
chore: update dependencies and optimize imports
docs: improve contribution instructions

````

## 🧱 Branch Naming Convention

| Type    | Prefix Example                   |
| ------- | -------------------------------- |
| Feature | `feature/animated-cursor`        |
| Fix     | `fix/mobile-navbar-bug`          |
| Docs    | `docs/update-readme`             |
| Design  | `design/improve-services-layout` |
| Test    | `test/add-motion-tests`          |


## 🔁 Submitting a Pull Request

1. Commit and push your changes:

```bash
git add .
git commit -m "feat: added new animated loader"
git push origin feature/animated-loader
````

2. Go to your fork on GitHub and click **Compare & Pull Request**.
3. Fill in details about your contribution (screenshots, explanation, etc.).
4. Wait for review — maintainers will provide feedback or merge your PR.

## 🧩 Issue Guidelines

When opening an issue:

- Use **clear titles** (e.g. `Animation not triggering on scroll`)
- Include **steps to reproduce** and **expected behavior**
- Add **screenshots** or **recordings** when relevant
- Tag your issue: `bug`, `enhancement`, `question`, etc.

## 🧠 Development Tips

- Use **GSAP timelines** or **Framer Motion variants** for coordinated animations
- Prefer **Tailwind utilities** over custom CSS where possible
- Use **React Three Fiber (R3F)** for 3D effects (keep models lightweight)
- Test responsiveness for **desktop, tablet, and mobile**
- Always run lint before pushing:

  ```bash
  npm run lint
  npm run format
  ```

## 🧭 Code Review Process

All pull requests are reviewed before merging. Reviews check for:

- Clean, readable, and maintainable code
- Consistent design and animation style
- No hardcoded values or unused assets
- Proper component modularity

## 🌍 Community Conduct

We follow a **Contributor Covenant Code of Conduct** — please be respectful, kind, and inclusive.
Any form of harassment, trolling, or disrespectful behavior will not be tolerated.

## 🧭 Roadmap for Contributors

- [ ] Add interactive project gallery with parallax effects
- [ ] Build blog section with motion card transitions
- [ ] Add animated loader and splash intro
- [ ] Implement custom cursor with dynamic color trails
- [ ] Improve accessibility (reduced motion, color contrast)
- [ ] Introduce Storybook or component playground

## 🙏 Acknowledgments

- Inspired by modern creative studios like **Active Theory** and **Resn**
- Built with ❤️ by the open-source community

### ⭐ Star this repository if you find it inspiring!

Together, we’ll make **Fluxxion Studio** an open-source showcase of creativity and frontend mastery. 🚀
