const annually = [199.99, 249.99, 399.99];

const monthly = [19.99, 24.99, 39.99];

const toggle = document.querySelector("input");
const prices = document.querySelectorAll(".price");

function changePriceMonthly() {
  if (this.checked) {
    prices.forEach((price, i) => (price.textContent = monthly[i]));
  } else {
    prices.forEach((price, i) => (price.textContent = annually[i]));
  }
}

toggle.addEventListener("change", changePriceMonthly);
