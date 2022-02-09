const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');

function billValue() {
  const value = document.querySelector('input[name="bill"]');
  return value;
}

let vBill = inputBill.addEventListener("keydown", billValue);
console.log(vBill);

function peopleValue(event) {
  const key = event.key;
  return key;
}

let vPeople = inputPeople.addEventListener("keydown", peopleValue);
