const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get input values
  const dividendInput = document.querySelector('input[name="dividend"]');
  const divisorInput = document.querySelector('input[name="divider"]');

  const dividend = parseFloat(dividendInput.value);
  const divisor = parseFloat(divisorInput.value);

  // Validate inputs (check for empty or non-numeric values)
  if (isNaN(dividend) || isNaN(divisor)) {
    result.textContent = "Error: Please enter valid numbers.";
    return; // Exit function if validation fails
  }

  // Validate division by zero
  if (divisor === 0) {
    result.textContent = "Error: Division by zero is not allowed.";
    return;
  }

  // Perform calculation
  const resultValue = dividend / divisor;

  // Display result with appropriate formatting
  result.textContent = `Result: ${resultValue.toFixed()}`; // Show result with 0 decimals
});
