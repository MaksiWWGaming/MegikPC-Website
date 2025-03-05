const ServicesArray = [
    {
        id: 'Laptop',
        title: 'Lenovo L24i-10 FHD Monitor',
        description: 'Nije bitan proizvođač laptopa. Mi imamo rešenje!',
        image: '/img/Pages/Index/Laptop.webp',
        link: 'pages/Laptop.html',
        alt: 'Laptop'
    },
    {
        id: 'Desktop',
        title: 'Servisiranje desktopova',
        description: 'Muči vas desktop računar? Stojimo Vam na raspolaganju!',
        image: 'img/Pages/Index/Desktop.webp',
        link: 'pages/Desktop.html',
        alt: 'Desktop'
    },
    {
        id: 'AnyDesk',
        title: 'Online podrška',
        description: 'Možemo daljinski da rešimo? Uvek smo tu preko AnyDesk!',
        image: 'img/Pages/Index/Anydesk.webp',
        link: 'pages/Online.html',
        alt: 'AnyDesk'
    },
    {
        id: 'Other',
        title: 'Ostali vidovi podrške',
        description: 'MegikPC nema ono što tražite? Verovatno "znamo čoveka"!',
        image: 'img/Pages/Index/Other.webp',
        link: 'pages/Other.html',
        alt: 'Ostala podrška'
    }
];

function GenerateServiceAccordions() {
    const MainContent = $('#MainContent');

    let DivRow = $('<div>').addClass('row');

    ServicesArray.forEach((service, index) => {
        let DivCol = $('<div>').addClass('col-md-6 col-lg-3 mb-3');

        let Accordion = $(`
            <div class="accordion" id="Accordion${index}">
                <div class="accordion-item">
                    <h2 class="accordion-header text-center" id="heading${index}">
                        <img src="${service.image}" alt="${service.alt}" class="img-fluid mx-auto d-block" style="max-width: 80px; margin-bottom: 10px;">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            ${service.title}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#Accordion${index}">
                        <div class="accordion-body text-center">
                            <p>${service.description}</p>
                            <a href="${service.link}" class="btn btn-primary">Saznajte više</a>
                        </div>
                    </div>
                </div>
            </div>
        `);

        DivCol.append(Accordion);
        DivRow.append(DivCol);
    });

    MainContent.append(DivRow);
}

GenerateServiceAccordions();
