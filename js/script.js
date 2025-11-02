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
            { label: "Serviserske Usluge", link: "pages/Services.html" },
            { label: "Izrada Web Sajtova", link: "pages/WebDev.html" },
        ]
    },
    { 
        label: "Kontakt", 
        link: "pages/Contact.html",
    },
    {
        label: "Prodaja",
        link: "https://www.kupujemprodajem.com/megik-servis/svi-oglasi/1781418/1",
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

// Function to create a dropdown menu using jQuery
function createDropdownMenu(DropdownItems) {
    const $Dropdown = $('<li>').addClass("nav-item dropdown");

    const $DropdownLink = $('<a>')
        .addClass("nav-link dropdown-t")
        .attr("role", "button")
        .attr("data-bs-toggle", "dropdown")
        .attr("aria-expanded", "false")
        .html(`${DropdownItems.label} <i class="fa fa-caret-down" aria-hidden="true"></i>`);

    const $DropdownMenu = $('<ul>').addClass("dropdown-menu");

    DropdownItems.dropdown.forEach(item => {
        const $DropdownItem = $('<li>');
        const $link = $('<a>')
            .addClass("dropdown-item")
            .attr("href", getLink(item.link))
            .text(item.label);
        $DropdownItem.append($link);
        $DropdownMenu.append($DropdownItem);
    });

    $Dropdown.append($DropdownLink);
    $Dropdown.append($DropdownMenu);

    return $Dropdown;
}

// Create navigation using jQuery
const $Nav = $('<nav>')
    .addClass("navbar navbar-expand-lg fixed-top autohide")
    .attr("id", "Navigation");

// Fluid container in Nav
const $DivContainer = $('<div>').addClass("container-fluid");

// Logo link
const $LogoLink = $('<a>')
    .addClass("navbar-brand")
    .attr("href", getLink("/index.html"));

// Add logo link image
const $LogoImage = $('<img>')
    .addClass("img-fluid")
    .attr({
        "src": "/img/Trademarks/banner.webp",
        "alt": "Megik PC Logo",
        "width": "280",
        "height": "80"
    })
    .css({
        "maxWidth": "220px",
        "height": "auto"
    });
$LogoLink.append($LogoImage);

// Add hamburger menu
const $HamburgerMenu = $('<button>')
    .addClass("navbar-toggler mt-2 mt-lg-0")
    .attr({
        "type": "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    });

const $HamburgerLines = $('<span>').addClass("navbar-toggler-icon");
$HamburgerMenu.append($HamburgerLines);

// Navbar-Collapse bootstrap class
const $NavbarCollapse = $('<div>')
    .addClass("collapse navbar-collapse")
    .attr("id", "navbarSupportedContent");

// Create the list of navbar items
const $NavbarList = $('<ul>').addClass("navbar-nav ms-auto mb-2 mb-lg-0");

// Loop through navItems to create the navigation
navItems.forEach(item => {
    const $NavItem = $('<li>').addClass("nav-item");

    // If the item has a dropdown
    if (item.dropdown) {
        $NavbarList.append(createDropdownMenu(item));
    } else {
        const $NavLink = $('<a>')
            .addClass("nav-link")
            .attr("href", getLink(item.link))
            .text(item.label);
        $NavItem.append($NavLink);
        $NavbarList.append($NavItem);
    }
});

$NavbarCollapse.append($NavbarList);
$DivContainer.append($LogoLink);
$DivContainer.append($HamburgerMenu);
$DivContainer.append($NavbarCollapse);

$Nav.append($DivContainer);

$('#navbar-container').append($Nav);

// Add active id on current page using jQuery
const CurrentPage = window.location.pathname;
console.log("Current page link: " + CurrentPage);

$(".nav-link").each(function() {
    const $link = $(this);
    if ($link.attr("href") === ".." + CurrentPage || $link.attr("href") === ".." + '/' + CurrentPage) {
        $link.addClass("active");
    }
});

$(".nav-link").each(function() {
    const $link = $(this);
    if (CurrentPage == "/" && $link.text().trim() === "Početna") {
        $link.addClass("active");
    }
});

$(".dropdown-item").each(function() {
    const $dropdownItem = $(this);
    console.log("Selected dropdown href " + $dropdownItem.attr("href"));
    if ($dropdownItem.attr("href") === ".." + CurrentPage) {
        $dropdownItem.addClass("active");
        const $dropdownToggle = $dropdownItem.closest(".dropdown").find(".dropdown-t");
        if ($dropdownToggle.length) {
            $dropdownToggle.addClass("active");
        }
    }
});

//Create nav --ENDS HERE--  

//Create modern footer

$(document).ready(function () {
    const CurrentYear = new Date().getFullYear();
    const FooterDiv = `
        <div class="container">
            <div class="row justify-content-center align-items-start">
                <!-- Kontakt Column -->
                <div class="col-lg-6 col-md-6 mb-4">
                    <div class="footer-center-section text-center">
                        <h5 class="footer-heading">Kontakt</h5>
                        <div class="footer-contact-links">
                            <div class="footer-contact-item">
                                <i class="fas fa-phone"></i>
                                <span><a href="tel:+3810605987444">060-5987-444</a></span>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-envelope"></i>
                                <span><a href="mailto:info@megikpc.com">info@megikpc.com</a></span>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-file-alt"></i>
                                <span><a href="/pages/MegikPC - Garantni Uslovi.pdf" target="_blank" rel="noopener noreferrer">Garantni uslovi</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Radno vreme Column -->
                <div class="col-lg-6 col-md-6 mb-4">
                    <div class="footer-hours-section text-center">
                        <h5 class="footer-heading">Radno vreme</h5>
                        <div class="footer-hours-list">
                            <div class="footer-hour-item">
                                <span>Ponedeljak - Petak:</span>
                                <span><strong>10:00 - 18:30</strong></span>
                            </div>
                            <div class="footer-hour-item">
                                <span>Subota:</span>
                                <span><strong>10:00 - 16:00</strong></span>
                            </div>
                            <div class="footer-hour-item">
                                <span>Nedelja:</span>
                                <span><strong>Zatvoreno</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="footer-divider">

            <div class="row">
                <div class="col-12 text-center">
                    <p class="footer-copyright">
                        &copy; 2024 - <span id="MegikCopyYear">${CurrentYear}</span> MegikPC. Sva prava zadržana.
                    </p>
                </div>
            </div>
        </div>
    `;
    $('#FooterDiv').html(FooterDiv);
    $('#MegikCopyYear').text(CurrentYear);
});