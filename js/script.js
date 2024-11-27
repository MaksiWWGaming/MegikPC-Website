console.log("Working JS");

// Create Nav --STARTS HERE--

// Array with nav items
const navItems = [
    { label: "Početna", link: "index.html" },
    { 
        label: "Usluge", 
        link: "", 
        dropdown: [
            { label: "Servisiranje laptopova", link: "pages/services/LaptopServis.html" },
            { label: "Servisiranje desktopova", link: "pages/services/DekstopServis.html" },
            { label: "Online podrška", link: "pages/services/OnlineSupport.html" },
            { label: "Ostalo", link: "pages/services/Other.html" }
        ]
    },
    { label: "Kontakt", link: "pages/Contact.html" },
    { label: "O nama", link: "pages/About_Us.html" }
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
LogoImage.setAttribute("src", "/img/Trademarks/banner.png");
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


// Add elements to navbar collapse
NavbarCollapse.appendChild(NavbarList);
NavbarCollapse.appendChild(DarkModeButton);

// Add everything to the navigation container
DivContainer.appendChild(LogoLink);
DivContainer.appendChild(HamburgerMenu);
DivContainer.appendChild(NavbarCollapse);

Nav.appendChild(DivContainer);

// Append the nav to the document
document.querySelector('#navbar-container').appendChild(Nav);

// Add active id on current page currently not working
const CurrentPage = window.location.pathname;
const NavLinks = document.querySelectorAll(".navbar-nav .nav-link");

NavLinks.forEach(link => {
    if (link.getAttribute("href") === CurrentPage) {
        link.classList.add("active");
    }
});

//Create nav --ENDS HERE--  

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
    el_autohide = document.querySelector('.autohide');
    el_dropdown = document.querySelector('.dropdown-menu')
    if(el_autohide){
        var last_scroll_top = 5;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
                el_dropdown.classList.remove('show');
            }
            last_scroll_top = scroll_top;
        }); 
    }  
}); 

//Auto add year for copyright
document.getElementById("MegikCopyYear").textContent = new Date().getFullYear();

