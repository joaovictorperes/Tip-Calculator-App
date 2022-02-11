const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');

function calc() {
  const value = document.querySelector('input[name="bill"]').value;
  const key = document.querySelector('input[name="people"]').value;
  const amount = document.querySelector(".amount p");
  const divider = Number(value) / Number(key);

  if (key) {
    amount.innerHTML = `$${Number(divider).toFixed(2)}`;
  }
}

inputBill.addEventListener("keyup", calc);
inputPeople.addEventListener("keyup", calc);

// const result = calc(value, key);

// function calc(bill, people) {
//
//   return divider;
// }
