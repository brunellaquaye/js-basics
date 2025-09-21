// IA Question 1
function Profit() {
  this.costPrice = 0.5;
  this.sellingPrice = 1.5;
  this.profit = function () {
    return 2.5 - 0.5;
  };

  let numOfCups = prompt("How many cups did you sell?");
  let total = parseInt(numOfCups, 10);

  let gains = this.profit();
  alert("You had " + gains * total + "in profit");
}

let lemonadeStand = new Profit();
console.log(lemonadeStand);

// IA Question 2 how old will LIam be?

function CurrentAge() {
  this.birthYear = parseInt(prompt("Which year were you born in?"), 10);
  this.futureYear = parseInt(
    prompt("Which future year do you want to check?"),
    10
  );
  this.futureAge = function () {
    return this.futureYear - this.birthYear;
  };

  //   let year = prompt("Which year were you born in?");
  //   let futureYear = prompt("Which future year do you want to check?");

  let predictor = this.futureAge();
  alert("Your age in 2004will be " + predictor);
}
// This is to call the function so that you can use it.
let ageChecker = new CurrentAge();

// IA question 3 - Odd or Even game
function numberChecker() {
  this.input = prompt("Enter a numer : ");
  this.checker = function () {
    if (this.input % 2 == 0) {
      alert("even");
    } else {
      alert("odd");
    }
  };
}

let gamer = new numberChecker();
// to ensure the checker behavior works, you have to call the checker method after calling the function below
gamer.checker();

// IA quesiton 4 - Pizza Party split
function pizzaShare() {
  this.box = 8;
  this.people = parseInt(prompt("How many people are at the paerty?"));
  this.order = parseInt(prompt("How many boxes ordered?"));
  this.pizzaPerPerson = function () {
    alert(
      "each person gets" + Math.floor((this.box * this.order) / this.people)
    );
  };
  this.remainder = alert(
    ((this.box * this.order) % this.people) +
      " pieces of pizza will be left behind"
  );
}

let partyTime = new pizzaShare();
partyTime.pizzaPerPerson();
partyTime.remainder();

// IA question 5 - Book reading tracker
function bookTracker() {
  this.numOfPages = parseInt(prompt("How many pages are in the book? "));
  this.pagesPerDay = parseInt(prompt("How many pages do you read per day?"));
  this.daysTaken = function () {
    duration = Math.round(this.numOfPages / this.pagesPerDay);
    return duration;
  };
  let days = this.daysTaken();
  alert("It will take you " + days + " days to complete");
}

let tracker = new bookTracker();
tracker.daysTaken();

// // Question 6 - Simple grading system
function Grader() {
  let score = prompt("What is the score? ");

  if (score >= 90) {
    alert("A");
  } else if (score >= 80 && score <= 89) {
    alert("B");
  } else if (score >= 70 && score <= 9) {
    alert( "C");
  } else if (score >= 60 && score <= 69) {
    alert( "D");
  } else {
    alert( "F");
  }
}

let test = new Grader();

function tempConverter() {
  let temperature = parseInt(prompt("What is the temperature in celcius? "));
  this.fahrenheit = function () {
    return temperature * (9 / 5) + 32;
  };
  // remember to include the parenthesis after the fahrenheit when you do the "this.fahrensheit so you can make use of the method and not just call the function"
  alert("Your temperature in Fahrenheit is " + this.fahrenheit());
}

weather = new tempConverter();
weather.fahrenheit();

// Bus Ticket Discount
function discount() {
  let age = parseInt(prompt("How old are you?"));
  if (age < 12 || age > 65) {
    alert("discounted ticket");
  }
}

let ticket = new discount();

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
let game = new guessGame();

// To print out the multiplication of
function multiplicationTable() {
  this.studentInput = parseInt(prompt("Enter a number for multiplication: "));

  // Use a for loop to print it
  // Format
  // for(start condition; condtion; step)
  this.multiplication = function () {
    let result = "";
    // we put in 

    for (i = 1; i <= 10; i++) {

      result +=
        this.studentInput + "*" + i + "=" + this.studentInput * i + "\n"; 
    }
    alert(result);
  };
}

let student = new multiplicationTable();
student.multiplication();


// Weekly allowance tracker
function allowance(){
    this.perWeek = parseInt(prompt("How much do you earn per week?"))
    this.weekSavings = parseInt(prompt("How many weeks do you want to save?"))
     this.total = function(){
        alert("Your total amount is " + (this.perWeek * this.weekSavings))
     }
}
let money = new allowance()
money.total()


// Speeding Fine Calculator
function speedFine(){
    this.speedLimit = parseInt(prompt("What is your speed limit?"))
    this.yourSpeed = parseInt(prompt("What was your speed?"))
     this.speedchecker = function(){
        
        if (this.yourSpeed <= this.speedLimit){
            alert("No fine")
        }else{
            let fine = ((this.yourSpeed - this.speedLimit) * 5)
            alert ( "Your fine is " + fine )
        }
     }
}

let fineCalculator = new speedFine()
fineCalculator.speedchecker()

//Paint Calculator
function painter(){
    this.height = parseInt(prompt("What is the height of the wall?"));
    this.width = parseInt(prompt("What is the width of the wall?"));
    this.cans = alert("You will need " + Math.round((this.height * this.width) / 50))

}

let paintChecker = new painter()


function tipCalculator(){
    this.total = parseInt(prompt("What is the total bill? "));
    this.percentage = parseInt(prompt("What is the  percentage? "));
    this.people = parseInt(prompt("How many people are there? "));
    this.pay = alert("Each person pays" + ((this.total * (this.percentage / 100))/ this.people))

}

let split = new tipCalculator()

function simpleInterestCalculator(){
    this.principal = prompt("What is the principal amount?");
    this.interestRate = prompt("What is the interest rate?");
    this.years = prompt("How many years?");
     this.totalInterest = alert("Your total interest is " + (this.principal * this.interestRate * this.years) / 100)
    
}
let banker = new simpleInterestCalculator()


// Classroom Desk Planner
function deskPlanner(){
    this.students = prompt("How many students are in the class? ");
    this.row = prompt("How many desks fit one row")
    this.filled = alert("We need "+(this.students / this.row) + "rows full");
    
}
let classroom = new deskPlanner()


// height converter
function heightConverter() {
    this.feet = parseInt(prompt("What height in feet "));
  this.inches = parseInt(prompt("What are you inches?"))
  this.centimeter = function () {
    return ((this.feet * 12 + this.inches ) * 2.54);
  };
  
  alert("Your height in centimeter is " + this.centimeter());
}

height = new heightConverter();
height.centimeter();


function passwordChecker() {
  let input = parseInt(prompt("Enter your password."));
  let correct = "lemon123";

  if (input == correct) {
    alert("Access granted!");
  
  } else {
    alert("Too Access denied");
  }
}
let gamePassword = new gamePassword();


