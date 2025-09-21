// let x = 10;
// let y = x;

// x = 20;
// // the above variables are independent of each other.
// // with this object notation, both will point to the same
// let m = {value : 20};
// let n = m

function Square(length){
    this.length = length;
    this.perimeter = function(){
        console.log("4 lengths make up the perimeter");
    }
}

const square = new Square(10);

for (let key in square){
    if(typeof square[key] !== 'function')
        console.log(key, square[key])
}











// // Adding properties
// square.location = {x:1}

// // we use this way when there are special characters in the name of the property
// const newProperty = 'center location';
// square[propertyName] = {x:1}


    // function greet(age) {
    //   console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
    // }

    // const person = {
    //   name: "Alice",
    //   age: 30
    // };

    // // person.age = 25

    // greet.apply(person, [25]); // Output: Hello, my name is Bob and I am 25 years old.

