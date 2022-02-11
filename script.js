const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');

function calc() {
  const value = document.querySelector('input[name="bill"]').value;
  const key = document.querySelector('input[name="people"]').value;
  const amount = document.querySelector(".amount p");
  const divider = Number(value) / Number(key);
  console.log(key);

  if (key === "0" || key === "") {
    amount.innerHTML = `$0.00`;
  } else if (key) {
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
