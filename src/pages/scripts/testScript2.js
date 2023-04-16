// https://www.tutorialrepublic.com/faq/how-to-include-a-javascript-file-in-another-javascript-file.php

let msg = "Hello World!";
const PI = 3.14;

function addNumbers(a, b) {
  return a + b;
}

// Exporting variables and functions
export { msg, PI, addNumbers };
