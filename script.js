/* ==========================================================================
   DEVELOPER RESOURCE HUB - JAVASCRIPT
   GDG AITR Evaluation Project
   ========================================================================== */

/**
 * INTERVIEW CONCEPTS COVERED:
 * 1. State Management with Browser localStorage
 * 2. DOM Manipulation (querySelector, element creation, class toggles)
 * 3. Event Listeners (input, click, submit, keydown, mousemove)
 * 4. Array Operations & Higher Order Functions (filter, map, includes, find)
 * 5. Dynamic Search & Category Filtering
 * 6. Form Handling & Inputs Validation
 * 7. Theme Switching with CSS Custom Properties
 * 8. Lightweight 3D Hero Animation with Three.js (Decorative)
 */

// --------------------------------------------------------------------------
// 1. INITIAL SAMPLE DATA (22 Real-World Developer Resources)
// --------------------------------------------------------------------------
const INITIAL_RESOURCES = [
  // --- WEB DEVELOPMENT ---
  {
    id: "res-1",
    title: "MDN Web Docs",
    category: "Web Development",
    url: "https://developer.mozilla.org",
    description: "The complete documentation and tutorial library for HTML, CSS, and modern JavaScript standards.",
    tags: ["docs", "html", "css", "javascript"],
    upvotes: 84,
    createdAt: 1700000000001
  },
  {
    id: "res-2",
    title: "CSS-Tricks",
    category: "Web Development",
    url: "https://css-tricks.com",
    description: "Daily articles, guides, and tips about CSS layouts, Flexbox, Grid, and frontend web engineering.",
    tags: ["css", "layout", "flexbox", "grid"],
    upvotes: 45,
    createdAt: 1700000000002
  },
  {
    id: "res-3",
    title: "React Documentation",
    category: "Web Development",
    url: "https://react.dev",
    description: "The official interactive documentation for building user interfaces with components and hooks.",
    tags: ["react", "javascript", "ui", "components"],
    upvotes: 92,
    createdAt: 1700000000003
  },
  {
    id: "res-4",
    title: "Tailwind CSS",
    category: "Web Development",
    url: "https://tailwindcss.com",
    description: "A utility-first CSS framework packed with classes that can be composed to build any design.",
    tags: ["css", "tailwind", "styling", "framework"],
    upvotes: 78,
    createdAt: 1700000000004
  },
  {
    id: "res-5",
    title: "Frontend Practice",
    category: "Web Development",
    url: "https://www.frontendpractice.com",
    description: "Recreate real-world websites to practice and level up your HTML & CSS engineering skills.",
    tags: ["practice", "projects", "frontend"],
    upvotes: 39,
    createdAt: 1700000000005
  },
  {
    id: "res-6",
    title: "freeCodeCamp",
    category: "Web Development",
    url: "https://www.freecodecamp.org",
    description: "Free interactive learning platform with full certifications in web development & JavaScript.",
    tags: ["learning", "free", "certificates", "web"],
    upvotes: 67,
    createdAt: 1700000000006
  },

  // --- APP DEVELOPMENT ---
  {
    id: "res-7",
    title: "Flutter Documentation",
    category: "App Development",
    url: "https://docs.flutter.dev",
    description: "Official guides and API references for building cross-platform multi-device apps with Dart.",
    tags: ["flutter", "dart", "mobile", "cross-platform"],
    upvotes: 73,
    createdAt: 1700000000007
  },
  {
    id: "res-8",
    title: "Android Developers",
    category: "App Development",
    url: "https://developer.android.com",
    description: "Official guidelines, Jetpack Compose tutorials, and API specs for native Android app development.",
    tags: ["android", "kotlin", "compose", "mobile"],
    upvotes: 61,
    createdAt: 1700000000008
  },
  {
    id: "res-9",
    title: "Apple Developer (Swift)",
    category: "App Development",
    url: "https://developer.apple.com/swift/",
    description: "Official Apple resources for building iOS, iPadOS, and macOS native apps using Swift & SwiftUI.",
    tags: ["swift", "ios", "swiftui", "apple"],
    upvotes: 54,
    createdAt: 1700000000009
  },
  {
    id: "res-10",
    title: "React Native",
    category: "App Development",
    url: "https://reactnative.dev",
    description: "Create native Android and iOS mobile applications using React component architecture.",
    tags: ["react-native", "mobile", "javascript", "ios"],
    upvotes: 59,
    createdAt: 1700000000010
  },
  {
    id: "res-11",
    title: "Expo",
    category: "App Development",
    url: "https://expo.dev",
    description: "Open-source ecosystem for building universal native apps for Android, iOS, and web with React.",
    tags: ["expo", "react-native", "tools", "mobile"],
    upvotes: 43,
    createdAt: 1700000000011
  },

  // --- AI / ML ---
  {
    id: "res-12",
    title: "Google AI Studio",
    category: "AI/ML",
    url: "https://aistudio.google.com",
    description: "Fast web-based prototyping environment for experimenting with Gemini multimodal AI models.",
    tags: ["ai", "gemini", "prompts", "llm"],
    upvotes: 110,
    createdAt: 1700000000012
  },
  {
    id: "res-13",
    title: "Hugging Face",
    category: "AI/ML",
    url: "https://huggingface.co",
    description: "The AI community platform for discovering, building, testing, and sharing machine learning models.",
    tags: ["ai", "models", "transformers", "open-source"],
    upvotes: 95,
    createdAt: 1700000000013
  },
  {
    id: "res-14",
    title: "Kaggle",
    category: "AI/ML",
    url: "https://www.kaggle.com",
    description: "Data science and machine learning community offering datasets, notebooks, and competitions.",
    tags: ["ml", "data-science", "python", "datasets"],
    upvotes: 76,
    createdAt: 1700000000014
  },
  {
    id: "res-15",
    title: "TensorFlow",
    category: "AI/ML",
    url: "https://www.tensorflow.org",
    description: "An end-to-end open-source platform for machine learning, deep learning, and neural networks.",
    tags: ["tensorflow", "deep-learning", "python", "ml"],
    upvotes: 68,
    createdAt: 1700000000015
  },
  {
    id: "res-16",
    title: "PyTorch",
    category: "AI/ML",
    url: "https://pytorch.org",
    description: "Open-source machine learning framework that accelerates deep learning research and deployment.",
    tags: ["pytorch", "deep-learning", "ai", "python"],
    upvotes: 88,
    createdAt: 1700000000016
  },

  // --- DEVELOPER TOOLS ---
  {
    id: "res-17",
    title: "GitHub",
    category: "Tools",
    url: "https://github.com",
    description: "The world's leading developer platform for version control, issue tracking, and open-source collaboration.",
    tags: ["git", "vcs", "open-source", "hosting"],
    upvotes: 125,
    createdAt: 1700000000017
  },
  {
    id: "res-18",
    title: "Can I Use",
    category: "Tools",
    url: "https://caniuse.com",
    description: "Up-to-date browser support tables for modern HTML5, CSS3, and Web API features.",
    tags: ["compatibility", "browser", "css", "html5"],
    upvotes: 49,
    createdAt: 1700000000018
  },
  {
    id: "res-19",
    title: "Postman",
    category: "Tools",
    url: "https://www.postman.com",
    description: "API platform for building, testing, documenting, and experimenting with REST & HTTP APIs.",
    tags: ["api", "testing", "rest", "devtools"],
    upvotes: 58,
    createdAt: 1700000000019
  },
  {
    id: "res-20",
    title: "Vite",
    category: "Tools",
    url: "https://vitejs.dev",
    description: "Next-generation frontend tooling offering lightning-fast dev server and pre-configured builds.",
    tags: ["vite", "bundler", "build-tool", "frontend"],
    upvotes: 82,
    createdAt: 1700000000020
  },
  {
    id: "res-21",
    title: "Figma",
    category: "Tools",
    url: "https://www.figma.com",
    description: "Collaborative web-based interface design tool for creating UI wireframes and developer handoffs.",
    tags: ["design", "ui", "ux", "wireframe"],
    upvotes: 71,
    createdAt: 1700000000021
  },
  {
    id: "res-22",
    title: "DevDocs.io",
    category: "Tools",
    url: "https://devdocs.io",
    description: "Combines multiple developer documentation sets in a fast, clean, offline-capable search interface.",
    tags: ["docs", "offline", "api", "reference"],
    upvotes: 41,
    createdAt: 1700000000022
  }
];

// LocalStorage Keys
const STORAGE_KEYS = {
  RESOURCES: "dev_hub_resources_v2",
  THEME: "dev_hub_theme",
  VOTED_IDS: "dev_hub_voted_ids"
};

// --------------------------------------------------------------------------
// 2. APPLICATION STATE
// --------------------------------------------------------------------------
let resources = [];
let currentCategory = "All";
let searchQuery = "";
let votedResourceIds = new Set();
let currentTheme = "light";

// --------------------------------------------------------------------------
// 3. DOM ELEMENTS
// --------------------------------------------------------------------------
const DOM = {
  // Theme
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  themeLabel: document.getElementById("themeLabel"),
  
  // Search & Filter
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  resourceCount: document.getElementById("resourceCount"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),

  // Grid & Empty State
  resourceGrid: document.getElementById("resourceGrid"),
  emptyState: document.getElementById("emptyState"),
  emptyStateResetBtn: document.getElementById("emptyStateResetBtn"),

  // Modal & Form
  openModalBtn: document.getElementById("openModalBtn"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  cancelModalBtn: document.getElementById("cancelModalBtn"),
  resourceModal: document.getElementById("resourceModal"),
  addResourceForm: document.getElementById("addResourceForm"),
  formErrorMessage: document.getElementById("formErrorMessage"),

  // Form Inputs
  resourceTitle: document.getElementById("resourceTitle"),
  resourceCategory: document.getElementById("resourceCategory"),
  resourceUrl: document.getElementById("resourceUrl"),
  resourceDescription: document.getElementById("resourceDescription"),
  resourceTags: document.getElementById("resourceTags"),

  // Toast & 3D Canvas
  toast: document.getElementById("toast"),
  hero3DCanvas: document.getElementById("hero3DCanvas")
};

// --------------------------------------------------------------------------
// 4. INITIALIZATION & LOCALSTORAGE MANAGEMENT
// --------------------------------------------------------------------------
function initApp() {
  loadTheme();
  loadVotedIds();
  loadResources();
  setupEventListeners();
  render();
  initHero3DAnimation();
}

function loadResources() {
  try {
    const storedData = localStorage.getItem(STORAGE_KEYS.RESOURCES);
    if (storedData) {
      const parsed = JSON.parse(storedData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        resources = parsed;
        return;
      }
    }
  } catch (error) {
    console.error("Error reading resources from localStorage:", error);
  }
  
  resources = [...INITIAL_RESOURCES];
  saveResources();
}

function saveResources() {
  try {
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
  } catch (error) {
    console.error("Error saving resources to localStorage:", error);
    showToast("Failed to save data locally.");
  }
}

function loadVotedIds() {
  try {
    const storedIds = localStorage.getItem(STORAGE_KEYS.VOTED_IDS);
    if (storedIds) {
      const parsed = JSON.parse(storedIds);
      votedResourceIds = new Set(parsed);
    }
  } catch (error) {
    console.error("Error loading voted IDs:", error);
    votedResourceIds = new Set();
  }
}

function saveVotedIds() {
  try {
    localStorage.setItem(STORAGE_KEYS.VOTED_IDS, JSON.stringify(Array.from(votedResourceIds)));
  } catch (error) {
    console.error("Error saving voted IDs:", error);
  }
}

// --------------------------------------------------------------------------
// 5. THEME SWITCHING (DARK / LIGHT MODE)
// --------------------------------------------------------------------------
function loadTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }
  applyTheme(currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, currentTheme);
  } catch (error) {
    console.error("Failed to save theme setting:", error);
  }
  
  // Update 3D wireframe color dynamically on theme change
  if (window.update3DThemeColor) {
    window.update3DThemeColor(currentTheme);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    DOM.themeIcon.textContent = "☀️";
    DOM.themeLabel.textContent = "Switch to Light Mode";
  } else {
    DOM.themeIcon.textContent = "🌙";
    DOM.themeLabel.textContent = "Switch to Dark Mode";
  }
}

// --------------------------------------------------------------------------
// 6. LIGHTWEIGHT 3D HERO VISUAL (THREE.JS)
// --------------------------------------------------------------------------
/**
 * Renders a small, interactive 3D tech wireframe sphere in the hero header.
 * Decorative only; layered behind text/buttons and respects prefers-reduced-motion.
 */
function initHero3DAnimation() {
  // Check browser prefers-reduced-motion setting
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: reduce)").matches) {
    return;
  }

  // Check if Three.js is loaded
  if (typeof THREE === "undefined" || !DOM.hero3DCanvas) {
    return;
  }

  try {
    const canvas = DOM.hero3DCanvas;
    const width = 120;
    const height = 120;

    // 1. Three.js Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Simple Wireframe Tech Icosahedron Geometry
    const geometry = new THREE.IcosahedronGeometry(1.3, 1);
    const materialColor = currentTheme === "dark" ? 0x3b82f6 : 0x4285f4;

    const material = new THREE.MeshBasicMaterial({
      color: materialColor,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    const techSphere = new THREE.Mesh(geometry, material);
    scene.add(techSphere);

    // Dynamic color updater function exposed for theme changes
    window.update3DThemeColor = function(theme) {
      material.color.setHex(theme === "dark" ? 0x3b82f6 : 0x4285f4);
    };

    // 3. Mouse influence targets
    let targetRotationX = 0;
    let targetRotationY = 0;

    const headerElem = document.querySelector(".header");
    if (headerElem) {
      headerElem.addEventListener("mousemove", (e) => {
        const rect = headerElem.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = normX * 0.8;
        targetRotationX = normY * 0.8;
      });
    }

    // 4. Render loop
    function animate() {
      requestAnimationFrame(animate);

      // Continuous slow 3D rotation
      techSphere.rotation.y += 0.005;
      techSphere.rotation.x += 0.003;

      // Smooth mouse interaction interpolation
      techSphere.rotation.y += (targetRotationY - techSphere.rotation.y) * 0.05;
      techSphere.rotation.x += (targetRotationX - techSphere.rotation.x) * 0.05;

      renderer.render(scene, camera);
    }

    animate();
  } catch (err) {
    console.warn("3D Canvas fallback: ", err);
  }
}

// --------------------------------------------------------------------------
// 7. RENDER & FILTERING LOGIC
// --------------------------------------------------------------------------
function getFilteredResources() {
  const query = searchQuery.trim().toLowerCase();

  return resources.filter(resource => {
    const matchesCategory = (currentCategory === "All") || (resource.category === currentCategory);

    if (!query) {
      return matchesCategory;
    }

    const matchesTitle = resource.title.toLowerCase().includes(query);
    const matchesDesc = resource.description.toLowerCase().includes(query);
    const matchesCat = resource.category.toLowerCase().includes(query);
    const matchesTags = Array.isArray(resource.tags) && resource.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && (matchesTitle || matchesDesc || matchesCat || matchesTags);
  });
}

function render() {
  const filtered = getFilteredResources();

  updateResourceCounter(filtered.length);

  if (currentCategory !== "All" || searchQuery.trim() !== "") {
    DOM.resetFiltersBtn.classList.remove("hidden");
  } else {
    DOM.resetFiltersBtn.classList.add("hidden");
  }

  if (filtered.length === 0) {
    DOM.resourceGrid.innerHTML = "";
    DOM.emptyState.classList.remove("hidden");
  } else {
    DOM.emptyState.classList.add("hidden");
    renderCards(filtered);
  }
}

function updateResourceCounter(count) {
  const total = resources.length;
  if (currentCategory === "All" && !searchQuery.trim()) {
    DOM.resourceCount.textContent = `Showing all ${total} resources`;
  } else {
    DOM.resourceCount.textContent = `Showing ${count} of ${total} resources`;
  }
}

function renderCards(items) {
  DOM.resourceGrid.innerHTML = items.map((resource, index) => createCardHTML(resource, index)).join("");
}

function createCardHTML(resource, index) {
  const hasVoted = votedResourceIds.has(resource.id);
  const badgeClass = getBadgeClass(resource.category);
  const animationDelay = Math.min(index * 0.03, 0.3).toFixed(2);

  const tagsHTML = Array.isArray(resource.tags) && resource.tags.length > 0
    ? resource.tags.map(tag => `<span class="tag-item">#${escapeHTML(tag)}</span>`).join("")
    : "";

  return `
    <article 
      class="card" 
      data-id="${resource.id}"
      style="animation-delay: ${animationDelay}s"
    >
      <div class="card-top">
        <span class="badge ${badgeClass}">${escapeHTML(resource.category)}</span>
        <button 
          class="upvote-btn ${hasVoted ? 'voted' : ''}" 
          onclick="handleUpvote('${resource.id}', this)"
          aria-label="${hasVoted ? 'Already upvoted' : 'Upvote resource'}"
          title="${hasVoted ? 'You upvoted this resource' : 'Click to upvote'}"
        >
          <span class="upvote-icon" aria-hidden="true">${hasVoted ? '▲' : '△'}</span>
          <span class="upvote-count">${resource.upvotes || 0}</span>
        </button>
      </div>

      <h3 class="card-title">${escapeHTML(resource.title)}</h3>
      <p class="card-description">${escapeHTML(resource.description)}</p>

      ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ''}

      <div class="card-footer">
        <a 
          href="${escapeHTML(resource.url)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="card-link-btn"
          aria-label="Visit ${escapeHTML(resource.title)} website (opens in a new tab)"
        >
          Visit Resource ↗
        </a>
      </div>
    </article>
  `;
}

function getBadgeClass(category) {
  switch (category) {
    case "Web Development": return "badge-web";
    case "App Development": return "badge-app";
    case "AI/ML": return "badge-ai";
    case "Tools": return "badge-tools";
    default: return "badge-category";
  }
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --------------------------------------------------------------------------
// 8. UPVOTE FEATURE WITH PULSE ANIMATION
// --------------------------------------------------------------------------
function handleUpvote(resourceId, buttonElem) {
  if (votedResourceIds.has(resourceId)) {
    showToast("You have already upvoted this resource!");
    return;
  }

  const targetResource = resources.find(res => res.id === resourceId);
  if (!targetResource) return;

  targetResource.upvotes = (targetResource.upvotes || 0) + 1;
  votedResourceIds.add(resourceId);

  if (buttonElem) {
    buttonElem.classList.add("pulse-anim");
  }

  saveResources();
  saveVotedIds();

  setTimeout(() => {
    render();
    showToast(`Upvoted "${targetResource.title}"! 👍`);
  }, 120);
}

// --------------------------------------------------------------------------
// 9. ADD RESOURCE FORM & MODAL HANDLING
// --------------------------------------------------------------------------
function openModal() {
  DOM.resourceModal.classList.remove("hidden");
  DOM.resourceTitle.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  DOM.resourceModal.classList.add("hidden");
  DOM.addResourceForm.reset();
  hideFormError();
  document.body.style.overflow = "";
}

function showFormError(message) {
  DOM.formErrorMessage.textContent = message;
  DOM.formErrorMessage.classList.remove("hidden");
}

function hideFormError() {
  DOM.formErrorMessage.textContent = "";
  DOM.formErrorMessage.classList.add("hidden");
}

function handleAddResource(event) {
  event.preventDefault();

  const title = DOM.resourceTitle.value.trim();
  const category = DOM.resourceCategory.value;
  let url = DOM.resourceUrl.value.trim();
  const description = DOM.resourceDescription.value.trim();
  const tagsInput = DOM.resourceTags.value.trim();

  if (!title || !category || !url || !description) {
    showFormError("Please fill out all required fields (*).");
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const tags = tagsInput
    ? tagsInput.split(",").map(tag => tag.trim().toLowerCase()).filter(tag => tag.length > 0)
    : [];

  const newResource = {
    id: "res-" + Date.now(),
    title: title,
    category: category,
    url: url,
    description: description,
    tags: tags,
    upvotes: 1,
    createdAt: Date.now()
  };

  resources.unshift(newResource);
  votedResourceIds.add(newResource.id);

  saveResources();
  saveVotedIds();

  closeModal();
  render();
  showToast(`"${title}" added successfully! 🎉`);
}

// --------------------------------------------------------------------------
// 10. EVENT LISTENERS
// --------------------------------------------------------------------------
function setupEventListeners() {
  DOM.themeToggle.addEventListener("click", toggleTheme);

  DOM.searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      DOM.clearSearchBtn.classList.remove("hidden");
    } else {
      DOM.clearSearchBtn.classList.add("hidden");
    }
    render();
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    searchQuery = "";
    DOM.clearSearchBtn.classList.add("hidden");
    DOM.searchInput.focus();
    render();
  });

  DOM.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      currentCategory = btn.getAttribute("data-category");
      render();
    });
  });

  const resetFilters = () => {
    currentCategory = "All";
    searchQuery = "";
    DOM.searchInput.value = "";
    DOM.clearSearchBtn.classList.add("hidden");

    DOM.filterBtns.forEach(b => {
      const isAll = b.getAttribute("data-category") === "All";
      b.classList.toggle("active", isAll);
      b.setAttribute("aria-selected", isAll ? "true" : "false");
    });

    render();
  };

  DOM.resetFiltersBtn.addEventListener("click", resetFilters);
  DOM.emptyStateResetBtn.addEventListener("click", resetFilters);

  DOM.openModalBtn.addEventListener("click", openModal);
  DOM.closeModalBtn.addEventListener("click", closeModal);
  DOM.cancelModalBtn.addEventListener("click", closeModal);

  DOM.resourceModal.addEventListener("click", (e) => {
    if (e.target === DOM.resourceModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !DOM.resourceModal.classList.contains("hidden")) {
      closeModal();
    }
  });

  DOM.addResourceForm.addEventListener("submit", handleAddResource);
}

// --------------------------------------------------------------------------
// 11. TOAST NOTIFICATION HELPER
// --------------------------------------------------------------------------
let toastTimeout = null;
function showToast(message) {
  DOM.toast.textContent = message;
  DOM.toast.classList.remove("hidden");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    DOM.toast.classList.add("hidden");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", initApp);
