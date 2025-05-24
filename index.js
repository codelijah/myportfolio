
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

document.querySelectorAll(".nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("active");
        document.querySelector(".menu").classList.remove("active"); // Also resets the menu button state
    });
});

// Hide loader after page loads
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
    }, 7400); // Wait for the full animation (10s)
});

// skills percentage loading code 
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    const percentage = entry.target.getAttribute("data-width");
                    entry.target.style.width = percentage;
                    entry.target.style.transition = "width 4s ease-in-out"; 
                }, index * 500); // Adds a slight delay per skill
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

// services code slide effect 
document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".myservices-div");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.add(index % 2 === 0 ? "slide-left" : "slide-right"); // Alternates left and right
            }
        });
    }, { threshold: 0.5 });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
});
