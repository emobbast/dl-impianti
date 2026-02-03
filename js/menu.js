document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".menu-close");
  const nav = document.querySelector(".site-header nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-hidden");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-hidden");
    });
  }

  document.querySelectorAll(".site-header nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-hidden");
    });
  });
});
