// Import necessary functions (assuming they exist in separate files)
import { getFormValues, displayResult } from "./utils.js"; // Modify path if needed

function calculateWholeNumberDivision() {
  // Get form values using imported function
  const formData = getFormValues();

  // Validate inputs (assuming validation function exists in utils.js)
  const errorMessage = validateInputs(formData);
  if (errorMessage) {
    displayResult(errorMessage);
    return;
  }

  const dividend = parseFloat(formData.dividend);
  const divider = parseFloat(formData.divider);

  // Handle division by zero
  if (divider === 0) {
    displayResult("Division by zero is not allowed!");
    return;
  }

  // Perform division and ensure whole number result
  const result = Math.floor(dividend / divider);

  // Display the result using imported function
  displayResult(result);
}

// Add event listener for form submission
const form = document.querySelector('form[data-form="data-form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  calculateWholeNumberDivision();
});
