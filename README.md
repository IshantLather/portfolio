# Ishant Lather — Personal Portfolio Website

An aesthetic, minimal, art-directed personal portfolio website crafted with an Apple-meets-Pinterest aesthetic: warm cream and off-white tones, deep charcoal typography, muted sage green and soft lavender accents, an elegant dark mode, smooth scroll reveals, and live GitHub API integration.

---

## 🎨 Design Philosophy & Features

- **Apple & Pinterest Inspired Visual Craft**: Warm cream canvas (`#FAF8F5`), crisp white cards, fine borders, soft ambient shadows, and a subtle film grain texture.
- **Editorial Typography**: Elegant serif headings (*Fraunces*) paired with modern geometric sans-serif (*Plus Jakarta Sans*) and monospaced accents (*JetBrains Mono*).
- **Single Central Configuration File (`js/config.js`)**: All personal details, editable placeholders (GitHub, LinkedIn, Email, Profile photo), interests, projects, and timeline milestones are kept in one single configuration file.
- **Hero Composition**: Features the animated rotating text engine cycling through *Cybersecurity*, *AI & Machine Learning*, and *Creative Development*, a portrait composition with fallback monogram artwork, and intuitive action buttons.
- **Aesthetic "What I'm Into" Cards**: Curated cards with delicate pastel badges and custom vector icons for Cybersecurity, Ethical Hacking Labs, AI, Machine Learning, Linux, Networking, and Programming.
- **Asymmetrical Project Gallery ("Selected Work")**: Editorial masonry layout with large cards, category badges, status indicators, and direct GitHub links.
- **Live GitHub REST API Integration**: Streams public repositories live from GitHub with language indicators, star counts, fork counts, skeleton loading states, and offline fallback.
- **Desktop-Only Custom Cursor**: A delicate trailing cursor with smooth interpolation and magnetic hover expansion (disabled automatically on touch screens).
- **Light & Dark Theme Switcher**: Thoughtfully balanced warm cream paper light mode and rich obsidian/espresso dark mode with `localStorage` persistence.
- **One-Click Email Copy**: Instant clipboard copy with an animated toast notification.
- **Zero-Dependency Architecture**: Fast loading, zero build headaches, and 100% compatible with GitHub Pages out of the box.

---

## 🚀 How to Run the Website Locally

You have several easy options to preview and run your portfolio:

### Option 1: Native Node.js Server (Recommended)
Open your terminal in this project folder and run:
```bash
npm start
```
*or directly:*
```bash
node server.js
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Python 3
```bash
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: VS Code Live Server
1. Install the **Live Server** extension in VS Code if you haven't already.
2. Right-click on `index.html` and click **"Open with Live Server"**.

---

## ✏️ Where to Enter Your Real Information

All editable placeholders are located in **[`js/config.js`](file:///Users/lather/GITHUB/js/config.js)**. You do not need to edit any HTML or CSS files!

### 1. Social Links, Username & Email
Open `js/config.js` and locate lines 37–42:

```javascript
// EDITABLE SOCIAL & CONTACT PLACEHOLDERS:
githubUsername: "YOUR_GITHUB_USERNAME", // e.g. "ishantlather"
githubUrl: "https://github.com/YOUR_GITHUB_USERNAME",
linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
email: "your.email@example.com",
```
- Replacing `YOUR_GITHUB_USERNAME` automatically connects the **GitHub Repositories** section to stream your real public repositories.
- Updating `email` updates both the direct `mailto:` button and the "Copy Email" button.

### 2. Adding Your Profile Photo
In `js/config.js`, find:
```javascript
profilePhoto: "assets/profile.jpg",
```
Place your photo inside the `assets/` folder as `profile.jpg` (or `profile.png`). If no photo exists, the portfolio automatically displays an artistic typographic monogram (`IL`).

### 3. Adding or Updating Projects
In `js/config.js`, scroll down to the `projects` array. Simply add a new project object:
```javascript
{
  id: "my-project",
  title: "Project Title",
  category: "Cybersecurity",
  featured: false, // Set to true to make the card wider
  status: "In Progress", // or "Live Project"
  accent: "sage", // "sage" or "lavender"
  description: "Description of your project and what it explores.",
  tags: ["Python", "Linux", "Security"],
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/my-project",
  demoUrl: null, // or "https://your-demo-url.com"
  isPlaceholder: false
}
```

---

## 🌐 Publishing to GitHub & Enabling GitHub Pages

### Step 1: Initialize Git and Commit
In your VS Code terminal, run:
```bash
git init
git add .
git commit -m "feat: aesthetic editorial personal portfolio"
```

### Step 2: Create a Repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Enter a repository name (e.g. `portfolio` or `ishant-portfolio`).
3. Set the repository to **Public**.
4. Leave "Add a README file" unchecked.
5. Click **Create repository**.

### Step 3: Push Your Code
Copy and run the commands provided by GitHub (replace `<YOUR_GITHUB_USERNAME>` and `<REPO_NAME>` with your details):
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On GitHub, navigate to your repository and click the **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** -> **Branch**:
   - Source: Select **Deploy from a branch**.
   - Branch: Select `main`.
   - Folder: Select `/ (root)`.
4. Click **Save**.

Your portfolio will be live in about 1–2 minutes at:
`https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`

---

## 📂 File Architecture

```
├── index.html              # Clean semantic HTML5 document with Google Fonts & SEO
├── package.json            # NPM scripts to start local server
├── server.js               # Zero-dependency local Node.js development server
├── .gitignore              # Ignores logs and OS files
├── README.md               # Setup and customization guide
├── HTML.txt                # Preserved user notes
├── css/
│   ├── variables.css       # Design tokens (warm cream, charcoal, sage, lavender, dark mode)
│   ├── style.css           # Base typography, film grain texture, reveal animations, cursor
│   ├── components.css      # Editorial navbar, hero art card, asymmetric gallery, timeline
│   └── responsive.css      # Mobile slide-in drawer and responsive breakpoints
└── js/
    ├── config.js           # ⚡ SINGLE CENTRAL CONFIGURATION for all personal details & projects
    ├── icons.js            # Editorial vector SVG icons
    ├── theme.js            # Light/Dark mode switcher with localStorage persistence
    ├── cursor.js           # Desktop custom trailing cursor
    ├── github.js           # Official GitHub REST API integration with skeleton loaders
    └── main.js             # Viewport scroll reveals, rotating text engine, component rendering
```
