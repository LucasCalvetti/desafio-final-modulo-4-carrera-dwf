function headerComponent(componentContainer) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <header class="header">
    <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/index.html">
        <img
            src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/logo.png"
            alt="logo"
            class="header__logo"
        />
    </a>
    <img
        src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/menu-mobile.png"
        alt="menu de opciones"
        class="header__menu-mobile"
    />
    <div class="ventana-menu-mobile" style="display: none">
        <div class="ventana-menu-mobile__link-container">
            <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/portfolio-y-servicios/portfolio.html" class="ventana-menu-mobile__link"
                ><h3 class="ventana-menu-mobile__link-text">
                    Portfolio
                </h3></a
            >
            <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/portfolio-y-servicios/servicios.html" class="ventana-menu-mobile__link"
                ><h3 class="ventana-menu-mobile__link-text">
                    Servicios
                </h3></a
            >
            <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/contacto/contacto.html" class="ventana-menu-mobile__link"
                ><h3 class="ventana-menu-mobile__link-text">
                    Contacto
                </h3></a
            >
        </div>
    </div>
    <div class="header__menu-desktop-cont">
        <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/portfolio-y-servicios/portfolio.html" class="header__menu-desktop-text">
            <h3 class="header__menu-desktop-item">Portfolio</h3>
        </a>
        <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/portfolio-y-servicios/servicios.html" class="header__menu-desktop-text">
            <h3 class="header__menu-desktop-item">Servicios</h3>
        </a>
        <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/contacto/contacto.html" class="header__menu-desktop-text">
            <h3 class="header__menu-desktop-item">Contacto</h3>
        </a>
    </div>
</header>`;
    componentContainer.appendChild(componentEl);
    // Agrego a continuación un listener para el menu-mobile.
    const menuMobile = document.querySelector(".header__menu-mobile");
    const ventanaMenuMobile = document.querySelector(".ventana-menu-mobile");
    menuMobile.addEventListener("click", () => {
        if (ventanaMenuMobile.style.display == "") {
            ventanaMenuMobile.style.display = "none";
        } else if (ventanaMenuMobile.style.display == "none") {
            ventanaMenuMobile.style.display = "";
        }
    });
}
