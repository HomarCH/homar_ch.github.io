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
        rotateX(${rotateX * 0.1}deg)
        rotateY(${rotateY * 0.1}deg)`;
    });
});