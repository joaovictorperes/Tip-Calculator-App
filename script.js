const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');
const label = document.querySelectorAll("input[name='option'] + label");

function calc() {
  const value = document.querySelector('input[name="bill"]').value;
  const key = document.querySelector('input[name="people"]').value;
  const amount = document.querySelector(".amount p");
  const divider = Number(value) / Number(key);
  console.log(key);

  if (key === "0" || key === "" || String(key).includes(".") === true) {
    amount.innerHTML = `$0.00`;
  } else if (key) {
    if (String(key).includes("-") === true) {
      inputPeople.style.color = "red";
      amount.innerHTML = `$0.00`;
    } else {
      inputPeople.style.color = "inherit";
      amount.innerHTML = `$${Number(divider).toFixed(2)}`;
    }
  }
}

inputBill.addEventListener("keyup", calc);
inputPeople.addEventListener("keyup", calc);

function select(event) {
  const option = event.target;
  const value = option.getAttribute("for").slice(6);

  console.log(value);
}

label.forEach((input) => {
  input.addEventListener("click", select);
});
