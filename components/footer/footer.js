function footerComponent(componentContainer) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
        <section class="footer">
        <div class="footer__cont">
            <div class="footer__logo-cont">
                <a href="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/index.html">
                    <img
                        src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/logo.png"
                        alt="logo"
                        class="footer__logo"
                    />
                </a>
                <span class="footer__copyright">© 2021 Lucas</span>
            </div>
            <div class="footer__social-media-cont">
                <a href="https://www.instagram.com/lucas_calvetti/">
                    <img class="footer__social-media-logo"
                        src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/instagram.png"
                        alt="logo de instagram"
                    />
                </a>
                <a
                    href="https://www.instagram.com/lucas_calvetti/"
                    class="footer__social-media-text"
                    >Instagram</a
                >
                <img class="footer__social-media-logo"
                    src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/linkedin.png"
                    alt="logo de linkedin"
                />
                <span class="footer__social-media-text">Linkedin</span>
                <img class="footer__social-media-logo"
                    src="https://lucascalvetti.github.io/desafio-final-modulo-4-carrera-dwf/imgs temporal/github.png"
                    alt="logo de github"
                />
                <span class="footer__social-media-text">Github</span>
            </div>
        </div>
        </section>
        `;
    componentContainer.appendChild(componentEl);
}
