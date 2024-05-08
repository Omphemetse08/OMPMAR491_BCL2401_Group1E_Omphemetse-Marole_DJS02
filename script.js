const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get input values
  const dividendInput = document.querySelector('input[name="dividend"]');
  const divisorInput = document.querySelector('input[name="divider"]');

  const dividend = parseFloat(dividendInput.value);
  const divisor = parseFloat(divisorInput.value);