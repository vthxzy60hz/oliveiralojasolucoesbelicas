// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação dos itens
const items = document.querySelectorAll('.item');
window.addEventListener('scroll', checkItems);

function checkItems() {
    const triggerBottom = window.innerHeight / 5 * 4;
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add('show');
        }
    });
}
