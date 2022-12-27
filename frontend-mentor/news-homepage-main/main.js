const navButton = document.querySelector(".nav__toggle");
const closeButton = document.querySelector(".close--button");
const overlay = document.querySelector(".overlay");

navButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("fixed");
  overlay.classList.add("add-overlay");
});

closeButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("fixed");
  overlay.classList.remove("add-overlay");
});
