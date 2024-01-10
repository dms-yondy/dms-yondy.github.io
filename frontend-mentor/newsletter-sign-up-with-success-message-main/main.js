const mainSection = document.querySelector(".main");
const signUpSection = document.querySelector(".sign-up-section");
const successSection = document.querySelector(".success-section");
const subscribeButton = document.querySelector(".subscribe-button");
const dismissButton = document.querySelector(".dismiss-button");

subscribeButton.addEventListener("click", () => {
  signUpSection.classList.add("display-none");
  successSection.classList.remove("display-none");
  mainSection.classList.remove("main");
  mainSection.classList.add("main-success");
});

dismissButton.addEventListener("click", () => {
  successSection.classList.add("display-none");
  signUpSection.classList.remove("display-none");
  mainSection.classList.remove("main-success");
  mainSection.classList.add("main");
});
