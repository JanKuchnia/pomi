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

  // Handle Catalog Shop Filtering & Live Search
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const productCards = document.querySelectorAll('.product-item');
  const searchInput = document.getElementById('catalog-search');
  const countDisplay = document.getElementById('catalog-count');
  const emptyState = document.getElementById('catalog-empty');
  const resetBtn = document.getElementById('catalog-reset-btn');

  if (productCards.length > 0) {
    let currentCategory = 'all';
    let currentQuery = '';

    function filterProducts() {
      let visibleCount = 0;

      productCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const sku = (card.getAttribute('data-sku') || '').toLowerCase();

        const matchesCategory = currentCategory === 'all' || category === currentCategory;
        const matchesQuery = !currentQuery || title.includes(currentQuery) || sku.includes(currentQuery);

        if (matchesCategory && matchesQuery) {
          card.classList.remove('hidden');
          card.classList.add('flex');
          visibleCount++;
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });

      if (countDisplay) {
        countDisplay.textContent = visibleCount.toString();
      }

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('hidden');
        } else {
          emptyState.classList.add('hidden');
        }
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
          b.classList.add('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100');
        btn.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
        btn.setAttribute('aria-selected', 'true');

        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterProducts();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value.trim().toLowerCase();
        filterProducts();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        currentQuery = '';
        currentCategory = 'all';
        filterBtns.forEach((b, idx) => {
          if (idx === 0) {
            b.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
            b.classList.remove('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100');
            b.setAttribute('aria-selected', 'true');
          } else {
            b.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
            b.classList.add('bg-white', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100');
            b.setAttribute('aria-selected', 'false');
          }
        });
        filterProducts();
      });
    }
  }
})();
