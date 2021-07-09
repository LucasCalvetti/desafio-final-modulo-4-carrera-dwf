function main() {
    headerComponent(document.querySelector(".header-container"));
    contactComponent(document.querySelector(".contact-section-container"));
    footerComponent(document.querySelector(".footer-section-container"));

    // Detalle para cambiar el nombre del título, para que este como en el desafío
    const contactTitleDesktop = document.querySelector(".contact__title");
    contactTitleDesktop.innerHTML = "Contacto";
}
main();
