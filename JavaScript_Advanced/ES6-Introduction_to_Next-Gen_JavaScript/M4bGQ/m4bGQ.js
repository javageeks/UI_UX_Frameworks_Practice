//Q1
// Usage of ‘let’ & ‘const
// Choose the option which displays the correct output of the code snippet given below:
// function login(loggedIn) {
//     message = "Please login!";
//     console.log(message);
//     if (loggedIn) {
//         name = "Srishti";
//         let name;
//         var message = "Welcome " + name + "!";
//         console.log(message);
//     }
//  }
 
//  login(true);

 //Q2
//  Class


// class Person {
//     constructor() {
//         console.log("I am a person.");
//     }
//  }
 
//  class Employee extends Person {
//     constructor() {
//         console.log("I am an employee.");
//     }
//  }
 
//  let p = new Person();
//  let e = new Employee();


 //Q3
//  Array Destructuring
// Which of the following options correctly represents the output of the following code?

const userDetails = ["Sachin", "Ramesh", "Tendulkar"];
const [lastName, , firstName] = userDetails;
console.log(firstName, lastName);