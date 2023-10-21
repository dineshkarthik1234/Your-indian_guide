// script.js
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

showSlide(); // Show the initial slide

setInterval(showSlide, 3000); // Change image every 3 seconds (adjust as needed)
