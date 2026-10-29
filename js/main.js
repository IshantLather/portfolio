/**
 * ==============================================================================
 * MAIN APPLICATION CONTROLLER
 * ==============================================================================
 * Editorial rendering engine, rotating text transitions,
 * scroll reveals, GitHub integration, and smooth navigation.
 * ==============================================================================
 */

import { portfolioConfig } from './config.js';
import { icons, getIcon } from './icons.js';
import { initTheme } from './theme.js';
import { initCustomCursor } from './cursor.js';
import { initGithubSection } from './github.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme & Custom Cursor
  initTheme();
  initCustomCursor();

  // 2. Render Core Sections
  renderHero();
  renderAbout();
  renderInterests();
  renderProjects();
  initGithubSection();
  renderTimeline();
  renderContact();
  renderFooter();

  // 3. Initialize Interactive Systems
  initScrollReveals();
  initNavigation();
  initMobileMenu();
  initScrollTop();
});

/* ============================================================================
   1. HERO SECTION
   ============================================================================ */
function renderHero() {
  const { personal } = portfolioConfig;

  // Title & Subtitle
  const titleEl = document.getElementById('hero-title');
  if (titleEl) titleEl.textContent = personal.greeting;

  const subtitleEl = document.getElementById('hero-subtitle');
  if (subtitleEl) subtitleEl.textContent = personal.subtitle;

  const introEl = document.getElementById('hero-intro');
  if (introEl) introEl.textContent = personal.shortIntro;

  // Rotating Text Engine
  initRotatingText(personal.rotatingRoles, 'rotating-text-target');

  // Profile Visual Frame
  const frameEl = document.getElementById('hero-image-frame');
  if (frameEl) {
    if (personal.profilePhoto) {
      frameEl.innerHTML = `
        <img 
          src="${escapeHtml(personal.profilePhoto)}" 
          alt="${escapeHtml(personal.name)}" 
          class="hero-profile-img" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="hero-artistic-avatar" style="display: none;">
          <div class="avatar-monogram">IL</div>
          <div class="avatar-caption">B.Tech AI & ML</div>
        </div>
      `;
    } else {
      frameEl.innerHTML = `
        <div class="hero-artistic-avatar">
          <div class="avatar-monogram">IL</div>
          <div class="avatar-caption">B.Tech AI & ML</div>
        </div>
      `;
    }
  }
}

function initRotatingText(words, elementId) {
  const el = document.getElementById(elementId);
  if (!el || !words || words.length === 0) return;

  let currentIndex = 0;
  el.textContent = words[0];

  setInterval(() => {
    // Fade out & slight upward shift
    el.style.opacity = '0';
    el.style.transform = 'translateY(-6px)';

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % words.length;
      el.textContent = words[currentIndex];
      // Reset position slightly lower and fade in
      el.style.transform = 'translateY(6px)';
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 280);
  }, 2600);
}

/* ============================================================================
   2. ABOUT ME SECTION
   ============================================================================ */
function renderAbout() {
  const { about, personal } = portfolioConfig;

  // Narrative text
  const narrativeEl = document.getElementById('about-narrative');
  if (narrativeEl) {
    narrativeEl.innerHTML = `
      <p class="about-lead-paragraph">${escapeHtml(about.paragraphs[0])}</p>
      ${about.paragraphs.slice(1).map(p => `<p class="about-body-text">${escapeHtml(p)}</p>`).join('')}
      <div class="about-pull-quote">
        <p class="about-quote-text">"${escapeHtml(personal.quote)}"</p>
        <span class="about-quote-author">// Intent & Philosophy</span>
      </div>
    `;
  }

  // Right column specs card
  const specsContainer = document.getElementById('about-specs-container');
  if (specsContainer) {
    specsContainer.innerHTML = `
      <div class="specs-card-header">
        <span class="specs-card-title">Profile & Program</span>
        <span class="pill pill-sage">Verified Study</span>
      </div>
      <div class="specs-entries-list">
        ${about.highlights.map(item => `
          <div class="spec-entry-item">
            <span class="spec-entry-label">${escapeHtml(item.label)}</span>
            <span class="spec-entry-val">${escapeHtml(item.value)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/* ============================================================================
   3. WHAT I'M INTO (AESTHETIC CARDS)
   ============================================================================ */
function renderInterests() {
  const container = document.getElementById('interests-grid');
  if (!container) return;

  const { interests } = portfolioConfig;

  container.innerHTML = interests.map(item => {
    const isSage = item.accent === 'sage';
    const iconClass = isSage ? 'icon-sage' : 'icon-lavender';
    const pillClass = isSage ? 'pill-sage' : 'pill-lavender';

    return `
      <div class="interest-card reveal">
        <div>
          <div class="interest-card-top">
            <div class="interest-icon-circle ${iconClass}">
              ${getIcon(item.icon)}
            </div>
            <span class="pill ${pillClass}">${escapeHtml(item.badge)}</span>
          </div>
          <h3 class="interest-title">${escapeHtml(item.title)}</h3>
          <p class="interest-desc">${escapeHtml(item.description)}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================================
   4. SELECTED WORK (ASYMMETRICAL GALLERY)
   ============================================================================ */
function renderProjects() {
  const container = document.getElementById('projects-masonry');
  if (!container) return;

  const { projects } = portfolioConfig;

  container.innerHTML = projects.map(p => {
    const spanClass = p.featured ? 'project-card-featured' : 'project-card-regular';
    const pillClass = p.accent === 'sage' ? 'pill-sage' : 'pill-lavender';

    const demoBtn = p.demoUrl ? `
      <a href="${escapeHtml(p.demoUrl)}" class="btn btn-secondary btn-sm" aria-label="Live Demo for ${escapeHtml(p.title)}">
        <span>Live Preview</span>
        ${icons.arrowUpRight}
      </a>
    ` : '';

    return `
      <div class="project-card ${spanClass} reveal">
        <div class="project-visual-header">
          <div class="project-abstract-graphic">
            ${getIcon('sparkles')}
            <span style="font-family: var(--font-mono); font-size: 0.82rem; letter-spacing: 0.05em; text-transform: uppercase;">
              ${escapeHtml(p.category)}
            </span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-meta-row">
            <span class="project-category">${escapeHtml(p.category)}</span>
            <span class="pill ${pillClass}">${escapeHtml(p.status)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-description">${escapeHtml(p.description)}</p>
          <div class="project-tags-list">
            ${p.tags.map(tag => `<span class="pill pill-neutral">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div class="project-footer-actions">
            <a href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="GitHub Repository for ${escapeHtml(p.title)}">
              ${icons.github}
              <span>Code / Notes</span>
            </a>
            ${demoBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================================
   5. MY LEARNING JOURNEY (TIMELINE)
   ============================================================================ */
function renderTimeline() {
  const container = document.getElementById('timeline-entries-container');
  if (!container) return;

  const { timeline } = portfolioConfig;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-entry reveal">
      <div class="timeline-bullet"></div>
      <div class="timeline-card">
        <div class="timeline-entry-header">
          <span class="timeline-period">${escapeHtml(item.period)}</span>
          <span class="pill pill-neutral">${escapeHtml(item.status)}</span>
        </div>
        <h4 class="timeline-entry-title">${escapeHtml(item.title)}</h4>
        <div class="timeline-entry-institution">${escapeHtml(item.institution)}</div>
        <p class="timeline-entry-desc">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join('');
}

/* ============================================================================
   6. CONTACT SECTION
   ============================================================================ */
function renderContact() {
  const { personal } = portfolioConfig;

  const linksContainer = document.getElementById('contact-links-row');
  if (linksContainer) {
    linksContainer.innerHTML = `
      <a href="mailto:${encodeURIComponent(personal.email)}?subject=Inquiry%20via%20Portfolio" class="btn btn-primary">
        ${icons.mail}
        <span>Email Me Directly</span>
      </a>
      <button type="button" class="btn btn-secondary" id="copy-email-btn">
        ${icons.copy}
        <span>Copy Email</span>
      </button>
      <a href="${escapeHtml(personal.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        ${icons.linkedin}
        <span>LinkedIn</span>
        ${icons.arrowUpRight}
      </a>
      <a href="${escapeHtml(personal.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        ${icons.github}
        <span>GitHub</span>
        ${icons.arrowUpRight}
      </a>
    `;

    // Attach listener for copy button
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyToClipboard(personal.email, 'Email copied to clipboard!');
      });
    }
  }
}

/* ============================================================================
   7. FOOTER
   ============================================================================ */
function renderFooter() {
  const { personal } = portfolioConfig;
  const year = new Date().getFullYear();

  const rightsEl = document.getElementById('footer-rights');
  if (rightsEl) {
    rightsEl.textContent = `© ${year} ${personal.name}. Crafted with care and purpose.`;
  }

  const socialsEl = document.getElementById('footer-socials');
  if (socialsEl) {
    socialsEl.innerHTML = `
      <a href="${escapeHtml(personal.githubUrl)}" target="_blank" rel="noopener noreferrer" class="footer-social-link">GitHub</a>
      <a href="${escapeHtml(personal.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="footer-social-link">LinkedIn</a>
      <a href="mailto:${encodeURIComponent(personal.email)}" class="footer-social-link">Email</a>
    `;
  }
}

/* ============================================================================
   VIEWPORT SCROLL REVEAL ANIMATIONS
   ============================================================================ */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================================
   NAVIGATION SCROLL SPY
   ============================================================================ */
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    root: null,
    threshold: 0.3
  });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================================
   MOBILE MENU DRAWER
   ============================================================================ */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open-btn');
  const closeBtn = document.getElementById('mobile-menu-close-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function open() {
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  mobileLinks.forEach(l => l.addEventListener('click', close));
}

/* ============================================================================
   SCROLL TO TOP BUTTON
   ============================================================================ */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  btn.innerHTML = icons.arrowUp;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  });
}

/* ============================================================================
   CLIPBOARD UTILITY & TOAST
   ============================================================================ */
function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(message)).catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch {
    showToast('Please copy: ' + text);
  }
  document.body.removeChild(ta);
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${icons.check}<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
