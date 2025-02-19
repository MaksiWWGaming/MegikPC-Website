console.log("Working JS");

// Create Nav --STARTS HERE--

// Array with nav items
const navItems = [
    { 
        label: "Početna", 
        link: "index.html",
    },
    { 
        label: "Usluge", 
        link: "", 
        dropdown: [
            { label: "Laptop Servis", link: "pages/Laptop.html" },
            { label: "Desktop Servis", link: "pages/Desktop.html" },
            { label: "Online Rešenja", link: "pages/Online.html" },
            { label: "Ostala Rešenja", link: "pages/Other.html" },
        ]
    },
    { 
        label: "Kontakt", 
        link: "pages/Contact.html",
    },
    {
        label: "Prodaja",
        link: "https://www.kupujemprodajem.com/maksim-megik-servis/svi-oglasi/1781418/1",
    },
];

//Opens Prodaja in new tab
$(document).ready(function() {
    $(".nav-item a").each(function() {
        if ($(this).text().includes("Prodaja")) {
            $(this).attr("target", "_blank").attr("rel", "noopener noreferrer");
        }
    });
});

// Pagination
const CurrentPath = window.location.pathname;
const IsRootPage = CurrentPath === '/'; //Check if on root

function getLink(RelativePath) {
    if (IsRootPage) {
        return RelativePath;
    } else if (RelativePath.includes("kupujem")){
        return 'https://www.kupujemprodajem.com/maksim-megik-servis/svi-oglasi/1781418/1';
    } else if (RelativePath.includes("index")){
        return '../index.html';
    } else {
        return `../${RelativePath}`; // Go to root, then to page
    }
}

// Function to create a dropdown menu
function createDropdownMenu(DropdownItems) {
    const Dropdown = document.createElement("li");
    Dropdown.classList.add("nav-item", "dropdown");

    const DropdownLink = document.createElement("a");
    DropdownLink.classList.add("nav-link", "dropdown-t");
    DropdownLink.setAttribute("role", "button");
    DropdownLink.setAttribute("data-bs-toggle", "dropdown");
    DropdownLink.setAttribute("aria-expanded", "false");
    DropdownLink.innerHTML = `${DropdownItems.label} <i class="fa fa-caret-down" aria-hidden="true"></i>`;

    const DropdownMenu = document.createElement("ul");
    DropdownMenu.classList.add("dropdown-menu");

    DropdownItems.dropdown.forEach(item => {
        const DropdownItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("dropdown-item");
        link.setAttribute("href", getLink(item.link));
        link.textContent = item.label;
        DropdownItem.appendChild(link);
        DropdownMenu.appendChild(DropdownItem);
    });

    Dropdown.appendChild(DropdownLink);
    Dropdown.appendChild(DropdownMenu);

    return Dropdown;
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
LogoLink.setAttribute("href", getLink("/index.html"));

// Add logo link image
const LogoImage = document.createElement("img");
LogoImage.classList.add("img-fluid", "col-4");
LogoImage.setAttribute("src", "/img/Trademarks/banner.webp");
LogoImage.setAttribute("alt", "Megik PC Logo");
LogoImage.setAttribute("width", "200");
LogoImage.setAttribute("height", "100");
LogoLink.appendChild(LogoImage);

// Add hamburger menu
const HamburgerMenu = document.createElement("button");
HamburgerMenu.classList.add("navbar-toggler", "mt-2", "mt-lg-0");
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

const LanguageButton = document.createElement("i");
LanguageButton.classList.add("fa-solid", "fa-globe");
LanguageButton.setAttribute("id", "Language");

NavbarCollapse.appendChild(NavbarList);
NavbarCollapse.appendChild(DarkModeButton);
NavbarCollapse.appendChild(LanguageButton);

DivContainer.appendChild(LogoLink);
DivContainer.appendChild(HamburgerMenu);
DivContainer.appendChild(NavbarCollapse);

Nav.appendChild(DivContainer);

document.querySelector('#navbar-container').appendChild(Nav);

console.log("Dark Mode Button:", document.getElementById("DarkMode"));
console.log("Language Button:", document.getElementById("Language"));

// Add active id on current page
const CurrentPage = window.location.pathname;
const NavLinks = document.querySelectorAll(".nav-link");
console.log("Current page link: " + CurrentPage);

NavLinks.forEach(link => {
    if (link.getAttribute("href") === ".." + CurrentPage || link.getAttribute("href") === ".." + '/' + CurrentPage) {
        link.classList.add("active");
    }
});

NavLinks.forEach(link => {
    if (CurrentPage == "/" && link.textContent.trim() === "Početna") {
        link.classList.add("active");
    }
});

document.querySelectorAll(".dropdown-item").forEach(dropdownItem => {
    console.log("Selected dropdown href " + dropdownItem.getAttribute("href"));
    if (dropdownItem.getAttribute("href") === ".." + CurrentPage) {
        dropdownItem.classList.add("active");
        const dropdownToggle = dropdownItem.closest(".dropdown").querySelector(".dropdown-t");
        if (dropdownToggle) {
            dropdownToggle.classList.add("active");
        }
    }
});

//Create nav --ENDS HERE--  

//Create footer

$(document).ready(function () {
    const CurrentYear = new Date().getFullYear();
    const FooterDiv = `
                    <div class="col-12 col-sm-8 col-lg-10">
                        <span class="mb-4 mb-md-0">&copy; 2024 - <span id="MegikCopyYear">${CurrentYear}</span> Megik PC</span> 
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="col-12 col-sm-4 col-lg-2">
                        <ul>
                            <li>Pon - Pet: 10:00 - 19:00</li>
                            <li>Subota: 10:00 - 16:00</li>
                            <li>Nedelja: Neradan dan </li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                    </div>
    `;
    $('#FooterDiv').html(FooterDiv);
    $('#MegikCopyYear').text(CurrentYear);
});

//Retain darkmode icon
$('#DarkMode').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("fa-moon fa-sun");
    const DarkBody = $("body");
    DarkBody.toggleClass("dark-mode");
    localStorage.setItem('RememberDarkMode', DarkBody.hasClass('dark-mode'));
});

$(document).ready(function () {
    const DarkMode = localStorage.getItem('RememberDarkMode');
    const DarkModeIcon = $("#DarkMode");

    if (DarkMode === 'true') {
        $("body").addClass("dark-mode");
        DarkModeIcon.addClass("fa-sun").removeClass("fa-moon");
        console.log("You have dark mode saved from last session");
    } else {
        $("body").removeClass("dark-mode");
        DarkModeIcon.addClass("fa-moon").removeClass("fa-sun");
        console.log("You have light mode saved from last session");
    }
});

//Language button
$('#Language').click(function (e) { 
    e.preventDefault();
        var toastHTML = `
        <div class="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                English language currently not available.<br>
                Please check again later.
            </div>
        </div>`;

    // Append toast to the body or a container
    var toastContainer = $(".toast-container");
    if (toastContainer.length === 0) {
        toastContainer = $('<div class="toast-container position-fixed bottom-0 end-0 p-3"></div>');
        $("body").append(toastContainer);
    }
    toastContainer.append(toastHTML);

    // Initialize and show the toast
    var toastElement = toastContainer.find(".toast").last();
    var toast = new bootstrap.Toast(toastElement[0]);
    toast.show();

    // setTimeout(() => {
    //     window.location.href = "en/index.html";
    // }, 500); // Redirects after 3 seconds
});

$(document).ready(function () {

});



//Auto Hide Navbar
$(document).ready(function () {
    var ElAutoHide = $('.autohide');
    var ElDropDown = $('.dropdown-menu');
    if (ElAutoHide.length) {
        var LastScrollTop = 5;
        $(window).on('scroll', function () {
            var ScrollTop = $(this).scrollTop();
            if (ScrollTop < LastScrollTop) {
                ElAutoHide.removeClass('scrolled-down').addClass('scrolled-up');
            } else {
                ElAutoHide.removeClass('scrolled-up').addClass('scrolled-down');
                ElDropDown.removeClass('show');
            }
            LastScrollTop = ScrollTop;
        });
    }
});