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
      { label: "Serviserske Usluge", link: "pages/Services.html" },
      { label: "Izrada Web Sajtova", link: "pages/WebDev.html" },
    ],
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
$(document).ready(function () {
  $(".nav-item a").each(function () {
    if ($(this).text().includes("Prodaja")) {
      $(this).attr("target", "_blank").attr("rel", "noopener noreferrer");
    }
  });
});

// Pagination
const CurrentPath = window.location.pathname;
const IsRootPage = CurrentPath === "/"; //Check if on root

function getLink(RelativePath) {
  if (IsRootPage) {
    return RelativePath;
  } else if (RelativePath.includes("kupujem")) {
    return "https://www.kupujemprodajem.com/maksim-megik-servis/svi-oglasi/1781418/1";
  } else if (RelativePath.includes("index")) {
    return "../index.html";
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

  DropdownItems.dropdown.forEach((item) => {
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
LogoImage.classList.add("img-fluid");
LogoImage.setAttribute("src", "/img/Trademarks/banner.webp");
LogoImage.setAttribute("alt", "Megik PC Logo");
LogoImage.setAttribute("width", "280");
LogoImage.setAttribute("height", "80");
LogoImage.style.maxWidth = "220px";
LogoImage.style.height = "auto";
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
navItems.forEach((item) => {
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
// const DarkModeButton = document.createElement("i");
// DarkModeButton.classList.add("fa-solid", "fa-moon");
// DarkModeButton.setAttribute("id", "DarkMode");

NavbarCollapse.appendChild(NavbarList);
// NavbarCollapse.appendChild(DarkModeButton);

DivContainer.appendChild(LogoLink);
DivContainer.appendChild(HamburgerMenu);
DivContainer.appendChild(NavbarCollapse);

Nav.appendChild(DivContainer);

document.querySelector("#navbar-container").appendChild(Nav);

// Add active id on current page
const CurrentPage = window.location.pathname;
const NavLinks = document.querySelectorAll(".nav-link");
console.log("Current page link: " + CurrentPage);

NavLinks.forEach((link) => {
  if (
    link.getAttribute("href") === ".." + CurrentPage ||
    link.getAttribute("href") === ".." + "/" + CurrentPage
  ) {
    link.classList.add("active");
  }
});

NavLinks.forEach((link) => {
  if (CurrentPage == "/" && link.textContent.trim() === "Početna") {
    link.classList.add("active");
  }
});

document.querySelectorAll(".dropdown-item").forEach((dropdownItem) => {
  console.log("Selected dropdown href " + dropdownItem.getAttribute("href"));
  if (dropdownItem.getAttribute("href") === ".." + CurrentPage) {
    dropdownItem.classList.add("active");
    const dropdownToggle = dropdownItem
      .closest(".dropdown")
      .querySelector(".dropdown-t");
    if (dropdownToggle) {
      dropdownToggle.classList.add("active");
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
  $("#FooterDiv").html(FooterDiv);
  $("#MegikCopyYear").text(CurrentYear);
});

//Retain darkmode icon
