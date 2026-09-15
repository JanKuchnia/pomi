(function () {
  // Mobile navigation drawer logic
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  const form = document.getElementById('inquiry-form');
  const successMsg = document.getElementById('form-success-msg');

  function openMenu() {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Zamknij menu nawigacji');
    mobileMenu.classList.remove('hidden');
    mobileMenu.setAttribute('aria-hidden', 'false');

    if (menuBackdrop) {
      menuBackdrop.classList.remove('hidden');
      menuBackdrop.setAttribute('aria-hidden', 'false');
    }

    if (menuOpenIcon) menuOpenIcon.classList.add('hidden');
    if (menuCloseIcon) menuCloseIcon.classList.remove('hidden');

    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Otwórz menu nawigacji');
    mobileMenu.classList.add('hidden');
    mobileMenu.setAttribute('aria-hidden', 'true');

    if (menuBackdrop) {
      menuBackdrop.classList.add('hidden');
      menuBackdrop.setAttribute('aria-hidden', 'true');
    }

    if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
    if (menuCloseIcon) menuCloseIcon.classList.add('hidden');

    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', toggleMenu);

    if (menuBackdrop) {
      menuBackdrop.addEventListener('click', closeMenu);
    }

    // Close on navigation link click
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuBtn.focus();
      }
    });

    // Reset on viewport resize past lg breakpoint (1024px)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  }

  // Handle Inquiry Form Submission
  if (form && successMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.classList.remove('hidden');
      form.reset();
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
})();
