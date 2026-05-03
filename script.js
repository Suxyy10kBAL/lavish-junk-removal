/* ─────────────────────────────────────────────────────────────────
   LAVISH JUNK REMOVAL — script.js
   Handles: hamburger menu, active nav, footer year, estimate form
   ───────────────────────────────────────────────────────────────── */

// ── Footer year ──────────────────────────────────────────────────
const yearEls = document.querySelectorAll(".js-year");
yearEls.forEach((el) => { el.textContent = new Date().getFullYear(); });

// ── Highlight active nav link based on current page ───────────────
(function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const page = href.split("/").pop().split("#")[0] || "index.html";
    if (page === path) link.classList.add("active");
  });
})();

// ── Hamburger menu ────────────────────────────────────────────────
const menuToggle = document.querySelector(".menu-toggle");
const nav        = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on nav-link tap
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ── Estimate form ─────────────────────────────────────────────────
// On Netlify, data-netlify="true" means Netlify intercepts the POST
// and handles everything — no JS needed for production.
// On localhost / file://, we show an inline success message.
const estimateForms = document.querySelectorAll('form[name="estimate"]');

estimateForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.protocol === "file:";

    if (!isLocal) return; // let Netlify handle it on production

    e.preventDefault();

    // Swap form for a success message
    form.innerHTML = `
      <div class="form-success">
        <div class="form-success-icon">✓</div>
        <h3>Request Received!</h3>
        <p>Thanks — we'll review your details and get back to you shortly with a free estimate.</p>
        <p style="margin-top:0.75rem">
          Need us faster?
          <!-- PHONE: update href and text below -->
          <a href="tel:++17789384235" style="color:var(--gold)">(778) 938-4235</a>
        </p>
      </div>`;
  });
});
