const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');
const radios = Array.from(
  document.querySelectorAll("input[name='option'] + label")
);
const custom = document.querySelector("input[name='custom']");
const totalOut = document.querySelector(".total p");
const amountOut = document.querySelector(".amount p");
let radioValue = 0;
let divider = 0;

//Prevent select input radio
document.querySelector("input[name='custom']").onclick = () => {
  let radioTeste = document.querySelector("input[type='radio']:checked");

  if (radioTeste) {
    radioTeste.checked = false;

    if (custom.value !== "") {
      console.log(custom.value);
      radioValue = custom.value;
      totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
      amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
    } else {
      radioValue = 0;
      totalOut.innerHTML = `$${divider.toFixed(2)}`;
    }
  }
};

//Input custom
function inputCustom(event) {
  const customValue = event.target.value;
  radioValue = customValue;
  totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
  amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
}

custom.addEventListener("keyup", inputCustom);

//Radio inputs
radios.forEach((radio) => {
  radio.addEventListener("click", radioSelect);
});

function radioSelect(event) {
  if (event.target.getAttribute("for") === "option5") {
    radioValue = 5;
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  } else if (event.target.getAttribute("for") === "option10") {
    radioValue = 10;
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  } else if (event.target.getAttribute("for") === "option15") {
    radioValue = 15;
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  } else if (event.target.getAttribute("for") === "option25") {
    radioValue = 25;
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  } else if (event.target.getAttribute("for") === "option50") {
    radioValue = 50;
    totalOut.innerHTML = `$${(divider * (radioValue / 100 + 1)).toFixed(2)}`;
    amountOut.innerHTML = `$${(divider * (radioValue / 100)).toFixed(2)}`;
  }
}

//Bill and people inputs
function calc() {
  const value = document.querySelector('input[name="bill"]').value;
  const key = document.querySelector('input[name="people"]').value;
  const total = document.querySelector(".total p");
  const amount = document.querySelector(".amount p");
  const default5 = document.querySelector("input[value='option5']");

  divider = Number(value) / Number(key);

  if (key === "0" || key === "" || String(key).includes(".") === true) {
    total.innerHTML = `$0.00`;
  } else if (key) {
    if (String(key).includes("-") === true) {
      inputPeople.style.color = "red";
      total.innerHTML = `$0.00`;
    } else {
      inputPeople.style.color = "inherit";

      if (default5.checked) {
        total.innerHTML = `$${Number(divider * 1.05).toFixed(2)}`;
        amount.innerHTML = `$${Number(divider * 0.05).toFixed(2)}`;
      } else {
        total.innerHTML = `$${Number(divider * (radioValue / 100 + 1)).toFixed(
          2
        )}`;
        amount.innerHTML = `$${Number(divider * (radioValue / 100)).toFixed(
          2
        )}`;
      }
    }
  }
}

inputBill.addEventListener("keyup", calc);
inputPeople.addEventListener("keyup", calc);
