// Define available products and their corresponding HTML pages
const availableProducts = {
    "gaming laptop": "gaminglaptop.html",
    "mechanical keyboard": "mechanical-keyboard.html",
    "gaming monitor": "gaming-monitor.html"
};

document.getElementById("search-button").addEventListener("click", function() {
    handleSearch();
});

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

function handleSearch() {
    const searchQuery = document.getElementById("search-input").value.trim().toLowerCase();

    if (!searchQuery) return;

    // Store search history in localStorage
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!searchHistory.includes(searchQuery)) {
        searchHistory.push(searchQuery);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }

    // Check if the product exists
    if (availableProducts[searchQuery]) {
        // Redirect to the product's HTML page
        window.location.href = availableProducts[searchQuery];
    } else {
        // Show popup if product is not found
        document.getElementById("popup-message").style.display = "block";
        setTimeout(() => document.getElementById("popup-message").style.display = "none", 2000);
    }
}

// Auto-suggest search history
document.getElementById("search-input").addEventListener("input", function() {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const datalist = document.getElementById("search-history");

    datalist.innerHTML = "";
    history.forEach(item => {
        let option = document.createElement("option");
        option.value = item;
        datalist.appendChild(option);
    });
});

// Mobile Menu Toggle
document.getElementById("mobile-menu").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Product Img Slide
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".slider img");
    console.log("Images found:", images.length); // Debugging line

    function showImage(index) {
        images.forEach((img, i) => img.style.display = (i === index) ? "block" : "none");
    }

    if (images.length > 0) {
        showImage(currentImageIndex);
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
    });
});
// Get the button and the dropdown box
const dropdownButton = document.getElementById("dropdownButton");
const dropdownBox = document.getElementById("dropdownBox");

// Toggle the visibility of the dropdown box when the button is clicked
dropdownButton.addEventListener("click", function() {
    // Toggle the "hidden" class to show/hide the dropdown
    dropdownBox.classList.toggle("hidden");
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}