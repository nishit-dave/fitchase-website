// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Feature Image Switcher
const featureCards = document.querySelectorAll(".feature-card");
const featureImage = document.getElementById("feature-image");

featureCards.forEach(card => {
  card.addEventListener("click", () => {
    const newImg = card.getAttribute("data-img");
    featureImage.src = newImg;

    featureCards.forEach(c => c.classList.remove("border-indigo-500", "bg-indigo-50"));
    card.classList.add("border-indigo-500", "bg-indigo-50");
  });
});

// Set first card active by default
if (featureCards.length > 0) {
  featureCards[0].classList.add("border-indigo-500", "bg-indigo-50");
}
