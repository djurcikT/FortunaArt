// For mobile display
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const button = document.getElementById("hamburger");

  if (!menu || !button) {
    console.error("Hamburger button or mobile menu not found!");
    return;
  }

  console.log("Script loaded, event listener added.");

  button.addEventListener("click", function () {
    console.log("Hamburger clicked! Toggling menu.");
    menu.classList.toggle("show");
    console.log("Current class list:", menu.classList);
  });

  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      console.log("Link clicked! Closing menu.");
      menu.classList.remove("show");
    });
  });
});

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
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

// For Carousel
let index = 0;
let autoSlideInterval;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-img");
const totalSlides = slides.length;

function updateSlide() {
  const slideWidth = track.clientWidth; // Ensures correct width calculation
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

function moveSlide(step) {
  index = (index + step + totalSlides) % totalSlides;
  updateSlide();
  resetAutoSlide();
}

function autoSlide() {
  moveSlide(1);
  autoSlideInterval = setTimeout(autoSlide, 5000);
}

function resetAutoSlide() {
  clearTimeout(autoSlideInterval);
  autoSlideInterval = setTimeout(autoSlide, 5000);
}

window.addEventListener("resize", updateSlide);

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

// For join ribbon
function scrollImages(amount) {
  const ribbon = document.getElementById("imageRibbon");
  const totalWidth = ribbon.scrollWidth;
  const ribbonWidth = ribbon.clientWidth;

  ribbon.scrollBy({ left: amount, behavior: "smooth" });

  setTimeout(() => {
    if (ribbon.scrollLeft <= 0) {
      ribbon.scrollLeft = totalWidth - ribbonWidth;
    }

    if (ribbon.scrollLeft + ribbonWidth >= totalWidth) {
      ribbon.scrollLeft = 0;
    }
  }, 300);
}

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
