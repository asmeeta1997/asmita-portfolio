document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  initializeHamburgerMenu();
  setupSmoothScrolling();
  handleFormSubmission();
}

function initializeHamburgerMenu() {
  const hamburger = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburger || !navMenu) {
    console.error("Hamburger menu elements not found");
    return;
  }

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", smoothScroll);
  });
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

function handleFormSubmission() {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted! (Note: This is a demo, no actual submission occurs)");
    form.reset();
  });
}