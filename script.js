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
  const ribbonWidth = ribbon.offsetWidth;

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

// For counter
const countersEl = document.querySelectorAll(".counter-field");

function incrementCounter(counterEl) {
  let currentNum = +counterEl.innerText;
  const dataCeil = counterEl.getAttribute("data-ceil");
  const increment = dataCeil / 40;
  currentNum = Math.ceil(currentNum + increment);

  if (currentNum < dataCeil) {
    setTimeout(() => incrementCounter(counterEl), 150);
    counterEl.innerText = currentNum;
  } else {
    counterEl.innerText = dataCeil;
  }
}

// For animation
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterEl = entry.target.querySelector(".counter-field");
          if (counterEl && !counterEl.dataset.counted) {
            counterEl.innerText = "0";
            incrementCounter(counterEl);
            counterEl.dataset.counted = "true";
          }
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
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
