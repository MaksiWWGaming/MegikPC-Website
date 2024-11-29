//Given service
const GetLink = window.location.href;
document.addEventListener("DOMContentLoaded", function() {
    if (GetLink.includes("Laptop")) {
        console.log("Load laptop services");

        const LaptopGivenServicesList = [
            "Dijagnostika", 
            "Zamena bilo kog dela", 
            "Nabavka bilo kog dela", 
            "Čišćenje od prašine", 
            "Zamena termalne paste", 
        ];

        const ul = document.createElement('ul');

        LaptopGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#GivenServicesList').appendChild(ul);
    } 
    else if (GetLink.includes("Desktop")) {
        console.log("Load desktop services");

        const DesktopGivenServicesList = [
            "Dijagnostika", 
            "Zamena komponenti", 
            "Nabavka komponenti", 
            "Čišćenje od prašine", 
            "Zamena termalne paste", 
            "Kompletno sklapanje računara (sa vašim ili našim komponentama)", 
        ];

        const ul = document.createElement('ul');

        DesktopGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#GivenServicesList').appendChild(ul);
    }
    else if (GetLink.includes("Online")) {
        console.log("Load online services");

        const OnlineGivenServicesList = [
            "Dijagnostika softverskih problema", 
            "Aktivacija Windows OS i Office paketa",
            "Instalacija Office paketa", 
            "Instalacija i update drivera", 
            "Uklanjanje virusa i ostalih malicioznih programa", 
            "Konvertovanje fajlova i kompresija fajlova ", 
        ];

        const ul = document.createElement('ul');

        OnlineGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#GivenServicesList').appendChild(ul);
    }
    else if (GetLink.includes("Other")) {
        console.log("Load other services");

        const OtherGivenServicesList = [
            "Dijagnostika softverskih problema", 
            "Uklanjanje virusa i ostalih malicioznih programa (offline)",
            "Kloniranje diskova (mogućnost prenosa OSa sa svim podacima sa jednog na drugi disk)", 
            "Spašavanje podataka sa diskova", 
            "Prenos fajlova sa jednog tipa medijuma na drugi ", 
        ];

        const ul = document.createElement('ul');

        OtherGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#GivenServicesList').appendChild(ul);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    if (GetLink.includes("Laptop")) {
        console.log("Load laptop not services");

        const LaptopNotGivenServicesList = [
            "Mikro lemljenje (zamena delova na matičnoj ploči)", 
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)", 
            "Spašavanje podataka sa mrtvih diskova (korišćenje specijalizovane opreme)", 
        ];

        const ul = document.createElement('ul');

        LaptopNotGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#NotGivenServicesList').appendChild(ul);
    } 
    else if (GetLink.includes("Desktop")) {
        console.log("Load desktop not services");

        const DesktopNotGivenServicesList = [
            "Mikro lemljenje (zamena delova na matičnoj ploči)", 
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)", 
        ];

        const ul = document.createElement('ul');

        DesktopNotGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#NotGivenServicesList').appendChild(ul);
    }
    else if (GetLink.includes("Online")) {
        console.log("Load online not services");

        const OnlineNotGivenServicesList = [
            "Povratak pristupa nalozima", 
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)", 
        ];

        const ul = document.createElement('ul');

        OnlineNotGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#NotGivenServicesList').appendChild(ul);
    }
    else if (GetLink.includes("Other")) {
        console.log("Load other not services");

        const OtherNotGivenServicesList = [
            "Povratak pristupa nalozima", 
            "Uklanjanje šifara sa uređaja (iCloud Lock, BIOS lock, Firmware lock, itd.)", 
        ];

        const ul = document.createElement('ul');

        OtherNotGivenServicesList.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item; 
            ul.appendChild(li);
        });

        document.querySelector('#NotGivenServicesList').appendChild(ul);
    }
});

//

// document.addEventListener("DOMContentLoaded", function() {
//     const ContactButton = `
//                                         <div class="card-body">
//                                             <h4 class="card-title">Kontaktirajte nas već danas!</h4>
//                                             <p class="small">Čak i ako možda ne piše da nudimo tu uslugu</p>
//                                         </div>
//     `;
//     document.querySelector('#ContactButton').innerHTML = ContactButton;
// });