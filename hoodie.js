const products = [
    {
        mainImage: "images/hoodie-og.png",
        title: "OG Run Club Hoodie",
        price: "$120.00",
        thumbnails: [
            "hoodies/og-runclub-front.png",
            "hoodies/og-runclub-zoom.png",
            "hoodies/og-runclub-mes.webp",
        ],
    },
    {
        mainImage: "hoodies/athleticsdept-hoodie-front.png",
        title: "Athletics Dept Hoodie",
        price: "$115.00",
        thumbnails: [
            "hoodies/athleticsdept-hoodie-back.png",
            "hoodies/athleticsdept-hoodie-zoom.jpg",
            "hoodies/athleticsdept-hoodie-mes.webp"
        ]
    },
    {
        mainImage: "hoodies/athletics-depthoodie-gray-front.png",
        title: "Athletics Depth Hoodie (Gray)",
        price: "$115.00",
        thumbnails: [
            "hoodies/athletics-depthoodie-gray-back.png",
            "hoodies/athletics-depthoodie-gray-zoom.jpg",
            "hoodies/athleticsdept-hoodie-mes.webp"
        ]
    },
    {
        mainImage: "hoodies/athletics-depthoodie-green-front.png",
        title: "Athletics Depth Hoodie (Green)",
        price: "$115.00",
        thumbnails: [
            "hoodies/athletics-depthoodie-green-back.png",
            "hoodies/athletics-depthoodie-green-zoom.jpg",
            "hoodies/athleticsdept-hoodie-mes.webp"
        ]
    },
];

// Track the current product index
let currentIndex = 0;

// Get elements from the DOM
const mainImage = document.getElementById("main-image");
const itemTitle = document.getElementById("item-title");
const itemPrice = document.getElementById("item-price");
const thumbnailsContainer = document.querySelector(".thumbnails");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the main image, title, price, and thumbnails
function updateDisplay() {
    const product = products[currentIndex]; // Get current product data

    // Update main image
    mainImage.src = product.mainImage;

    // Update product title
    itemTitle.textContent = product.title;

    // Update product price
    itemPrice.textContent = product.price;

    // Clear and update thumbnails
    thumbnailsContainer.innerHTML = ""; // Clear any previous thumbnails

    product.thumbnails.forEach((thumbSrc, index) => {
        // Create new thumbnail image
        const thumbnail = document.createElement("img");
        thumbnail.src = thumbSrc;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add("thumbnail");
        thumbnail.setAttribute('data-index', index);

        // Append the thumbnail to the container
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// Function to move to the next product
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length; // Loop to the first product if at the end
    updateDisplay();
});

// Function to move to the previous product
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length; // Loop to the last product if at the beginning
    updateDisplay();
});

// Function to change the main image when a thumbnail is clicked
thumbnailsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("thumbnail")) {
        mainImage.src = event.target.src; // Change the main image to the clicked thumbnail
    }
});

// Initial display setup
updateDisplay();