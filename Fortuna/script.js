// For mobile display
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// For scroll
document
  .querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for fixed header if needed
          behavior: "smooth",
        });
      }
    });
  });

// For Carousel
let index = 0;
function showSlide(n) {
  let slides = document.querySelectorAll(".carousel-img");
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[n].style.display = "block";
}

function prevSlide() {
  index =
    index > 0
      ? index - 1
      : document.querySelectorAll(".carousel-img").length - 1;
  showSlide(index);
}

function nextSlide() {
  index =
    index < document.querySelectorAll(".carousel-img").length - 1
      ? index + 1
      : 0;
  showSlide(index);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(autoSlide, 5000);
});

// For cursor
document.addEventListener("mousemove", (e) => {
  const logo = document.querySelector(".cursor-logo");
  const offsetX = 20;
  const offsetY = 20;
  logo.style.left = `${e.pageX + offsetX}px`;
  logo.style.top = `${e.pageY + offsetY}px`;
});

// For Home arrow
const backToTopButton = document.getElementById("topArrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
