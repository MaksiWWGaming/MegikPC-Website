// --- Global State ---
let products = [];
let currentModalProduct = null;
let currentImageIndex = 0;

// --- DOM Elements ---
const productGrid = document.getElementById('product-grid');
const productModal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const modalContactButton = document.getElementById('modal-contact-button');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const closeButton = document.querySelector('.close-button');

// --- Utility Functions ---

/**
 * Parses the content of product.txt into a structured object.
 * @param {string} text - The content of product.txt.
 * @returns {{name: string, price: string, description: string}}
 */
function parseProductText(text) {
    const data = {};
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    lines.forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim();
            data[key] = value;
        }
    });

    return {
        name: data.name || 'Unknown Product',
        price: data.price || 'Price N/A',
        description: data.description || 'No description provided.'
    };
}

/**
 * Creates a product card element for the grid.
 * @param {object} product - The product object.
 * @returns {HTMLElement} The product card div.
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);

    // Determine the path to the first image
    const firstImage = product.images.length > 0 ? product.images[0] : 'placeholder.jpg';
    const imagePath = `../prodaja/${encodeURIComponent(product.id)}/${encodeURIComponent(firstImage)}`;

    card.innerHTML = `
        <img src="${imagePath}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;

    // 6.3 Add click handler
    card.addEventListener("click", () => openModal(product));

    return card;
}

/**
 * Renders all products to the grid.
 */
function renderProductGrid() {
    productGrid.innerHTML = ''; // Clear existing content
    products.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}

// --- Modal Functions ---

/**
 * Updates the modal image based on the current index.
 */
function updateModalImage() {
    if (!currentModalProduct || currentModalProduct.images.length === 0) return;

    const imageFilename = currentModalProduct.images[currentImageIndex];
    const imagePath = `../prodaja/${encodeURIComponent(currentModalProduct.id)}/${encodeURIComponent(imageFilename)}`;
    
    modalImage.src = imagePath;
    modalImage.alt = currentModalProduct.name + ' - Image ' + (currentImageIndex + 1);
}

/**
 * Handles image navigation in the modal slider.
 * @param {number} direction - 1 for next, -1 for previous.
 */
function navigateSlider(direction) {
    if (!currentModalProduct || currentModalProduct.images.length === 0) return;

    const totalImages = currentModalProduct.images.length;
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateModalImage();
}

/**
 * Opens the product modal.
 * @param {object} product - The product object to display.
 */
function openModal(product) {
    currentModalProduct = product;
    currentImageIndex = 0; // Start at the first image

    // Update text content
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = product.price;
    modalProductDescription.textContent = product.description;
    
    // Update contact button (assuming a generic contact email for now)
    // You might want to customize this based on product or use a contact form link
    modalContactButton.href = `tel:+3810605987444`;

    // Update image slider
    updateModalImage();

    // Show modal
    productModal.classList.remove('hidden');
    productModal.style.display = 'flex';
}

/**
 * Closes the product modal.
 */
function closeModal() {
    productModal.classList.add('hidden');
    productModal.style.display = 'none';
    currentModalProduct = null;
    currentImageIndex = 0;
}

// --- Event Listeners ---

// Close modal when clicking the close button
closeButton.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeModal();
    }
});

// Slider navigation
arrowLeft.addEventListener('click', () => navigateSlider(-1));
arrowRight.addEventListener('click', () => navigateSlider(1));

// --- Data Loading ---

/**
 * Simulates fetching product data from a server endpoint.
 * In a real scenario, this would be an AJAX call to a backend script 
 * that lists directories and reads files.
 * 
 * Since we cannot implement the backend, we will use a placeholder function 
 * that returns the structure we need.
 * 
 * NOTE: The actual implementation of listing folders and files dynamically 
 * via client-side JS is impossible without a server-side component.
 * We assume the server provides a JSON endpoint with the required data structure.
 */
const PRODUCT_STRUCTURES = [
    {
        id: "HP ProBook 430 G5",
        images: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpg", "1 (6).jpg", "1 (7).jpg", "1 (8).jpg", "1 (9).jpg", "2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg"]
    },
    {
        id: "Grandstream GXP1628",
        images: ["IP_Telefon_1.jpg", "IP_Telefon_2.jpg", "IP_Telefon_3.jpg", "IP_Telefon_4.jpg"]
    },
    {
        id: "Lenovo Yoga ThinkPad X1 Slušalice",
        images: ["lenovo yoga (1).jpg", "lenovo yoga (2).jpg", "lenovo yoga (3).jpg", "lenovo yoga (4).jpg", "lenovo yoga (5).jpg", "lenovo yoga (6).jpg", "lenovo yoga (7).jpg"]
    },
    {
        id: "Philips 243V5L 24'' FHD Monitor",
        images: ["20250819_132304.jpg", "20250819_132337.jpg", "20250819_132343.jpg", "20250819_132347.jpg"]
    },
    {
        id: "Kancelarijske Stolice",
        images: ["stolica 1 (1).jpg", "stolica 1 (2).jpg", "stolica 1 (3).jpg", "Stolica 3 (1).jpg", "Stolica 3 (2).jpg", "Stolica 3 (3).jpg", "Stolica 4 (1).jpg", "Stolica 4 (2).jpg", "Stolica 4 (3).jpg", "Stolica 5 (1).jpg", "Stolica 5 (2).jpg", "Stolica 5 (3).jpg", "Stolica 6.jpg"]
    },
    {
        id: "TP-Link TL-SL1226 24 Port Switch",
        images: ["switch (1).jpg", "switch (2).jpg", "switch (3).jpg", "switch (4).jpg", "switch (5).jpg"]
    },
    {
        id: "ThinkPad UltraSlim USB DVD Burner",
        images: ["Thinkpad citac (1).jpg", "Thinkpad citac (2).jpg"]
    }
];


/**
 * Fetches product data by dynamically fetching product.txt for each product ID.
 * This simulates the required AJAX loading process.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of structured product objects.
 */
async function fetchProductData() {
    const productPromises = PRODUCT_STRUCTURES.map(async (structure) => {
        const folderName = structure.id;
        const productTxtPath = `../prodaja/${encodeURIComponent(folderName)}/product.txt`;

        try {
            // Fetch product.txt content
            const response = await fetch(productTxtPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${productTxtPath}: ${response.statusText}`);
            }
            const text = await response.text();
            
            // Parse text and combine with image list
            const productDetails = parseProductText(text);
            
            return {
                id: folderName,
                name: productDetails.name,
                price: productDetails.price,
                description: productDetails.description,
                images: structure.images
            };
        } catch (error) {
            console.error(`Error loading product data for ${folderName}:`, error);
            // Return a placeholder product if loading fails
            return {
                id: folderName,
                name: `Error Loading: ${folderName}`,
                price: 'N/A',
                description: 'Could not load product details.',
                images: []
            };
        }
    });

    return Promise.all(productPromises);
}

/**
 * Main function to load products and render the grid.
 */
async function loadProducts() {
    try {
        const rawProducts = await fetchProductData();
        
        // Filter out any products that failed entirely (e.g., if we returned null instead of error object)
        products = rawProducts.filter(p => p);

        renderProductGrid();
    } catch (error) {
        console.error('Failed to load products:', error);
        productGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', loadProducts);