let ratingScore;
let selectedRating;
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit-button");
const ratings = document.querySelectorAll(".rating");
const ratingText = document.querySelector(".selected-rating");

ratings.forEach((rating) =>
  rating.addEventListener("click", (e) => {
    ratingScore = e.target.textContent;
    if (selectedRating) {
      selectedRating.classList.remove("selected-button");
    }
    selectedRating = e.target;
    selectedRating.classList.add("selected-button");
  })
);

submitButton.addEventListener("click", () => {
  ratingCard.classList.add("hide-card");
  thanksCard.classList.remove("hide-card");
  ratingText.textContent = `You selected ${ratingScore} out of 5`;
});
