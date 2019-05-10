// WAY 1:

// CASE A: When the promise is RESOLVED

// defining the promise object with the producer
// let promiseObj1 = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         resolve("Srishti");
//     }, 3000);

// });

// // defining the consumer - then() method
// promiseObj1.then(val => {
//     console.log(`Name received from DB = ${val}`);
// }, err => {
//     console.log(`Error occurred = ${err}`);
// });
 

// // Output:

// // Getting name from DB...
// // Name received from DB = Srishti
 

// // CASE B: When the promise is REJECTED

// // defining the promise object with the producer
// let promiseObj2 = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         reject(new Error("Could not get the name from DB!"));
//     }, 3000);

// });

// // defining the consumer - then() method
// promiseObj2.then(val => {
//     console.log(`Name received from DB = ${val}`);
// }, err => {
//     console.log(`Error occurred = ${err}`);
// });
 

// // Output:

// // Getting name from DB...
// // Error occurred = Error: Could not get the name from DB!


// // WAY 2:

 

// // CASE A: When the promise is RESOLVED

// // defining the promise object with the producer
// let promiseObj3 = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         reject(new Error("Could not get the name from DB!"));
//     }, 3000);

// });

// // defining the consumer - then() method
// promise.then(val => {
//     console.log(`Name received from DB = ${val}`);
// });

// // defining the consumer - catch() method
// promise.catch(err => {
//     console.log(`Error occurred = ${err}`);
// });
 

// // Output:

// // Getting name from DB...
// // Name received from DB = Srishti
 

// // CASE B: When the promise is REJECTED

// // defining the promise object with the producer
// let promiseObj4 = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         reject(new Error("Could not get the name from DB!"));
//     }, 3000);

// });

// // defining the consumer - then() method
// promise.then(val => {
//     console.log(`Name received from DB = ${val}`);
// });

// // defining the consumer - catch() method
// promise.catch(err => {
//     console.log(`Error occurred = ${err}`);
// });
 

// Output:

// Getting name from DB...
// Error occurred = Error: Could not get the name from DB!
// Uncaught (in promise) Error: Could not get the name from DB!
//     at setTimeout

//Q
// Ways of Defining Consumers
// Which of the following statement(s) is(are) FALSE with respect to the two ways of defining consumers?

//The second argument of the then() method is equivalent to the only argument of the catch() method. TRUE

// If a promise is rejected, and you have an errorCallback in the then() method as well a catch() method, then only either of them will be executed based on which consumer is written first.

// Feedback :
// The statement in this option is false. If a promise is rejected and you have defined two consumers – then() (with two arguments – successCallback & errorCallback) and catch() methods, then the errorCallback in BOTH the consumers will be executed.

//You should either write a then() method with successCallback as well as errorCallback or a then() method with only successCallback and a catch() method with an errorCallback. // TRUE Statement

// The catch() consumer can handle both the success as well as the failure of a promise.

// Feedback :
// The statement in this option is false. The catch() consumer CANNOT handle success. It can handle only the failure result.

//You always need to define a then() consumer, no matter which approach you are using, in order to handle the success result. TRUE Statement


//Q
// Description
// You are required to get an email from the server and then check whether the received email is valid or not. 

// You can mock the functionality of getting the email from the server using a setTimeout() method. Assume that the email is returned by the server after 2 seconds. After the email is returned by the server, the email is checked whether it is valid or invalid inside the anonymous function assigned to the variable isValid, the logic of which is provided to you in the stub code.
 
// Email (argument) passed to the resolve() callback = srishti.gupta@upgrad.com
 
// Sample Output (printed on Console tab)
// Email = srishti.gupta@upgrad.com
// VALID Email!
 
// You are required to define a promise object which contains the producer code in which the email is fetched from the server. Inside the producer code, you are required to resolve the promise while sending in the argument as 'srishti.gupta@upgrad.com'. Then, you can follow either of the two approaches to define the consumer(s) of the result.

/**
 * Function to check whether the given email is valid or not
 * Prints "VALID Email" if the email is valid; prints "INVALID Email" if the email is invalid
 * @param {*} email 
 */
const isValid = email => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regex.test(String(email).toLowerCase()) ? "VALID Email!" : new Error("INVALID Email!"));
}

/* TODO 1: Create a promise with the producer code which gets the given email in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("srishti.gupta@upgrad.com");
    }, 2000);
});

// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the given email in the question as the argument

// TODO 3: Define the consumer(s) using either of the two approaches

// TODO 4: Print the email received from the producer code while resolving the promise in the format given in the question
    
// TODO 5: If the promise is resolved (meaning that the email was fetched from the server successfully), invoke the isValid() method (given above) to print whether the received email is valid or not
promiseObj5.then(val => {
    console.log(`Email = ${val}`);
    isValid(val);
}, err => {
    console.log(`Error occurred = ${err}`);
});

