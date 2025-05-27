const projects = [
            {
                title: "MegikPC - Servis Računara",
                description: "Servis desktop i laptop računara, prodaja polovnih računara i komponenti, kao i izrada web sajtova.",
                link: "https://megikpc.com",
                image: "/img/Pages/WebDev/megikpc.png",
                alt: "MegikPC Website Slika"
            },
            {
                title: "Nina Box Tim - Bokserski klub",
                description: "Bokserski klub za rekreativce i profesionalce u Beogradu.",
                link: "https://nina-boxing.com",
                image: "/img/Pages/WebDev/nina-box.png",
                alt: "Nina Box Boxing Club Website Slika"
            },
            {
                title: "Trim Computers - Prodaja kompijuterskih komponenti",
                description: "Online prodaja i katalog kompijuterskih komponenti, konfigurator (sastavi svoj računar) i dodatne opreme.",
                link: "https://trimcomputers.rs",
                image: "/img/Pages/WebDev/trim-computers.png",
                alt: "Trim Computers Website Slika"
            }
        ];

        const accordionContainer = document.getElementById("projectsAccordion");

        projects.forEach((project, index) => {
            const accordionItem = document.createElement("div");
            accordionItem.className = "accordion-item";

            accordionItem.innerHTML = `
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        ${project.title}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#projectsAccordion">
                    <div class="accordion-body d-flex flex-wrap">
                        <div class="col-12 col-md-6">
                            <p>${project.description}</p>
                            <a href="${project.link}" target="_blank" class="btn btn-primary">
                                Poseti sajt <i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                        <div class="col-12 col-md-6 text-center mt-3 mt-md-0">
                            <img src="${project.image}" alt="${project.title}" class="img-fluid rounded shadow">
                        </div>
                    </div>
                </div>
            `;

            accordionContainer.appendChild(accordionItem);
        });