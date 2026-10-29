/**
 * ==============================================================================
 * CUSTOM EDITORIAL CURSOR (DESKTOP ONLY)
 * ==============================================================================
 * Delicate custom dot & lagging ring with magnetic hover states.
 * Fully disabled on touch devices.
 * ==============================================================================
 */

export function initCustomCursor() {
  // Only initialize on desktop devices with fine pointer
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  const ring = document.createElement('div');
  ring.className = 'custom-cursor-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Smooth lerp loop for outer ring
  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Hover detection for interactive targets
  const interactiveSelector = 'a, button, input, textarea, .project-card, .interest-card, .repo-card, .timeline-card';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

