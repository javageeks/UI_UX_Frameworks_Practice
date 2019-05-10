//pass a function as an argument to another function.

function sum(x, y){
 return x + y ;
}

function multiply(x, y){
return x*y;
}

function getResults(x, y, operate){
   return operate(x, y);
}

console.log(getResults(2,3, sum));
console.log(getResults(2,3, multiply));

//Passing Functions as Argument
// Considering that you are writing your code in ES6 syntax, which of the following options contains the correct code for printing the messages - “Inside foo” and then “Inside bar” on the console without throwing any error? 
// Note that the arrow function bar() as an argument to the arrow function foo().

// const foo = (anotherFunction) => {
//     console.log("Inside foo");
//     anotherFunction();
//  }
 
//  const bar = () => {
//     console.log("Inside bar");
//  }
 
//  foo(bar());
// const foo = (anotherFunction()) => {
//     console.log("Inside foo");
//     anotherFunction();
//  }
 
//  const bar = () => {
//     console.log("Inside bar");
//  }
 
//  foo(bar);
const foo = (anotherFunction) => {
    console.log("Inside foo");
    anotherFunction();
 }
 
 const bar = () => {
    console.log("Inside bar");
 }
 
 foo(bar);

// const foo = (anotherFunction) => {
//     console.log("Inside foo");
//     anotherFunction;
//  }
 
//  const bar = () => {
//     console.log("Inside bar");
//  }
 
//  foo(bar);

const add = (callBack)=>{
     x = 2;
     y = 3;
     console.log("SUM of ", x," and ",  y ,"= ",x+y); 
     callBack();
}

let subtract = (callBack) => {
    x = 2;
    y = 3;
    console.log("Difference of ", x," and ", y ,"= ",x-y); 
    callBack();
}

// add(()=>{
//     console.log("Finish this operation!");
// });

// subtract(()=>{
//     console.log("Finish this operation!");
// });
 
let displayCompletion = ()=>{
    console.log("Finish this operation!");
}

add(displayCompletion);
subtract(displayCompletion);

//Q Callbacks - I
//Which of the following statement(s) is(are) TRUE about callbacks in JavaScript?

//A callback can be used in synchronous and asynchronous programming in JavaScript.   // Correct

//A callback can only be invoked at the end of all the tasks in the callee function.  // Wrong

//You can use callbacks to mark the completion of a task.  // Correct

//Callbacks cannot be written as anonymous functions passed inline as an argument to the callee function. // Wrong

//The second argument of event listeners is a callback function in synchronous programming. // Worng

//Q Callbacks - II
//What is the output of the following code snippet?

const getDetails = (callback) => {
    setTimeout(() => {
        let details = {
            firstName: "Srishti",
            lastName: "Gupta",
            gender: "female"
        }
 
        callback(details);
    }, 2000);
 }
 
 const printDetails = (details) => {
    for (let key in details) {
        console.log(`${key} : ${details[key]}`);
    }
 }
 
 getDetails(printDetails);