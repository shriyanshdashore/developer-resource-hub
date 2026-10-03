# Developer Resource Hub 🚀

> **Built for GDG AITR Evaluation**  
> A modern, clean, responsive, and accessible web application for discovering, filtering, searching, and managing developer tools and learning resources.

---

## 🔗 Live Demo & Repository Setup

- **Live Deployed App**: [https://shriyanshdashore.github.io/developer-resource-hub/](https://shriyanshdashore.github.io/developer-resource-hub/)
- **GitHub Repository**: [https://github.com/shriyanshdashore/developer-resource-hub](https://github.com/shriyanshdashore/developer-resource-hub)

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
