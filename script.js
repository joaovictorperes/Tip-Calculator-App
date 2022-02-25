const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');
const radios = Array.from(
  document.querySelectorAll("input[name='option'] + label")
);
const totalOut = document.querySelector(".total p");
const amountOut = document.querySelector(".amount p");
const custom = document.querySelector("input[name='custom']");
const reset = document.querySelector(".button-reset");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
let value;
let key;
span1.style.color = "red";
span2.style.color = "red";

let radioValue = 0;
let divider = 0;

//Prevent select input radio
document.querySelector("input[name='custom']").onclick = () => {
  let radioTeste = document.querySelector("input[type='radio']:checked");

  if (radioTeste) {
    radioTeste.checked = false;

    if (value !== "" && Number(value) > 0 && key !== "" && Number(key) > 0) {
      if (custom.value !== "") {
        radioValue = custom.value;

        totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(
          2
        )}`;
        amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
      } else {
        radioValue = 0;

        totalOut.innerHTML = `$${divider.toFixed(2)}`;
        amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
      }
    }
  }
};

//Input custom
function inputCustom(event) {
  const customValue = event.target.value;
  radioValue = Number(customValue);

  if (customValue < 0) {
    custom.style.color = "red";

    totalOut.innerHTML = `$0.00`;
    amountOut.innerHTML = `$0.00`;
  } else {
    custom.style.color = "inherit";

    if (value !== "" && Number(value) > 0 && key !== "" && Number(key) > 0) {
      totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
      amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
    }
  }
}

custom.addEventListener("keyup", inputCustom);

//Radio inputs
radios.forEach((radio) => {
  radio.addEventListener("click", radioSelect);
});

function radioSelect(event) {
  if (event.target.getAttribute("for") === "option5") {
    radioValue = 5;
  } else if (event.target.getAttribute("for") === "option10") {
    radioValue = 10;
  } else if (event.target.getAttribute("for") === "option15") {
    radioValue = 15;
  } else if (event.target.getAttribute("for") === "option25") {
    radioValue = 25;
  } else if (event.target.getAttribute("for") === "option50") {
    radioValue = 50;
  }

  if (value !== "" && Number(value) > 0 && key !== "" && Number(key) > 0) {
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  }
}

//Bill and people inputs
function calc() {
  value = document.querySelector('input[name="bill"]').value;
  key = document.querySelector('input[name="people"]').value;
  const total = document.querySelector(".total p");
  const amount = document.querySelector(".amount p");
  const default5 = document.querySelector("input[value='option5']");

  if (value !== "") {
    value = Number(value);

    if (value < 0) {
      const labelBill = document.querySelector(".label-bill");
      span1.innerHTML = "Can't be negative";
      labelBill.appendChild(span1);
      inputBill.style.color = "red";
      inputBill.classList.add("zero-negative");
    } else if (value === 0) {
      const labelBill = document.querySelector(".label-bill");
      span1.innerHTML = "Can't be zero";
      labelBill.appendChild(span1);
      inputBill.style.color = "red";
      inputBill.classList.add("zero-negative");
    }
  } else {
    span1.innerHTML = "";
    inputBill.style.color = "inherit";
    inputBill.classList.remove("zero-negative");

    total.innerHTML = `$0.00`;
    amount.innerHTML = `$0.00`;
  }

  if (key !== "") {
    key = Number(key);

    if (key < 0) {
      const labelPeople = document.querySelector(".label-people");
      span2.innerHTML = "Can't be negative";
      labelPeople.appendChild(span2);
      inputPeople.style.color = "red";
      inputPeople.classList.add("zero-negative");
    } else if (key === 0) {
      const labelPeople = document.querySelector(".label-people");
      span2.innerHTML = "Can't be zero";
      labelPeople.appendChild(span2);
      inputPeople.style.color = "red";
      inputPeople.classList.add("zero-negative");
    }
  } else {
    span2.innerHTML = "";
    inputPeople.style.color = "inherit";
    inputPeople.classList.remove("zero-negative");

    total.innerHTML = `$0.00`;
    amount.innerHTML = `$0.00`;
  }

  if (value > 0 && key > 0) {
    divider = value / key;

    if (default5.checked) {
      total.innerHTML = `$${(divider * 1.05).toFixed(2)}`;
      amount.innerHTML = `$${(divider * 0.05).toFixed(2)}`;
    } else {
      total.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
      amount.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
    }
  }

  const resetRemove = document.querySelector(".button-reset button");
  if (value > 0 && key > 0) {
    resetRemove.removeAttribute("disabled");
    resetRemove.classList.remove("blocked");
  } else {
    resetRemove.setAttribute("disabled", "");
    resetRemove.classList.add("blocked");
  }
}

inputBill.addEventListener("keyup", calc);
inputPeople.addEventListener("keyup", calc);

function resetButton(event) {
  event.preventDefault();
  radioValue = 0;
  divider = 0;
  inputBill.value = 0;
  inputPeople.value = 0;
  totalOut.innerHTML = `$0.00`;
  amountOut.innerHTML = `$0.00`;
  custom.value = "";
}

reset.addEventListener("click", resetButton);
