// Menu Mobile
const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Fechar menu mobile após clique
    if (window.innerWidth <= 768) {
      nav.style.display = 'none';
    }
  });
});

// Animação dos itens ao scroll
const animateOnScroll = () => {
  const items = document.querySelectorAll('.item, .vantagem-item, .depoimento-card');
  const triggerBottom = window.innerHeight / 5 * 4;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
