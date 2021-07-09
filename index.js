function main() {
    headerComponent(document.querySelector(".header-container"));
    contactComponent(document.querySelector(".contact-section-container"));
    footerComponent(document.querySelector(".footer-section-container"));
    const serviceHtmlPositions = {
        template: "#services__template",
        container: ".services",
        img: ".services__computer-img",
        title: ".services__subtitle",
        description: ".services__description",
    };
    const link =
        "https://cdn.contentful.com/spaces/652483i91mz9/environments/master/entries?access_token=5aU3Wm8TB5EWQzHS-Qg8BX6Axw6bQr3aBeZ64fY-O1Y&content_type=serviceCard";
    getCardData(link).then(function (data) {
        for (const d of data) {
            addCard(d, serviceHtmlPositions);
        }
    });
}
main();
