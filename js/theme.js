/**
 * ==============================================================================
 * THEME CONTROLLER
 * ==============================================================================
 * Dark / Light mode switching with localStorage persistence & system preference
 * ==============================================================================
 */

import { icons } from './icons.js';

const STORAGE_KEY = 'portfolio_theme';

export function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to cyber dark
  applyTheme(initialTheme);

  // Set up listeners on theme toggle buttons
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Listen to system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);

  // Update theme meta color for mobile browser tab headers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#050811' : '#f8fafc');
  }

  // Update toggle button icons
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

