# Developer Resource Hub 🚀

> **Built for GDG AITR Evaluation**  
> A modern, clean, responsive, and accessible web application for discovering, filtering, searching, and managing developer tools and learning resources.

---

## 🔗 Live Demo & Repository Setup

- **Live Deployed App**: [https://your-username.github.io/developer-resource-hub/](https://your-username.github.io/developer-resource-hub/) *(Replace with your deployed GitHub Pages / Netlify URL)*
- **GitHub Repository**: [https://github.com/your-username/developer-resource-hub](https://github.com/your-username/developer-resource-hub)

---

## 📌 Project Overview

**Developer Resource Hub** is a single-page web directory built with pure **HTML5, CSS3, Vanilla JavaScript, and Browser LocalStorage**, featuring a lightweight 3D interactive hero element (Three.js) and 2D micro-animations.

It allows developers to explore 20+ curated resources across 4 major tracks:
1. 🌐 **Web Development**
2. 📱 **App Development**
3. 🤖 **AI / Machine Learning**
4. 🛠️ **Developer Tools**

---

## ✨ Features Checklist

- [x] **20+ Curated Resources**: High-quality initial developer tools and documentation.
- [x] **Instant Category Filtering**: Filter by track (*All, Web Development, App Development, AI/ML, Tools*) without page reloads.
- [x] **Live Real-time Search**: Search across Title, Description, Category, and Tags with instant empty state feedback.
- [x] **Add Resource Modal & Form Validation**: Modal dialog to contribute resources with real-time field validation, tag parsing, and persistent storage.
- [x] **LocalStorage Persistence**: Resources, upvote counts, voted states, and theme preferences survive browser refreshes.
- [x] **One-Click Upvote System**: Dynamic upvoting with 2D pulse feedback and single-vote protection per resource session.
- [x] **Dark / Light Mode**: Smooth theme switching using CSS Custom Properties (`0.3s` transition) and dynamic 3D color sync.
- [x] **Lightweight 3D Hero Wireframe**: Subtle Three.js interactive 3D sphere that rotates continuously and responds gracefully to mouse movement.
- [x] **2D Micro-Animations**: Tech grid overlay, ambient floating particles, card hover elevation (`translateY(-4px)`), modal scale-up transition, and button active states.
- [x] **Accessibility & Motion Preference**: Semantic HTML5 elements, visible keyboard focus indicators (`:focus-visible`), ARIA roles, and strict `@media (prefers-reduced-motion: reduce)` support.
- [x] **Fully Responsive**: Mobile-first design supporting Mobile, Tablet, and Desktop with zero horizontal scroll.

---

## 🛠️ Tech Stack

| Component | Technology Used | Description |
|---|---|---|
| **Structure** | **HTML5** | Semantic tags (`<header>`, `<main>`, `<article>`, `<dialog>`, `<footer>`) with ARIA accessibility. |
| **Styling** | **CSS3** | CSS Custom Properties (Variables), Flexbox, CSS Grid, 2D keyframe animations, dark mode. |
| **Logic** | **Vanilla JavaScript (ES6+)** | State management, DOM events, array higher-order methods (`filter`, `map`), XSS sanitization. |
| **3D Rendering** | **Three.js (r128)** | Lightweight single wireframe icosahedron (~45 lines of clean, commented JS). |
| **Storage** | **Browser LocalStorage** | Persistent client-side data storage without backend/database dependencies. |

---

## ⚙️ How to Run Locally

### Option 1: Direct File Launch (Easiest)
1. Open File Explorer and navigate to the project directory:
   `C:\Users\shriy\.gemini\antigravity\scratch\developer-resource-hub`
2. Double-click **`index.html`** to open it directly in your default web browser (Chrome, Firefox, Edge, Brave).

### Option 2: Python HTTP Server (Command Prompt / PowerShell)
1. Open Command Prompt (CMD) or PowerShell and navigate to the folder:
   ```cmd
   cd /d C:\Users\shriy\.gemini\antigravity\scratch\developer-resource-hub
   ```
2. Start the local server:
   ```cmd
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```

---

## 🚀 How to Deploy Live to GitHub Pages (Free 1-Click Deployment)

1. **Initialize Git & Commit Files**:
   ```cmd
   cd /d C:\Users\shriy\.gemini\antigravity\scratch\developer-resource-hub
   git init
   git add .
   git commit -m "Initial commit for GDG AITR evaluation"
   ```

2. **Push to GitHub**:
   - Create a new public repository named `developer-resource-hub` on GitHub.
   - Run:
     ```cmd
     git remote add origin https://github.com/your-username/developer-resource-hub.git
     git branch -M main
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Source**, select **`main`** branch and click **Save**.
   - Your live site will be deployed at: `https://your-username.github.io/developer-resource-hub/`.

---

## 📂 Project Structure

```text
developer-resource-hub/
│
├── index.html     # Semantic HTML layout, search bar, filters, modal dialog & 3D canvas
├── style.css      # CSS custom properties, grid layouts, 2D animations & responsive design
├── script.js       # App state, localStorage sync, live search, 3D Three.js hero visual & upvotes
├── README.md      # Comprehensive setup guide, tech details & live URL checklist
└── AUDIT.md       # Quality audit & evaluation verification checklist
```

---

## 🎤 Interview Guide: Codebase Explanation & FAQs

During your GDG AITR interview, you can use these concise explanations to walk through the codebase:

### 1. State & Storage Architecture
- **State variables**: `resources` (array of objects), `currentCategory` (string), `searchQuery` (string), `votedResourceIds` (`Set`), `currentTheme` (string).
- **LocalStorage sync**: Data is read on load using `JSON.parse(localStorage.getItem(...))` inside `try...catch` blocks and written using `JSON.stringify()`.

### 2. Live Search & Filtering Algorithm (`getFilteredResources()`)
- Uses JavaScript's `.filter()` method to check if `resource.category === currentCategory` (or "All").
- Performs case-insensitive text matching against `title`, `description`, `category`, and tags array via `.includes()`.

### 3. Upvoting Logic (`handleUpvote()`)
- Maintains a JavaScript `Set` (`votedResourceIds`) to store resource IDs that have already been upvoted in the current session.
- Prevents duplicate upvotes, updates count in memory, triggers a CSS 2D pulse animation, and saves state to `localStorage`.

### 4. Lightweight 3D Hero Element (`initHero3DAnimation()`)
- Uses Three.js `THREE.IcosahedronGeometry` and `THREE.MeshBasicMaterial({ wireframe: true })`.
- Runs on a lightweight `requestAnimationFrame` loop that continuously rotates the mesh and gently tilts based on mouse position.
- Layers behind interactive text (`z-index: 1`, `pointer-events: none`) and respects `@media (prefers-reduced-motion: reduce)`.

---

## ❓ Frequently Asked Interview Questions

**Q1: How did you implement real-time search without page refreshes?**
> *"We attached an `input` event listener to the search field. Whenever the user types, it updates our `searchQuery` variable and triggers `render()`, which filters the array in memory and re-populates the DOM."*

**Q2: How is data persisted when the browser closes?**
> *"We use browser `localStorage`. When the app loads, `loadResources()` checks for saved JSON data in `localStorage`. Any user additions or upvotes trigger `saveResources()`, which converts the array to a string using `JSON.stringify()`."*

**Q3: How does dark mode work in your CSS?**
> *"We defined CSS custom properties under `:root` for light mode and overrode them under `[data-theme="dark"]`. Toggling the theme changes the `data-theme` attribute on `document.documentElement`, instantly updating colors across the site with a smooth 0.3s CSS transition."*

---

## 📜 Evaluation Statement

This project was developed for the **GDG AITR** student evaluation. All code is original, beginner-friendly, and written in clean Vanilla HTML5/CSS3/JavaScript without heavy external frameworks to demonstrate strong fundamental web development concepts.
