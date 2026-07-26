const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);

  nav.classList.toggle("active");
  menuToggle.classList.toggle("active"); // 🔥 triggers hamburger animation
});
