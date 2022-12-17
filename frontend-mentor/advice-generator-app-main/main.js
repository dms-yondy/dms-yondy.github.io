const adviceButton = document.querySelector(".advice-button");
const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");

const getAdvice = async () => {
  const res = await (
    await fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
  ).json();
  return res.slip;
};

const updateAdvice = async () => {
  const { id, advice } = await getAdvice();
  adviceId.innerText = `ADVICE #${id}`;
  adviceContent.innerText = `"${advice}"`;
};

adviceButton.addEventListener("click", () => {
  updateAdvice();
});

window.addEventListener("DOMContentLoaded", () => {
  updateAdvice();
});
