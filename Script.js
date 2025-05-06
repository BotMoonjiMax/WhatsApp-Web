// Adicionar evento de clique nos links de navegação
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

// Adicionar efeito de scroll suave
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Adicionar efeito de animação nos títulos
const titles = document.querySelectorAll('h1, h2');
titles.forEach((title) => {
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
    });
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });
});
