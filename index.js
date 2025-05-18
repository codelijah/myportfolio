
document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".typing-container"); // Select all instances
    const roles = ["Web Developer", "UI/UX Designer", "Frontend Engineer", "Tech Enthusiast"];
    
    textElements.forEach((textElement) => {
        let roleIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            let currentRole = roles[roleIndex];
            textElement.innerHTML = currentRole.substring(0, letterIndex) + `<span class="cursor">|</span>`;

            if (!isDeleting) {
                if (letterIndex < currentRole.length) {
                    letterIndex++;
                    setTimeout(typeEffect, 150);
                } else {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000);
                }
            } else {
                if (letterIndex > 0) {
                    letterIndex--;
                    setTimeout(typeEffect, 100);
                } else {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(typeEffect, 500);
                }
            }
        }

        typeEffect(); // Start the effect for each instance
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) { // Change background after scrolling 30px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Function to show active slides
function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

// Function to start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    }, 4000);
}

// Function to stop auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Dot navigation (clicking dots changes slides)
function setSlide(index) {
    slideIndex = index;
    showSlides();
}

// Start auto-slide on page load
startAutoSlide();
showSlides();

// Pause auto-slide when hovering over projects
document.querySelectorAll(".slide").forEach(slide => {
    slide.addEventListener("mouseenter", stopAutoSlide);
    slide.addEventListener("mouseleave", startAutoSlide);
});


// redirect code to thankyou.html  
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form behavior
    window.location.href = "thankyou.html"; // Redirect user
});


//menu line code
menu = document.querySelector(".menu");
menu.onclick = function() {
  navBar = document.querySelector(".nav");
  navBar.classList.toggle("active");
  menu = document.querySelector(".menu");
  menu.classList.toggle("active")
}
