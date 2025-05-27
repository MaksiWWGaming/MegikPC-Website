const projects = [
            {
                title: "MegikPC - Computer Repairshop",
                description: "Desktop and laptop computer repair shop, sales of used PCs and components. Also we create websites.",
                link: "https://megikpc.com",
                image: "/img/Pages/WebDev/megikpc.png",
                alt: "MegikPC Website Screenshot" 
            },
            {
                title: "Nina Box Tim - Boxing Club",
                description: "Boxing club for recreational and professional boxing.",
                link: "https://nina-boxing.com",
                image: "/img/Pages/WebDev/nina-box.png",
                alt: "Nina Box Boxing Club Website Screenshot"
            },
            {
                title: "Trim Computers - PC parts store",
                description: "Online sales and computer parts catalogue, PC builder and other PC equipment.",
                link: "https://trimcomputers.rs",
                image: "/img/Pages/WebDev/trim-computers.png",
                alt: "Trim Computers Website Screenshot"
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
                                Visit website <i class="fa-solid fa-up-right-from-square"></i>
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