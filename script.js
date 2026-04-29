const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

const quoteForm = document.querySelector(".quote-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    // Placeholder submit handler: connect this to your backend/email service.
    event.preventDefault();
    alert("Thank you! Your quote request has been received.");
    quoteForm.reset();
  });
}
