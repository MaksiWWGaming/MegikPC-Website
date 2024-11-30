console.log("Working JS");

// Create Nav --STARTS HERE--

// Array with nav items
const navItems = [
    { label: "Početna", link: "index.html" },
    { 
        label: "Usluge", 
        link: "", 
        dropdown: [
            { label: "Servisiranje laptopova", link: "MegikPC.github.io/pages/LaptopServis.html" },
            { label: "Servisiranje desktopova", link: "MegikPC.github.io/pages/DesktopServis.html" },
            { label: "Online podrška", link: "MegikPC.github.io/pages/OnlineSupport.html" },
            { label: "Ostalo", link: "MegikPC.github.io/pages/Other.html" }
        ]
    },
    { label: "Kontakt", link: "MegikPC.github.io/pages/Contact.html" },
    { label: "Autor", link: "MegikPC.github.io/pages/About_Us.html" },
    { label: "Dokum.", link: "MegikPC.github.io/pages/Docs.pdf" }
];
// Pagination
const CurrentPath = window.location.pathname;
const IsRootPage = CurrentPath === '/'; //Check if on root

function getLink(RelativePath) {
    if (IsRootPage) {
        return RelativePath;
    } else {
        return `../${RelativePath}`; // Go to root, then to page
    }
}

// Function to create a dropdown menu
function createDropdownMenu(dropdownItems) {
    const dropdown = document.createElement("li");
    dropdown.classList.add("nav-item", "dropdown");

    const dropdownLink = document.createElement("a");
    dropdownLink.classList.add("nav-link", "dropdown-toggle");
    dropdownLink.setAttribute("role", "button");
    dropdownLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownLink.setAttribute("aria-expanded", "false");
    dropdownLink.innerHTML = `${dropdownItems.label} <i class="fa fa-caret-down" aria-hidden="true"></i>`;

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");

    dropdownItems.dropdown.forEach(item => {
        const dropdownItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("dropdown-item");
        link.setAttribute("href", getLink(item.link));
        link.textContent = item.label;
        dropdownItem.appendChild(link);
        dropdownMenu.appendChild(dropdownItem);
    });

    dropdown.appendChild(dropdownLink);
    dropdown.appendChild(dropdownMenu);

    return dropdown;
}

const Nav = document.createElement("nav");
Nav.classList.add("navbar", "navbar-expand-lg", "fixed-top", "autohide");
Nav.setAttribute("id", "Navigation");

// Fluid container in Nav
const DivContainer = document.createElement("div");
DivContainer.classList.add("container-fluid");

// Logo link
const LogoLink = document.createElement("a");
LogoLink.classList.add("navbar-brand");
LogoLink.setAttribute("href", getLink("index.html"));

// Add logo link image
const LogoImage = document.createElement("img");
LogoImage.classList.add("img-fluid", "col-4");
LogoImage.setAttribute("src", "img/Trademarks/banner.png");
LogoImage.setAttribute("alt", "Megik PC Logo");
LogoLink.appendChild(LogoImage);

// Add hamburger menu
const HamburgerMenu = document.createElement("button");
HamburgerMenu.classList.add("navbar-toggler");
HamburgerMenu.setAttribute("type", "button");
HamburgerMenu.setAttribute("data-bs-toggle", "collapse");
HamburgerMenu.setAttribute("data-bs-target", "#navbarSupportedContent");
HamburgerMenu.setAttribute("aria-controls", "navbarSupportedContent");
HamburgerMenu.setAttribute("aria-expanded", "false");
HamburgerMenu.setAttribute("aria-label", "Toggle navigation");

const HamburgerLines = document.createElement("span");
HamburgerLines.classList.add("navbar-toggler-icon");
HamburgerMenu.appendChild(HamburgerLines);

// Navbar-Collapse bootstrap class
const NavbarCollapse = document.createElement("div");
NavbarCollapse.classList.add("collapse", "navbar-collapse");
NavbarCollapse.setAttribute("id", "navbarSupportedContent");

// Create the list of navbar items
const NavbarList = document.createElement("ul");
NavbarList.classList.add("navbar-nav", "ms-auto", "mb-2", "mb-lg-0");

// Loop through navItems to create the navigation
navItems.forEach(item => {
    const NavItem = document.createElement("li");
    NavItem.classList.add("nav-item");

    // If the item has a dropdown
    if (item.dropdown) {
        NavbarList.appendChild(createDropdownMenu(item));
    } else {
        const NavLink = document.createElement("a");
        NavLink.classList.add("nav-link");
        NavLink.setAttribute("href", getLink(item.link));
        NavLink.textContent = item.label;
        NavItem.appendChild(NavLink);
        NavbarList.appendChild(NavItem);
    }
});

// Darkmode
const DarkModeButton = document.createElement("i");
DarkModeButton.classList.add("fa-solid", "fa-moon");
DarkModeButton.setAttribute("id", "DarkMode");

NavbarCollapse.appendChild(NavbarList);
NavbarCollapse.appendChild(DarkModeButton);

DivContainer.appendChild(LogoLink);
DivContainer.appendChild(HamburgerMenu);
DivContainer.appendChild(NavbarCollapse);

Nav.appendChild(DivContainer);

// document.querySelector('#navbar-container')
document.querySelector('#navbar-container').appendChild(Nav);

// Add active id on current page
const CurrentPage = window.location.pathname;
const NavLinks = document.querySelectorAll(".nav-link");
console.log("Current page link" + CurrentPage);

NavLinks.forEach(link => {
    if (link.getAttribute("href") === ".." + CurrentPage) {
        link.classList.add("active");
    }
});

document.querySelectorAll(".dropdown-item").forEach(dropdownItem => {
    console.log("Selected dropdown href " + dropdownItem.getAttribute("href"));
    if (dropdownItem.getAttribute("href") === ".." + CurrentPage) {
        const dropdownToggle = dropdownItem.closest(".dropdown").querySelector(".dropdown-toggle");
        if (dropdownToggle) {
            dropdownToggle.classList.add("active");
        }
    }
});

//Create nav --ENDS HERE--  

//Create footer

document.addEventListener("DOMContentLoaded", function() {
    const CurrentYear = new Date().getFullYear();

    const FooterDiv = `
                    <div class="col-4 col-md-9 d-flex align-items-center">
                        <span class="mb-4 mb-md-0">&copy; 2024 - <span id="MegikCopyYear">${CurrentYear}</span> Megik PC</span> 
                    </div>
                    <div class="col-3 col-md-1 d-flex align-items-center">
                        <a href="https://www.google.com/maps/place/Servis+Računara+Megik/@44.7459116,20.4544301,18.75z/data=!4m6!3m5!1s0x475a710017d9c723:0x5907459db511e708!8m2!3d44.7455926!4d20.4549122!16s%2Fg%2F11wjfwf4bs?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                        </a>
                        <a href="https://www.kupujemprodajem.com/maksim-megik-servis/svi-oglasi/1781418/1" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </a>
                    </div>
                    <div class="col-5 col-md-2 d-flex align-items-center">
                        <ul>
                            <li>Pon - Pet: 10:00 - 20:00</li>
                            <li>Subota: 10:00 - 16:00</li>
                            <li>Nedelja: Neradan dan </li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">

                    </div>
    `;

    document.querySelector('#FooterDiv').innerHTML = FooterDiv;

    document.getElementById("MegikCopyYear").textContent = CurrentYear;
});

//Retain darkmode icon
DarkModeButton.addEventListener("click", function(){
    DarkModeButton.classList.toggle("fa-moon");
    DarkModeButton.classList.toggle("fa-sun");
    var DarkBody = document.body;
    DarkBody.classList.toggle("dark-mode");  
    localStorage.setItem('RememberDarkMode', DarkBody.classList.contains('dark-mode'));
});

document.addEventListener("DOMContentLoaded", function () {
    const DarkMode = localStorage.getItem('RememberDarkMode');
    const DarkModeIcon = document.querySelector(".fa-solid");
    if (DarkMode==='true') {
        document.body.classList.add("dark-mode");
        DarkModeIcon.classList.add("fa-sun");
        DarkModeIcon.classList.remove("fa-moon");
        console.log("You have dark mode saved from last session");
    } else {
        document.body.classList.remove("dark-mode");
        DarkModeIcon.classList.add("fa-moon");
        DarkModeIcon.classList.remove("fa-sun");
        console.log("You have light mode saved from last session");
    }
});

//Auto Hide Navbar
document.addEventListener("DOMContentLoaded", function(){
    ElAutoHide = document.querySelector('.autohide');
    ElDropDown = document.querySelector('.dropdown-menu')
    if(ElAutoHide){
        var LastScrollTop = 5;
        window.addEventListener('scroll', function() {
            let ScrollTop = window.scrollY;
            if(ScrollTop < LastScrollTop) {
                ElAutoHide.classList.remove('scrolled-down');
                ElAutoHide.classList.add('scrolled-up');
            } else {
                ElAutoHide.classList.remove('scrolled-up');
                ElAutoHide.classList.add('scrolled-down');
                ElDropDown.classList.remove('show');
            }
            LastScrollTop = ScrollTop;
        }); 
    }  
}); 