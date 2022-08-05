// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Added a SemiColon after the calling function on Line15.
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion();


// EX 2: included a semiColon to separate the argument from the calling of function.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: spelled the full "function" keyword. Space bar after the parenthesis and curly bracket on Line29.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


//  EX 4: Moved the closing backtick after the statement. Included a calling at the end of the function definition.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = (sum) / 2;
  console.log(`the average is: ${avg}.`)
}

average();
