const header_toggle = document.querySelector(".header_toggle");
const navbar_menu = document.querySelector(".navbar_menu");

header_toggle.addEventListener("click", () => {
  navbar_menu.classList.toggle("active");
});
