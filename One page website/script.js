// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery-image");

// Get lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".close");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// Keep track of the current image
let currentIndex = 0;


// Open lightbox when an image is clicked
galleryImages.forEach((image, index) => {

    image.addEventListener("click", function() {

        currentIndex = index;

        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;

        lightbox.style.display = "flex";

    });

});


// Close lightbox
closeButton.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// Show next image
nextButton.addEventListener("click", function(event) {

    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImage.src = galleryImages[currentIndex].src;
    lightboxImage.alt = galleryImages[currentIndex].alt;

});


// Show previous image
previousButton.addEventListener("click", function(event) {

    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    lightboxImage.src = galleryImages[currentIndex].src;
    lightboxImage.alt = galleryImages[currentIndex].alt;

});


// Close lightbox with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

});


// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextButton.click();
        }

        if (event.key === "ArrowLeft") {
            previousButton.click();
        }

    }

});