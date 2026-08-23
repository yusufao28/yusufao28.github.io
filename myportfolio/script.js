const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');

    cards.forEach((card) => {
      const categories = card.dataset.category || '';
      const shouldShow = selected === 'all' || categories.includes(selected);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copyEmail');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      const previousText = copyButton.textContent;
      copyButton.textContent = 'Email Copied';
      setTimeout(() => { copyButton.textContent = previousText; }, 1800);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}
