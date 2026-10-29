/**
 * ==============================================================================
 * GITHUB REST API STREAMER
 * ==============================================================================
 * Fetches public repositories from the official GitHub API with:
 * - Warm skeleton loading states
 * - Error handling & offline fallback
 * - Configurable username from portfolioConfig
 * ==============================================================================
 */

import { portfolioConfig } from './config.js';
import { icons } from './icons.js';

const languageColors = {
  Shell: '#6B8B74',
  Python: '#8E7C9D',
  JavaScript: '#C49756',
  TypeScript: '#4A7C9B',
  HTML: '#D97352',
  CSS: '#7C6F9B',
  'Jupyter Notebook': '#D98246',
  Markdown: '#5C7A82',
  Default: '#6B8B74'
};

export async function initGithubSection() {
  const container = document.getElementById('repos-cards-grid');
  const banner = document.getElementById('github-overview-card');
  if (!container) return;

  const { personal, githubConfig } = portfolioConfig;
  const username = personal.githubUsername;

  // Render overview banner
  renderBanner(banner, username, personal.githubUrl);

  // If placeholder, show curated fallback directly
  if (!username || username === 'YOUR_GITHUB_USERNAME') {
    renderFallback(
      container,
      "// Note: Showing featured project repositories. Set your GitHub username in js/config.js to load your live public repositories!"
    );
    return;
  }

  // Show Skeleton shimmer
  renderSkeletons(container, githubConfig.repoCount || 6);

  try {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=${githubConfig.sort || 'updated'}&per_page=${githubConfig.repoCount || 6}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }

    const repos = await res.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
          <p style="color: var(--text-muted);">No public repositories found for @${escapeHtml(username)}.</p>
        </div>
      `;
      return;
    }

    renderRepos(container, repos);
  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited:', error);
    renderFallback(
      container,
      `// Note: Unable to reach GitHub API (${error.message || 'Rate limit / offline'}). Displaying cached repositories.`
    );
  }
}

function renderBanner(container, username, profileUrl) {
  if (!container) return;

  const isPlaceholder = !username || username === 'YOUR_GITHUB_USERNAME';
  const displayUser = isPlaceholder ? 'Ishant Lather' : `@${username}`;

  container.innerHTML = `
    <div class="github-profile-identity">
      <div class="github-avatar-box">
        ${icons.github}
      </div>
      <div class="github-title-group">
        <h3>${escapeHtml(displayUser)} on GitHub</h3>
        <p>${isPlaceholder ? 'Configurable via js/config.js' : 'Live public repositories stream'}</p>
      </div>
    </div>
    <div>
      <a href="${escapeHtml(profileUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <span>Visit GitHub Profile</span>
        ${icons.arrowUpRight}
      </a>
    </div>
  `;
}

function renderSkeletons(container, count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="repo-skeleton-card">
        <div class="skeleton-gradient"></div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function renderRepos(container, repos) {
  container.innerHTML = repos.map(repo => {
    const lang = repo.language || 'Code';
    const langColor = languageColors[lang] || languageColors.Default;
    const desc = repo.description || 'Exploratory code, laboratory notes, and projects. Click to view repository.';

    return `
      <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-card" aria-label="Repository: ${escapeHtml(repo.name)}">
        <div>
          <div class="repo-top-row">
            <span style="color: var(--sage);">${icons.folder}</span>
            <span style="color: var(--text-muted);">${icons.arrowUpRight}</span>
          </div>
          <h4 class="repo-card-name">${escapeHtml(repo.name)}</h4>
          <p class="repo-card-desc">${escapeHtml(desc)}</p>
        </div>
        <div class="repo-meta-row">
          <span class="repo-lang-indicator">
            <span class="lang-dot" style="background-color: ${langColor};"></span>
            <span>${escapeHtml(lang)}</span>
          </span>
          <span class="repo-stat-counter" title="Stars">
            ${icons.star}
            <span>${repo.stargazers_count || 0}</span>
          </span>
          <span class="repo-stat-counter" title="Forks">
            ${icons.fork}
            <span>${repo.forks_count || 0}</span>
          </span>
        </div>
      </a>
    `;
  }).join('');
}

function renderFallback(container, notice) {
  const { githubConfig, personal } = portfolioConfig;
  const repos = githubConfig.fallbackRepos || [];

  const noticeHtml = `
    <div style="grid-column: 1 / -1; margin-bottom: 0.5rem;">
      <div style="padding: 0.85rem 1.25rem; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
        ${escapeHtml(notice)}
      </div>
    </div>
  `;

  const cardsHtml = repos.map(repo => {
    const lang = repo.language || 'Code';
    const langColor = repo.languageColor || languageColors[lang] || languageColors.Default;
    const repoUrl = repo.html_url.replace('YOUR_GITHUB_USERNAME', personal.githubUsername);

    return `
      <a href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer" class="repo-card" aria-label="Repository: ${escapeHtml(repo.name)}">
        <div>
          <div class="repo-top-row">
            <span style="color: var(--sage);">${icons.folder}</span>
            <span style="color: var(--text-muted);">${icons.arrowUpRight}</span>
          </div>
          <h4 class="repo-card-name">${escapeHtml(repo.name)}</h4>
          <p class="repo-card-desc">${escapeHtml(repo.description)}</p>
        </div>
        <div class="repo-meta-row">
          <span class="repo-lang-indicator">
            <span class="lang-dot" style="background-color: ${langColor};"></span>
            <span>${escapeHtml(lang)}</span>
          </span>
          <span class="repo-stat-counter" title="Stars">
            ${icons.star}
            <span>${repo.stargazers_count || 0}</span>
          </span>
          <span class="repo-stat-counter" title="Forks">
            ${icons.fork}
            <span>${repo.forks_count || 0}</span>
          </span>
        </div>
      </a>
    `;
  }).join('');

  container.innerHTML = noticeHtml + cardsHtml;
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
