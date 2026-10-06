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

        const rotateX = (y - centerY) / 80;
        const rotateY = (centerX - x) / 80;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX * -0.1}deg)
        rotateY(${rotateY * -0.1}deg)`;
    });
});


// =====================================================
// FUNCIÓN REUTILIZABLE PARA CARRUSELES
// =====================================================

function crearCarousel(
    slidesContainerSelector,
    slideSelector,
    prevBtnSelector,
    nextBtnSelector,
    dotSelector
) {

    const slidesContainer = document.querySelector(slidesContainerSelector);
    const slides = document.querySelectorAll(slideSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const dots = document.querySelectorAll(dotSelector);

    let currentIndex = 0;
    const totalSlides = slides.length;


    // Actualizar posición del carrusel
    function updateCarousel() {

        slidesContainer.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        // Actualizar los dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });


        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }


    // Botón siguiente
    nextBtn.addEventListener('click', () => {

        currentIndex =
            (currentIndex + 1) % totalSlides;

        updateCarousel();
    });


    // Botón anterior
    prevBtn.addEventListener('click', () => {

        currentIndex =
            (currentIndex - 1 + totalSlides) % totalSlides;

        updateCarousel();
    });


    // Dots
    dots.forEach(dot => {

        dot.addEventListener('click', (e) => {

            currentIndex =
                parseInt(e.currentTarget.dataset.index);

            updateCarousel();
        });

    });


    // Estado inicial
    updateCarousel();
}


// =====================================================
// INICIALIZAR CARRUSELES
// =====================================================

// Primer carrusel
crearCarousel(
    '.carousel-slides',
    '.slide',
    '.prev-btn',
    '.next-btn',
    '.dot'
);


// Segundo carrusel
crearCarousel(
    '.carousel-slides2',
    '.slide2',
    '.prev-btn2',
    '.next-btn2',
    '.dot2'
);

// Tercer carrusel
crearCarousel(
    '.carousel-slides3',
    '.slide3',
    '.prev-btn3',
    '.next-btn3',
    '.dot3'
);

// Cuarto carrusel
crearCarousel(
    '.carousel-slides4',
    '.slide4',
    '.prev-btn4',
    '.next-btn4',
    '.dot4'
);
