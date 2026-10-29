/**
 * ==============================================================================
 * TERMINAL EFFECTS & TYPEWRITER ENGINE
 * ==============================================================================
 */

export function initTypewriter(words, targetElementId, speed = 80, delay = 1800) {
  const element = document.getElementById(targetElementId);
  if (!element || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimeout = null;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = speed;

    if (isDeleting) {
      typeSpeed = speed / 2;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Word completed, wait before deleting
      typeSpeed = delay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Deletion completed, move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    typingTimeout = setTimeout(type, typeSpeed);
  }

  type();

  return () => {
    if (typingTimeout) clearTimeout(typingTimeout);
  };
}

