// MENU HAMBURGUESA
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ANIMACION DE CARGA
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");
    const contenido = document.getElementById("contenido");

    if(loader && contenido){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";
                contenido.classList.add("show");

            }, 800);

        }, 3000);

    }

});