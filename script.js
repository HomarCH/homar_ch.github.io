//Background effect---------------------------------------------------
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const cards = document.querySelectorAll(".card");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cards.forEach(card => {

        const rect = card.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = (y - centerY) / 40;
        const rotateY = (centerX - x) / 40;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX * -0.1}deg)
        rotateY(${rotateY * -0.1}deg)`;
    });
});


//Carousel Script------------------------------------------------------
const slidesContainer = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the carousel position and dots
function updateCarousel() {
  // Shift slides horizontally by 100% * current index
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Update active dot indicator
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Next Button Event
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Loops back to 0 at the end
  updateCarousel();
});

// Previous Button Event
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loops to last slide at 0
  updateCarousel();
});

// Dot Indicators Click Event
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel();
  });
});