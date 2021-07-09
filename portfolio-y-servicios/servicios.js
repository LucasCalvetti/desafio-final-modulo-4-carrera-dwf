(function () {
    headerComponent(document.querySelector(".header-container"));
    footerComponent(document.querySelector(".footer-section-container"));
    const link =
        "https://cdn.contentful.com/spaces/652483i91mz9/environments/master/entries?access_token=5aU3Wm8TB5EWQzHS-Qg8BX6Axw6bQr3aBeZ64fY-O1Y&content_type=serviciosHtml";
    const serviceHtmlPositions = {
        template: "#template",
        container: ".services-sect__cards-container",
        img: ".card__card-img",
        title: ".card__title",
        description: ".card__description",
        url: ".card__url",
    };
    getCardData(link).then(function (data) {
        for (const d of data) {
            addCard(d, serviceHtmlPositions);
        }
    });
})();
