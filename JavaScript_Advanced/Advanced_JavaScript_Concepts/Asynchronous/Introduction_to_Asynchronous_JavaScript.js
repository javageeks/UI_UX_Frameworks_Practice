// Test Your Knowledge of JavaScript
// Which of the following statements is(are) false in JavaScript?

// Note that there can be multiple statements which can be false.


// JavaScript is a single-threaded language.


// You can write synchronous as well as asynchronous code in JavaScript.


// In synchronous programming, you can execute tasks in parallel, which, at times, can give the output in an order different from the one in which the code is written.


// In asynchronous programming, the code which is to be run in the background, is sent to the Web APIs in JavaScript.


// When the code inside the Web API produces the result, the event loop always immediately sends the result to the execution stack.

//Q2
// Asynchronous JavaScript
// Choose the option which correctly displays the output of the code snippet given below:
var beta = function() {
    console.log("Entered beta!");
    setTimeout(function () {
        console.log("Inside beta!");
    }, 2000);
    console.log("Exited beta!");
 }
 
 var alpha = function () {
    console.log("Entered alpha!");
    setTimeout(function() {
        beta();
    }, 2000);
    console.log("Exited alpha!");
 }
 
 alpha();