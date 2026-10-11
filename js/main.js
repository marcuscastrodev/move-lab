"use strict";

const header = document.querySelector('.site-header');
const nav = document.querySelector('.main-nav');
const burger = document.querySelector('.burger');
const mobileCta = document.querySelector('.mob-cta');

function setNavigation(open) {
  nav?.classList.toggle('open', open);
  burger?.setAttribute('aria-expanded', String(open));
  burger?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

burger?.addEventListener('click', () => setNavigation(!nav.classList.contains('open')));
document.querySelector('.navclose')?.addEventListener('click', () => setNavigation(false));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavigation(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setNavigation(false);
});

function updateScrollState() {
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  header?.classList.toggle('scrolled', y > 24);
  mobileCta?.classList.toggle('show', y > window.innerHeight * 0.85);
}
window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  document.documentElement.classList.add('reveals-on');
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Portfolio demo only: never imply that a lead was delivered or stored.
document.querySelector('#application-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const feedback = document.querySelector('#form-feedback');
  if (feedback) feedback.textContent = 'Formulário validado para demonstração. Nenhum dado foi enviado ou armazenado.';
});
