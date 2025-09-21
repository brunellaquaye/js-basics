// This is where all the javascript code goes

// the variabl name should be meaningful,cannot be a reserved keyword, cannot contain and space and a hyphen

// In JS we use camelCase
// "const" is used to indicate a constant

const interestRate = 0.3;
let newPrice = 2;
// Literals in js
let age = 29;
let isApproved = true;
// The null is used when we want to clear the content of variable
let selectedColor = null;

// Objects are reference typs.
let person = {
  name: "Na",
  age: 47,
  favoriteColor: "red",
};

// accessing the contents of the object
// dot notation
person.name = "John";

// bracket notation
person["name"] = "Mary";
console.log(person.name);

// declaring functions
function greet(name, age) {
  console.log("my name is " + name + "I am " + age);
}
//calling and using the function
greet("John", 99);

// calculating a value
function areaRectangle(length, breadth) {
  return length * breadth;
}

let sample = areaRectangle(20, 4);
console.log("the area of the triangle is " + sample);

//OOP in javascript
//  writing a sample object for square

const square = {
  // below are properties
  // objects with more than one method is an object with behavior
  area: 1,
  peremeter: 1,
  types: {
    quadrilateral: true,
    sphere: false,
  },
  // this is a method because it containes a function
  draw: function () {
    console.log("draw function");
  },
};

// We use factories when we want to be able to duplicate or use classes with multiple methods or with behavior.
// For factories, we return something with the return keyword
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("this is a circle");
    },
  };
}

const sampleCircle = createCircle(1);
// sampleCircle.draw();

// Writing a constructor function as a way to create a class
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// create a new instance of the object with the 'new' keyword
const another = new Circle(2);

// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function(){
//   console.log('draw)}
//   `
// );
// Instead of the above, we can just use on line of code to calll the funciton and pass in the parameters

// the {} specifies an emplty object
Circle.call({}, 2)

