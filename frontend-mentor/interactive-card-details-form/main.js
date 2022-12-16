const thankyouElement = document.querySelector(".thank-you");
const formElement = document.querySelector("form");
const confirmButton = document.querySelector(".confirm-button");

const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const expMM = document.querySelector("#exp-mm");
const expYY = document.querySelector("#exp-yy");
const cardCode = document.querySelector("#cvc");

const displayName = document.querySelector(".display-name");
const displayNumber = document.querySelector(".card-number");
const displayExpDate = document.querySelector(".display-exp-date");
const displayCVC = document.querySelector(".csc");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  element.classList.add("error-outline");
  errorDisplay.innerText = message;
};

const removeError = (element) => {
  const inputControl = element.parentElement;
  console.log("input control", inputControl);
  const errorDisplay = inputControl.querySelector(".error");
  element.classList.remove("error-outline");
  errorDisplay.textContent = "";
};

const onlyDigits = (str) => {
  return /^\d+$/.test(str);
};

const validateInputs = () => {
  const name = cardName.value.trim();
  const number = cardNumber.value.trim();
  const mm = expMM.value.trim();
  const yy = expYY.value.trim();
  const cvc = cardCode.value.trim();

  let valid = true;

  if (name === "") {
    setError(cardName, "Can't be blank");
    valid = false;
  } else {
    removeError(cardName);
    displayName.innerText = name.toUpperCase();
  }
  console.log(number, onlyDigits(number));
  if (number === "") {
    setError(cardNumber, "Can't be blank");
    valid = false;
  } else if (!onlyDigits(number)) {
    setError(cardNumber, "Wrong format. Can only be numbers.");
    valid = false;
  } else if (number.length != 16) {
    setError(cardNumber, "Card number must be 16 digits");
    valid = false;
  } else {
    removeError(cardNumber);
    const arr = number.match(/\d{1,4}/g);
    const children = Array.from(displayNumber.children);
    children.forEach((element, index) => {
      element.innerText = arr[index];
    });
  }
  let monthErrorSet = false;
  if (mm === "") {
    setError(expMM, "Can't be blank");
    monthErrorSet = true;
    valid = false;
  } else if (Number(mm) < 1 || Number(mm) > 12) {
    setError(expMM, "MM must be between 1 and 12");
    monthErrorSet = true;
    valid = false;
  } else {
    removeError(expMM);
    displayExpDate.innerHTML =
      (mm.length == 1 ? 0 + mm : mm) + displayExpDate.innerHTML.slice(2);
  }

  if (yy === "") {
    setError(expYY, "Can't be blank");
  } else {
    if (!monthErrorSet) removeError(expYY);
    displayExpDate.innerHTML =
      displayExpDate.innerHTML.slice(0, 3) + (yy.length == 1 ? 0 + yy : yy);
  }

  if (cvc === "") {
    setError(cardCode, "Can't be blank");
    valid = false;
  } else {
    removeError(cardCode);
    displayCVC.innerText = cvc;
  }
  return valid;
};

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateInputs()) {
    formElement.classList.add("hidden");
    thankyouElement.classList.remove("hidden");
  }
});

cardName.addEventListener("input", (event) => {
  const element = event.target;
  element.value = element.value.slice(0, 32);
});

cardNumber.addEventListener("input", (event) => {
  const element = event.target;
  element.value = element.value.slice(0, 16).replace(/\s+/g, "");
});

expMM.addEventListener("input", (event) => {
  const element = event.target;
  element.value = element.value.slice(0, 2);
});

expYY.addEventListener("input", (event) => {
  const element = event.target;
  element.value = element.value.slice(0, 2);
});

cardCode.addEventListener("input", (event) => {
  const element = event.target;
  element.value = element.value.slice(0, 3);
});
