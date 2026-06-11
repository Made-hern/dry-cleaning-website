// MENU HAMBURGUESA
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ANIMACIÓN DE ENTRADA AL HACER SCROLL (página de precios)
const animateOnScroll = () => {
    const elements = document.querySelectorAll(".price-category");
    if (!elements.length) return;
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Pequeño delay escalonado por categoría
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    elements.forEach(el => observer.observe(el));
};
 
animateOnScroll();
 // ===========================
// ANIMACIONES AL HACER SCROLL
// Página: Dry Cleaning
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos todos los elementos animables
    const animTargets = document.querySelectorAll(
        ".dc-benefit-item, .dc-step"
    );

    if (!animTargets.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                // Delay escalonado según data-delay
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, parseInt(delay));

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animTargets.forEach(el => observer.observe(el));

});
// ===========================
// ANIMACIONES AL HACER SCROLL
// Página: Lavado Institucional
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    const animTargets = document.querySelectorAll(
        ".lav-sector-card, .lav-why-item"
    );

    if (!animTargets.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animTargets.forEach(el => observer.observe(el));

});