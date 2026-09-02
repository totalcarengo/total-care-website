const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');

btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent = open ? 'Close' : 'Menu';
});

nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn?.setAttribute('aria-expanded','false');
  if (btn) btn.textContent = 'Menu';
}));
