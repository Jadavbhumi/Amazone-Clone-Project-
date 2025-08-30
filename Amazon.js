// Hero section image slider

const hero = document.querySelector(".hero-section");
const images = ["hero_image.jpg", "hero_image2.jpg", "hero_image3.jpg"];
let index = 0;

function showImage(i) {
    hero.style.backgroundImage = `url(${images[i]})`;
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

// Show initial image
showImage(index);


// Select all product boxes
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    // Highlight box on hover
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.style.boxShadow = "none";
    });

});


// Select the cart elements
const cart = document.querySelector(".nav-cart");
let cartCount = 0;

// For each product box
boxes.forEach(box => {
    // Click anywhere on the box to add to cart
    box.addEventListener("click", () => {
        cartCount++; // increase cart count
        cart.textContent = `Cart (${cartCount})`; // update cart display
        alert(`${box.querySelector("h2").textContent} added to cart!`);
    });
});


