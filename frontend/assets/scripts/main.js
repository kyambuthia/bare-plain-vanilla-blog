const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname.replace(/\/$/, '');

for (const link of navLinks) {
  const url = new URL(link.href, window.location.origin);
  const linkPath = url.pathname.replace(/\/$/, '');

  if (linkPath === currentPath || (currentPath === '' && linkPath === '/index.html')) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }
}

const legalNote = document.querySelector('.legal-note');
if (legalNote) {
  legalNote.textContent = `a bare plain vanilla blog. ${new Date().getFullYear()}`;
}
