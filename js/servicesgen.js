$(document).ready(function () {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Given Services
    const servicesMap = {
        Laptop: [
            "Dijagnostika",
            "Zamena komponenti",
            "Nabavka komponenti",
            "Čišćenje iznutra i spolja",
            "Zamena termalne paste",
        ],
        Desktop: [
            "Dijagnostika",
            "Zamena komponenti",
            "Nabavka komponenti",
            "Čišćenje iznutra i spolja",
            "Zamena termalne paste",
            "Kompletno sklapanje računara (sa vašim ili našim komponentama)",
        ],
        Online: [
            "Dijagnostika softverskih problema",
            "Aktivacija Windows OS i Office paketa",
            "Instalacija Office 2016 paketa",
            "Instalacija i update drivera",
            "Uklanjanje virusa i ostalih malicioznih programa",
        ],
        Other: [
            "Dijagnostika softverskih problema",
            "Uklanjanje virusa i ostalih malicioznih programa (offline)",
            "Kloniranje diskova (mogućnost prenosa OSa sa svim podacima sa jednog na drugi disk)",
            "Spašavanje podataka sa diskova",
            "Konvertovanje fajlova i kompresija fajlova",
            "Prenos fajlova sa jednog tipa medijuma na drugi",
        ],
    };

    const notGivenServicesMap = {
        Laptop: [
            "Mikro lemljenje (zamena delova na matičnoj ploči)",
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)",
            "Spašavanje podataka sa mrtvih diskova (korišćenje specijalizovane opreme)",
        ],
        Desktop: [
            "Mikro lemljenje (zamena delova na matičnoj ploči)",
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)",
        ],
        Online: [
            "Povratak pristupa nalozima",
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)",
        ],
        Other: [
            "Povratak pristupa nalozima",
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)",
        ],
    };

    function loadServices(serviceType, serviceList, targetSelector) {
        const ul = $("<ul>");
        serviceList.forEach(function (item) {
            const li = $("<li>").text(item);
            ul.append(li);
        });
        $(targetSelector).append(ul);
    }

    if (GetLink.includes("Laptop")) {
        console.log("Load laptop services");
        loadServices("Laptop", servicesMap.Laptop, "#GivenServicesList");
        loadServices("Laptop", notGivenServicesMap.Laptop, "#NotGivenServicesList");
    } else if (GetLink.includes("Desktop")) {
        console.log("Load desktop services");
        loadServices("Desktop", servicesMap.Desktop, "#GivenServicesList");
        loadServices("Desktop", notGivenServicesMap.Desktop, "#NotGivenServicesList");
    } else if (GetLink.includes("Online")) {
        console.log("Load online services");
        loadServices("Online", servicesMap.Online, "#GivenServicesList");
        loadServices("Online", notGivenServicesMap.Online, "#NotGivenServicesList");
    } else if (GetLink.includes("Other")) {
        console.log("Load other services");
        loadServices("Other", servicesMap.Other, "#GivenServicesList");
        loadServices("Other", notGivenServicesMap.Other, "#NotGivenServicesList");
    }
});
