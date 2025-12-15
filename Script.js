  document.addEventListener('DOMContentLoaded', () => {
      const toggles = document.querySelectorAll('.submenu-toggle');
      toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          toggle.classList.toggle('active');
        });
      });
    });