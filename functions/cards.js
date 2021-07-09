function addCard(paramsFromCms, HtmlPositions) {
    const template = document.querySelector(HtmlPositions.template);
    const container = document.querySelector(HtmlPositions.container);
    template.content.querySelector(HtmlPositions.img).src =
        paramsFromCms.imagen;
    template.content.querySelector(HtmlPositions.title).textContent =
        paramsFromCms.title;
    template.content.querySelector(HtmlPositions.description).textContent =
        paramsFromCms.description;
    if (typeof paramsFromCms.url != "undefined") {
        template.content.querySelector(HtmlPositions.url).href =
            paramsFromCms.url;
        console.log(template.content.querySelector(HtmlPositions.url).href);
    }
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getCardData(link) {
    return fetch(link)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);
            const fieldsCollecction = json.items.map((item) => {
                return {
                    title: item.fields.title,
                    description:
                        item.fields.description.content[0].content[0].value,
                    imagen: json.includes.Asset[0].fields.file.url,
                    url: item.fields.url,
                };
            });
            return fieldsCollecction;
        });
}
