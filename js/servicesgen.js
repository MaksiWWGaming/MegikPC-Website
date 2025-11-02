$(document).ready(function () {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Enhanced services data with icons and descriptions
    const servicesMap = {
        Laptop: [
            { name: "Dijagnostika", icon: "fas fa-search", desc: "Kompletna dijagnostika hardvera i softvera" },
            { name: "Zamena komponenti i delova", icon: "fas fa-exchange-alt", desc: "Zamena tastature, ekrana, baterije, memorije" },
            { name: "Prodaja komponentni i delova", icon: "fas fa-shopping-cart", desc: "Originalni i kompatibilni delovi" },
            { name: "Prodaja punjača", icon: "fas fa-plug", desc: "Originalni punjači za sve brendove" },
            { name: "Čišćenje iznutra i spolja", icon: "fas fa-broom", desc: "Profesionalno čišćenje od prašine i nečistoća" },
            { name: "Zamena termalne paste", icon: "fas fa-thermometer-half", desc: "Sprečava pregrevanje i produžava život komponenti" }
        ],
        Desktop: [
            { name: "Dijagnostika", icon: "fas fa-search", desc: "Detaljna analiza svih komponenti" },
            { name: "Zamena komponenti", icon: "fas fa-exchange-alt", desc: "Zamena matične ploče, procesora, grafičke karte" },
            { name: "Prodaja komponenti", icon: "fas fa-shopping-cart", desc: "Sve potrebne komponente za vaš računar" },
            { name: "Čišćenje iznutra i spolja", icon: "fas fa-broom", desc: "Temeljno čišćenje kućišta i komponenti" },
            { name: "Zamena termalne paste", icon: "fas fa-thermometer-half", desc: "Optimalno hlađenje procesora i grafičke karte" },
            { name: "Kompletno sklapanje računara", icon: "fas fa-puzzle-piece", desc: "Sklapanje sa vašim ili našim komponentama" }
        ],
        Software: [
            { name: "Aktivacija Windows OS i Office paketa", icon: "fab fa-windows", desc: "Legalna aktivacija i licenciranje" },
            { name: "Instalacija Office paketa", icon: "fas fa-file-word", desc: "Microsoft Office sa svim aplikacijama" },
            { name: "Instalacija Adobe programa", icon: "fa fa-photo-film", desc: "Photoshop, Illustrator, Premiere Pro i drugi Adobe programi" },
            { name: "Instalacija AutoDesk programa", icon: "fas fa-drafting-compass", desc: "AutoCAD, Revit i drugi CAD programi" }
        ],
        Other: [
            { name: "Dijagnostika softverskih problema", icon: "fas fa-bug", desc: "Otklanjanje softverskih grešaka i konflikata" },
            { name: "Instalacija i update drivera", icon: "fas fa-download", desc: "Ažuriranje svih drajvera na najnovije verzije" },
            { name: "Uklanjanje virusa i malicioznih programa", icon: "fas fa-shield-virus", desc: "Kompletno čišćenje od virusa i malware-a" },
            { name: "Kloniranje diskova", icon: "fas fa-clone", desc: "Prenos OS-a sa svim podacima na drugi disk" },
            { name: "Spašavanje podataka sa diskova", icon: "fas fa-hdd", desc: "Oporavak izgubljenih ili obrisanih podataka" },
            { name: "Konvertovanje i kompresija fajlova", icon: "fas fa-file-export", desc: "Konverzija između različitih formata" },
            { name: "Prenos fajlova sa različitih medijuma", icon: "fas fa-exchange-alt", desc: "USB, CD, DVD, eksterni diskovi" }
        ]
    };

    const notGivenServicesMap = {
        Laptop: [
            { name: "Mikro lemljenje", icon: "fas fa-microchip", desc: "Zamena delova na matičnoj ploči" },
            { name: "Uklanjanje šifara sa uređaja", icon: "fas fa-unlock-alt", desc: "iCloud, BIOS, Firmware lock" }
        ],
        Desktop: [
            { name: "Mikro lemljenje", icon: "fas fa-microchip", desc: "Zamena delova na matičnoj ploči" },
            { name: "Uklanjanje šifara sa uređaja", icon: "fas fa-unlock-alt", desc: "iCloud, BIOS, Firmware lock" }
        ],
        Software: [
            { name: "Povratak pristupa nalozima", icon: "fas fa-user-lock", desc: "Oporavak zaboravljenih lozinki" },
            { name: "Uklanjanje šifara sa uređaja", icon: "fas fa-unlock-alt", desc: "iCloud, BIOS, Firmware lock" }
        ],
        Other: [
            { name: "Povratak pristupa nalozima", icon: "fas fa-user-lock", desc: "Oporavak zaboravljenih lozinki" },
            { name: "Uklanjanje šifara sa uređaja", icon: "fas fa-unlock-alt", desc: "iCloud, BIOS, Firmware lock" }
        ]
    };

    function createServiceItem(service, isOffered = true) {
        const item = $(`<div class="service-item ${isOffered ? 'offered' : 'not-offered'}">`);
        
        const icon = $(`<div class="service-item-icon">`)
            .addClass(isOffered ? 'text-success' : 'text-danger')
            .html(`<i class="${service.icon}"></i>`);
        
        const content = $(`<div class="service-item-content">`);
        const name = $(`<div class="service-name">`).text(service.name);
        const desc = $(`<div class="service-description">`).text(service.desc);
        
        content.append(name, desc);
        item.append(icon, content);
        
        return item;
    }

    function loadServices(serviceType, serviceList, targetSelector, isOffered = true) {
        const container = $(targetSelector);
        const listClass = isOffered ? 'offered-services-list' : 'not-offered-services-list';
        
        const list = $(`<div class="${listClass}">`);
        
        serviceList.forEach(function (service) {
            const item = createServiceItem(service, isOffered);
            list.append(item);
        });
        
        container.append(list);
    }

    // Enhanced loading with animations
    function loadServicesWithAnimation(serviceType, serviceList, targetSelector, isOffered = true) {
        loadServices(serviceType, serviceList, targetSelector, isOffered);
        
        // Animate items on load
        $(`${targetSelector} .service-item`).each(function(index) {
            const item = $(this);
            item.css({
                'opacity': '0',
                'transform': 'translateY(20px)'
            });
            
            setTimeout(() => {
                item.css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': 'all 0.3s ease'
                });
            }, index * 100);
        });
    }

    // Load services with enhanced functionality using jQuery selectors
    if ($(".Laptop").length) {
        console.log("Loading enhanced laptop services");
        loadServicesWithAnimation("Laptop", servicesMap.Laptop, ".YesLaptop", true);
        loadServicesWithAnimation("Laptop", notGivenServicesMap.Laptop, ".NoLaptop", false);
    } 
    if ($(".Desktop").length) {
        console.log("Loading enhanced desktop services");
        loadServicesWithAnimation("Desktop", servicesMap.Desktop, ".YesDesktop", true);
        loadServicesWithAnimation("Desktop", notGivenServicesMap.Desktop, ".NoDesktop", false);
    }
    if ($(".Software").length) {
        console.log("Loading enhanced software services");
        loadServicesWithAnimation("Software", servicesMap.Software, ".YesSoftware", true);
        loadServicesWithAnimation("Software", notGivenServicesMap.Software, ".NoSoftware", false);
    }
    if ($(".Other").length) {
        console.log("Loading enhanced other services");
        loadServicesWithAnimation("Other", servicesMap.Other, ".YesOther", true);
        loadServicesWithAnimation("Other", notGivenServicesMap.Other, ".NoOther", false);
    }

    // Enhanced accordion interactions using jQuery
    $('.service-header').on('click', function() {
        const $header = $(this);
        const $arrow = $header.find('.service-arrow i');
        const $section = $header.closest('.service-section');
        
        // Toggle arrow rotation
        if ($section.hasClass('expanded')) {
            $arrow.css('transform', 'rotate(0deg)');
            $section.removeClass('expanded');
        } else {
            $arrow.css('transform', 'rotate(180deg)');
            $section.addClass('expanded');
        }
        
        // Animate header
        $header.css('transform', 'scale(1.02)');
        setTimeout(() => {
            $header.css('transform', 'scale(1)');
        }, 200);
    });

    // Add hover effects to service items using jQuery
    $(document).on('mouseenter', '.service-item', function() {
        $(this).css({
            'transform': 'translateX(5px)',
            'transition': 'transform 0.2s ease'
        });
    });
    
    $(document).on('mouseleave', '.service-item', function() {
        $(this).css('transform', 'translateX(0)');
    });
});