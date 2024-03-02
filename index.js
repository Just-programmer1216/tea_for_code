// Prompt user for their name
var userName = prompt("What is your name?");

// Display a greeting
if (userName) {
  alert("Hello, " + userName + "! Welcome to the world of JavaScript!");

  // Function to calculate and display the length of the name
  function displayLength() {
    var nameLength = userName.length;
    console.log("Your name has " + nameLength + " characters.");
  }

  // Call the function
  displayLength();

  // Prompt user for two numbers
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));

  // Check if the input is valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform addition
    var sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
  } else {
    alert("Invalid input. Please enter valid numbers.");
  }
} else {
  alert("Hello there! Welcome to the world of JavaScript!");
}
