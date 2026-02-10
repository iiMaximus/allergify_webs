// ============================================
// ALLERGIFY – Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initMobileMenu();
  initSmoothScroll();
});

// ---- Navbar scroll effect ----
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ---- Intersection Observer for scroll animations ----
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // Group elements by parent section to reset delay per-section
  const sectionMap = new Map();
  elements.forEach((el) => {
    const section = el.closest('section') || el.parentElement;
    if (!sectionMap.has(section)) sectionMap.set(section, []);
    sectionMap.get(section).push(el);
  });

  sectionMap.forEach((sectionEls) => {
    sectionEls.forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// ---- Mobile hamburger menu ----
function initMobileMenu() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
    document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}
