// Enhanced WebDev Generator with Modern Features
const projects = [
    {
        title: "MegikPC - Servis Računara",
        description: "Servis desktop i laptop računara, prodaja polovnih računara i komponenti, kao i izrada web sajtova.",
        link: "https://megikpc.com",
        image: "/img/Pages/WebDev/megikpc.webp",
        alt: "MegikPC Website Slika",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        category: "Business Website"
    },
    {
        title: "Nina Box Tim - Bokserski klub",
        description: "Bokserski klub za rekreativce i profesionalce u Beogradu.",
        link: "https://nina-boxing.com",
        image: "/img/Pages/WebDev/nina-box.webp",
        alt: "Nina Box Boxing Club Website Slika",
        technologies: ["WordPress", "SEO", "Mobile-First"],
        category: "Sports Club"
    },
    {
        title: "Trim Computers - Prodaja kompijuterskih komponenti",
        description: "Online prodaja i katalog kompijuterskih komponenti, konfigurator (sastavi svoj računar) i dodatne opreme.",
        link: "https://trimcomputers.rs",
        image: "/img/Pages/WebDev/trim-computers.webp",
        alt: "Trim Computers Website Slika",
        technologies: ["E-commerce", "Vue.js", "Database"],
        category: "E-commerce"
    }
];

$(document).ready(function() {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    const accordionContainer = document.getElementById("projectsAccordion");

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        
        const technologiesBadges = project.technologies.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
            <div class="project-header" data-bs-toggle="collapse" data-bs-target="#project${index}" aria-expanded="false">
                <div class="project-icon">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-category">${project.category}</p>
                </div>
                <div class="project-arrow">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <div id="project${index}" class="collapse" data-bs-parent="#projectsAccordion">
                <div class="project-content">
                    <div class="row">
                        <div class="col-lg-8">
                            <p class="project-description">${project.description}</p>
                            <div class="technologies">
                <h5>Tehnologije:</h5>
                <div class="tech-badges">
                    ${technologiesBadges}
                </div>
                            </div>
                            <a href="${project.link}" target="_blank" class="project-button">
                                <i class="fas fa-external-link-alt"></i>
                                Poseti sajt
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <div class="project-image-container">
                                <img src="${project.image}" alt="${project.alt}" class="project-image">
                                <div class="image-overlay">
                                    <i class="fas fa-search-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add animation delay
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        accordionContainer.appendChild(projectCard);
    });

    // Enhanced interaction effects
    $('.project-header').on('click', function() {
        const $header = $(this);
        const $arrow = $header.find('.project-arrow i');
        const $card = $header.closest('.project-card');
        
        // Toggle arrow rotation with animation
        if ($card.hasClass('expanded')) {
            $arrow.css('transform', 'rotate(0deg)');
            $card.removeClass('expanded');
        } else {
            $arrow.css('transform', 'rotate(180deg)');
            $card.addClass('expanded');
        }
        
        // Animate header
        $header.css('transform', 'scale(1.02)');
        setTimeout(() => {
            $header.css('transform', 'scale(1)');
        }, 200);
    });

    // Add hover effects to project cards
    $(document).on('mouseenter', '.project-card', function() {
        $(this).addClass('hovered');
    });
    
    $(document).on('mouseleave', '.project-card', function() {
        $(this).removeClass('hovered');
    });

    // Animate project cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInFromBottom 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    $('.project-card').each(function() {
        $(this).css('opacity', '0');
        observer.observe(this);
    });

    // Add click effect to project images
    $('.project-image-container').on('click', function() {
        const $overlay = $(this).find('.image-overlay');
        $overlay.css('transform', 'scale(1.1)');
        setTimeout(() => {
            $overlay.css('transform', 'scale(1)');
        }, 200);
    });
});