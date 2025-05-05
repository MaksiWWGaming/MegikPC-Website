$(document).ready(function () {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Given Services
    const servicesMap = {
        Laptop: [
            "Dijagnostika",
            "Zamena komponenti i delova",
            "Prodaja komponentni i delova",
            "Prodaja punjača",
            "Čišćenje iznutra i spolja",
            "Zamena termalne paste",
        ],
        Desktop: [
            "Dijagnostika",
            "Zamena komponenti",
            "Prodaja komponenti",
            "Čišćenje iznutra i spolja",
            "Zamena termalne paste",
            "Kompletno sklapanje računara (sa vašim ili našim komponentama)",
        ],
        Software: [
            "Aktivacija Windows OS i Office paketa",
            "Instalacija Office paketa",
            "Instalacija Adobe programa",
            "Instalacija AutoDesk programa",
        ],
        Other: [
            "Dijagnostika softverskih problema",
            "Instalacija i update drivera",
            "Uklanjanje virusa i ostalih malicioznih programa",
            "Kloniranje diskova (mogućnost prenosa OSa sa svim podacima sa jednog na drugi disk)",
            "Spašavanje podataka sa diskova",
            "Konvertovanje fajlova i kompresija fajlova",
            "Prenos fajlova sa jednog tipa medijuma na drugi",
        ],
    };

    const notGivenServicesMap = {
        Laptop: [
            "Mikro lemljenje (zamena delova na matičnoj ploči)",
            "Uklanjanje šifara sa uređaja (iCloud, BIOS, Firmware lock, itd.)",
            "Spašavanje podataka sa mrtvih diskova (korišćenjem specijalizovane opreme)",
        ],
        Desktop: [
            "Mikro lemljenje (zamena delova na matičnoj ploči)",
            "Uklanjanje šifara sa uređaja (iCloud, BIOS, Firmware lock, itd.)",
            "Spašavanje podataka sa mrtvih diskova (korišćenjem specijalizovane opreme)",
        ],
        Software: [
            "Povratak pristupa nalozima",
            "Uklanjanje šifara sa uređaja (iCloud, BIOS, Firmware lock, itd.)",
        ],
        Other: [
            "Povratak pristupa nalozima",
            "Uklanjanje šifara sa uređaja (iCloud, BIOS, Firmware lock, itd.)",
        ],
    };

    function loadServices(serviceType, serviceList, targetSelector, listClass) {
        const ul = $("<ul>").addClass(listClass);
        serviceList.forEach(function (item) {
            const li = $("<li>").text(item);
            ul.append(li);
        });
        $(targetSelector).append(ul);
    }
    

    if (document.querySelector(".Laptop")) {
        console.log("Load laptop services");
        loadServices("Laptop", servicesMap.Laptop, ".YesLaptop", "checkmarks");
        loadServices("Laptop", notGivenServicesMap.Laptop, ".NoLaptop", "crossmarks");
    } 
    if (document.querySelector(".Desktop")) {
        console.log("Load desktop services");
        loadServices("Desktop", servicesMap.Desktop, ".YesDesktop", "checkmarks");
        loadServices("Desktop", notGivenServicesMap.Desktop, ".NoDesktop", "crossmarks");
    }
    if (document.querySelector(".Software")) {
        console.log("Load Software services");
        loadServices("Software", servicesMap.Software, ".YesSoftware", "checkmarks");
        loadServices("Software", notGivenServicesMap.Software, ".NoSoftware", "crossmarks");
    }
    if (document.querySelector(".Other")) {
        console.log("Load other services");
        loadServices("Other", servicesMap.Other, ".YesOther", "checkmarks");
        loadServices("Other", notGivenServicesMap.Other, ".NoOther", "crossmarks");
    }
});
