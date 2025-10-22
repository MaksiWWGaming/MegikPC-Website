// Enhanced Index Page Generator with Modern Features
$(document).ready(function() {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    const ServicesArray = [
        {
            id: 'Serviserske Usluge',
            title: 'Serviserske Usluge',
            description: 'Kvar nije bitan, bitno je da mi imamo rešenje!',
            image: '/img/Pages/Index/MegikServis.webp',
            link: '/pages/Services.html',
            alt: 'Computer Repair',
            icon: 'fas fa-laptop-medical',
            features: ['Brza dijagnostika', 'Kvalitetna popravka', 'Povoljne cene']
        },
        {
            id: 'Izrada web sajtova',
            title: 'Izrada Web Sajtova',
            description: 'Potreban vam je sajt? Čuvamo vam leđa!',
            image: '/img/Pages/Index/MegikWeb.webp',
            link: '/pages/WebDev.html',
            alt: 'WebDev',
            icon: 'fas fa-code',
            features: ['Moderni dizajn', 'SEO optimizacija', 'Responsive']
        },
    ];

    // Enhanced function to generate and append service cards
    function GenerateServiceCards() {
        const MainContent = $('#MainContent');
        
        ServicesArray.forEach((service, index) => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'modern-service-card';
            serviceCard.style.animationDelay = `${index * 0.2}s`;

            const featuresList = service.features.map(feature => 
                `<li><i class="fas fa-check"></i> ${feature}</li>`
            ).join('');

            serviceCard.innerHTML = `
                <div class="service-card-header">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="service-title">${service.title}</h3>
                </div>
                <div class="service-card-body">
                    <p class="service-description">${service.description}</p>
                    <div class="service-image-container">
                        <img class="service-image" src="${service.image}" alt="${service.alt}">
                    </div>
                    <div class="service-features">
                        <ul>${featuresList}</ul>
                    </div>
                    <a href="${service.link}" class="service-button">
                        
                        Saznajte više
                    </a>
                </div>
            `;

            MainContent.append(serviceCard);
        });

        // Add hover effects
        $('.modern-service-card').on('mouseenter', function() {
            $(this).addClass('hovered');
        }).on('mouseleave', function() {
            $(this).removeClass('hovered');
        });

        // Add click effect to service images
        $('.service-image-container').on('click', function() {
            const $overlay = $(this).find('.service-image-overlay');
            $overlay.css('transform', 'scale(1.1)');
            setTimeout(() => {
                $overlay.css('transform', 'scale(1)');
            }, 200);
        });
    }

    GenerateServiceCards();

    // Enhanced reviews system
    let ReviewIndex = 0;
    let ReviewText = [];
    let reviewInterval;

    async function LoadReviews() {
        try {
            const response = await fetch('/js/data/reviews.txt');
            const text = await response.text();
            ReviewText = text.split('\n').filter(line => line.trim()).map(line => {
                let parts = line.split('|');
                return {
                    text: parts[0],
                    author: parts[1] || 'Zadovoljna mušterija'
                };
            });

            if (ReviewText.length > 0) {
                updateReviewDisplay();
                startReviewRotation();
                updateIndicators();
            }
        } catch (error) {
            console.error('Error loading reviews:', error);
            showErrorMessage();
        }
    }

    function updateReviewDisplay() {
        const el = document.querySelector('#MovingText');
        const currentReview = ReviewText[ReviewIndex];
        
        el.innerHTML = `
            <div class="review-item">
                <div class="review-text">
                    <i class="fas fa-quote-left"></i>
                    <p>${currentReview.text}</p>
                    <i class="fas fa-quote-right"></i>
                </div>
                <div class="review-author">
                    
                    <span>${currentReview.author}</span>
                </div>
            </div>
        `;

        // Animate review change
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.5s ease';
        }, 100);
    }

    function startReviewRotation() {
        reviewInterval = setInterval(() => {
            ReviewIndex = (ReviewIndex + 1) % ReviewText.length;
            updateReviewDisplay();
            updateIndicators();
        }, 5000);
    }

    function updateIndicators() {
        $('.indicator').removeClass('active');
        $(`.indicator[data-index="${ReviewIndex}"]`).addClass('active');
    }

    function showErrorMessage() {
        const el = document.querySelector('#MovingText');
        el.innerHTML = `
            <div class="review-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Trenutno nismo u mogućnosti da učitamo utiske mušterija.</p>
                <p><small>Pokušajte kasnije ili nas kontaktirajte direktno.</small></p>
            </div>
        `;
    }

    // Manual review navigation
    $('#prevReview').on('click', function() {
        ReviewIndex = ReviewIndex === 0 ? ReviewText.length - 1 : ReviewIndex - 1;
        updateReviewDisplay();
        updateIndicators();
        resetReviewInterval();
    });

    $('#nextReview').on('click', function() {
        ReviewIndex = (ReviewIndex + 1) % ReviewText.length;
        updateReviewDisplay();
        updateIndicators();
        resetReviewInterval();
    });

    function resetReviewInterval() {
        clearInterval(reviewInterval);
        startReviewRotation();
    }

    // Initialize reviews with delay
    setTimeout(() => {
        document.querySelector('#ReviewSpinner').style.display = 'none';
        LoadReviews();
    }, 2000);

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    $('.intro-card, .location-card, .cta-section').each(function() {
        $(this).css('opacity', '0');
        observer.observe(this);
    });

    // Add click effects to buttons
    $('.service-button, .location-button, .btn-cta-primary, .btn-cta-secondary').on('click', function() {
        const $button = $(this);
        $button.css('transform', 'scale(0.95)');
        setTimeout(() => {
            $button.css('transform', 'scale(1)');
        }, 150);
    });

    // Parallax effect removed for fixed hero section

    // Enhanced service card interactions
    $('.modern-service-card').on('mouseenter', function() {
        const $card = $(this);
        $card.find('.service-image').css('transform', 'scale(1.05)');
        $card.find('.service-button').css('transform', 'translateY(-2px)');
    }).on('mouseleave', function() {
        const $card = $(this);
        $card.find('.service-image').css('transform', 'scale(1)');
        $card.find('.service-button').css('transform', 'translateY(0)');
    });
});