// lemonade stand profit
const costPrice = 0.5;
const sellingPrice = 1.5;

function profit() {
  let numOfCups = parseInt(prompt("How many cups did you sell?"));
  alert("You had " + (sellingPrice - costPrice) * numOfCups + " in profit");
}
profit();

// age predictor
function agePredictor() {
  let birthYear = parseInt(prompt("Which year were you born in?"), 10);
  let futureYear = parseInt(
    prompt("Which future year do you want to check?"),
    10
  );
  alert("Your age in 2004will be " + (futureYear - birthYear));
}
agePredictor();

// Odd or even number
function numberTypeChecker() {
  let input = parseInt(prompt("Enter a number : "), 10);

  if (input % 2 == 0) {
    alert("even");
  } else {
    alert("odd");
  }
}
numbertypeChecker();

// Pizza share
const box = 8;
function sliceShare() {
  let people = parseInt(prompt("How many people are at the paerty?"), 10);
  let order = parseInt(prompt("How many boxes ordered?"), 10);

  alert("Each person gets" + Math.floor((box * order) / people));
  alert(((box * order) % people) + " pieces of pizza will be left behind");
}
  sliceShare()

// Book tracker
function pageTracker() {
  let numOfPages = parseInt(prompt("How many pages are in the book? "), 10);
  let pagesPerDay = parseInt(prompt("How many pages do you read per day?"), 10);

  alert(
    "It will take you " +
      Math.round(numOfPages / pagesPerDay) +
      " days to complete"
  );
}

pageTracker()

// grading system
function grader() {
  let score = parseInt(prompt("What is the score? "), 10);

  if (score >= 90) {
    alert("A");
  } else if (score >= 80 && score <= 89) {
    alert("B");
  } else if (score >= 70 && score <= 9) {
    alert("C");
  } else if (score >= 60 && score <= 69) {
    alert("D");
  } else {
    alert("F");
  }
}
grader()

// temperature convertor
function temperatureConverter() {
  let temperature = parseInt(
    prompt("What is the temperature in celcius? "),
    10
  );

  alert("Your temperature in Fahrenheit is " + (temperature * (9 / 5) + 32));
}
temperatureConverter()

// Bus ticket discount
function discountChecker() {
  let age = parseInt(prompt("How old are you?"));
  if (age < 12 || age > 65) {
    alert("discounted ticket");
  }else{
    alert("no discount")
  }
}

discountChecker();

// Guess game
function guessGame() {
  let input = parseInt(prompt("Guess a number"));
  let correct = 7;

  if (input == correct) {
    alert("Correct!");
  } else if (input > correct) {
    alert("Too high");
  } else {
    alert("Too low");
  }
}
guessGame();

// multiplication table
function multiTable() {
  let studentInput = parseInt(prompt("Enter a number for multiplication: "));

  let result = "";

  for (i = 1; i <= 10; i++) {
    result += studentInput + "*" + i + "=" + studentInput * i + "\n";
  }
  alert(result);
}

multiTable();

// allowance
function allowanceTracker() {
  let perWeek = parseInt(prompt("How much do you earn per week?"));
  let weekSavings = parseInt(prompt("How many weeks do you want to save?"));
  alert("Your total amount is " + perWeek * weekSavings);
}
allowanceTracker();

//
function speedFineChecker() {
  speedLimit = parseInt(prompt("What is your speed limit?"), 10);
  yourSpeed = parseInt(prompt("What was your speed?"), 10);
  if (yourSpeed <= speedLimit) {
    alert("No fine");
  } else {
    let fine = (yourSpeed - speedLimit) * 5;
    alert("Your fine is " + fine);
  }
}

speedFineChecker();

// paint question
function paintChecker() {
  height = parseInt(prompt("What is the height of the wall?"), 10);
  width = parseInt(prompt("What is the width of the wall?"), 10);
  alert("You will need " + Math.round((height * width) / 50));
}

paintChecker();

function tipCalculs() {
  total = parseInt(prompt("What is the total bill? "), 10);
  percentage = parseInt(prompt("What is the  percentage? "), 10);
  people = parseInt(prompt("How many people are there? "), 10);
  alert("Each person pays" + (total * (percentage / 100)) / people);
}

tipCalculs();

function simpleInterest() {
  principal = parseInt(prompt("What is the principal amount?"), 10);
  interestRate = parseInt(prompt("What is the interest rate?"), 10);
  years = parseInt(prompt("How many years?"), 10);
  alert("Your total interest is " + (principal * interestRate * years) / 100);
}
simpleInterest();

function desksPlanner() {
  students = parseInt(prompt("How many students are in the class? "), 10);
  row = parseInt(prompt("How many desks fit one row"), 19);
  alert("We need " + students / row + "rows full");
}
desksPlanner();

function heightsConverter() {
  feet = parseInt(prompt("What height in feet "), 10);
  inches = parseInt(prompt("What are you inches?"), 10);
  alert(
    "Your height in centimeter is " + (this.feet * 12 + this.inches) * 2.54
  );
}

heightsConverter();

const correct = "lemon123";
function passwordChecker() {
  let input = parseInt(prompt("Enter your password."));
  if (input == correct) {
    alert("Access granted!");
  } else {
    alert("Too Access denied");
  }
}
passwordChecker();
