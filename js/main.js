// Nav toggle (mobile)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.primary");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Talks & Insights filter tabs
  const tabs = document.querySelectorAll(".filter-tabs button");
  const cards = document.querySelectorAll(".talk-card");
  if (tabs.length && cards.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.dataset.filter;
        cards.forEach((card) => {
          if (category === "all" || card.dataset.category === category) {
            card.hidden = false;
          } else {
            card.hidden = true;
          }
        });
      });
    });
  }

  // Contact form (no backend wired yet — placeholder confirmation)
  const form = document.querySelector("form.contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.querySelector(".hp").value) return; // honeypot triggered, silently drop
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks — this form isn't wired to an inbox yet. Please email ali@hantal.com directly for now.";
        status.style.display = "block";
      }
    });
  }
});
