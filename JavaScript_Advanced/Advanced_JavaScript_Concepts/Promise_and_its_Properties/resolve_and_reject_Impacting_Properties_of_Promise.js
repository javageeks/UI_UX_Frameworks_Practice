// resolving a promise
// promiseObj = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         resolve("Srishti");
//     }, 3000);
// });

// console.log(promiseObj);

// OUTPUT

// Getting name from DB...
// Promise {<pending>}
//     __proto__: Promise
//     [[PromiseStatus]]: "pending"
//     [[PromiseValue]]: undefined

// rejecting a promise
// let promiseObj = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         reject(new Error("Could not get the name from DB!"));
//     }, 3000);
// });

// console.log(promiseObj);

// Output:

// Getting name from DB...
// Promise {<rejected>: Error: Could not get the name from DB!
//     at setTimeout}
//     __proto__: Promise
//     [[PromiseStatus]]: "rejected"
//     [[PromiseValue]]: Error: Could not get the name from DB! at setTimeout
// Uncaught (in promise) Error: Could not get the name from DB!
//     at setTimeout


//Q  Getting Email from Server - I

// Description
// You are required to get the email of the currently logged-in user from the server. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, resolve the promise while sending in the received email as the argument to the resolve callback.

/* TODO 1: Create a promise with the producer code which gets the email given
in the question from the server
    Mock this functionality of getting email from server using a setTimeout()
    method which returns this email after 2 seconds as the response from the server.
*/
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting email of currently logged-in user from the server...");
    setTimeout(() => {
        resolve("logged-in email");
    }, 2000);
});

console.log(promiseObj);
// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the email given in the question as the argument

//Q
//Getting Email from Server - II
// Description
// This is an extension to the problem which you saw in the last assessment. 

// You are required to get the email of the currently logged-in user from the server. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, reject the promise while sending in error message as a string 'Could not get email from server!' to the reject() callback.

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
// TODO 2: Inside the producer code, invoke the reject() callback while passing in the plain string 'Could not get email from server!' as the argument without creating any Error object

promiseObj = new Promise((resolve, reject) => {
    console.log("Getting email of currently logged-in user from the server...");
    setTimeout(() => {
        reject('Could not get email from server!');
    }, 2000);
});

console.log(promiseObj);