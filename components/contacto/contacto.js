function contactComponent(componentContainer) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <div class="contact-section">
        <div class="contact">
            <h2 class="contact__title">Escribeme</h2>
                <form class="contact__form" id="form">
                    <label for="name" class="contact__label"
                        ><h4 class="contact__label-title">NOMBRE</h4>
                        <input id="name" name="nombre" type="text" class="contact__input" />
                    </label>
                    <label for="email" class="contact__label"
                        ><h4 class="contact__label-title">EMAIL</h4>
                        <input id="email" name="email" type="email" class="contact__input" />
                    </label>
                    <label for="message" class="contact__label">
                        <h4 class="contact__label-title">Mensaje</h4>
                        <textarea
                            id="message"
                            type="text"
                            class="contact__textarea"
                            name="mensaje"
                        ></textarea>
                    </label>
                    <button class="contact__send-button">Enviar</button>
                </form>
        </div>
    </div>`;
    componentContainer.appendChild(componentEl);
    const form = document.querySelector(".contact__form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        const entries = Object.fromEntries(formData.entries());
        const contactMessage =
            entries.nombre +
            ", te envió un mensaje diciendo: \n" +
            entries.mensaje +
            " \n \n Podés contactarte con él/ella al siguiente mail: \n" +
            entries.email;
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            body: JSON.stringify({
                to: "lic.calvo099@gmail.com",
                message: contactMessage,
            }),
            headers: { "content-type": "application/json" },
        })
            .then(() => {
                alert("¡Mensaje enviado!");
            })
            .catch(() => {
                alert("Hubo un error al enviar el mensaje...");
            });
        document.getElementById("form").reset();
    });
}
