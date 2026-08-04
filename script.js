// =========================================================
// VISIONARIOS STORE — script.js
// Manejo estricto de menú móvil y eventos de UI
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const primaryNav = document.getElementById('primaryNav');

  if (burgerBtn && primaryNav) {
    const closeMenu = () => {
      primaryNav.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    };

    burgerBtn.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en cualquier enlace interno
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Ajustar en resize de pantalla
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 860) closeMenu();
    });
  }
});