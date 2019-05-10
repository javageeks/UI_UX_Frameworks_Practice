/* ===================== then() ================ */
//CASE A: When the promise is RESOLVED
// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);

});

// defining the consumer
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});

// Output:

// Getting name from DB..
// Name received from DB = Srishti

//CASE B: When the promise is REJECTED
// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);

});

// defining the consumer
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});

// Output:

// Getting name from DB..
// Error occurred = Error: Error getting name!

// //Q Consumers
// Which of the following statement(s) is(are) TRUE with respect to consumers in asynchronous programming?

// The consumers consume the result produced by the producer code.
// Feedback :
// The statement given in this option is true.

// There are two types of consumers - then() method and catch() method.
// Feedback :
// The statement given in this option is true.

// then() & catch() are the methods which can be invoked on any kind of object, not necessarily a promise object.

//Q then Consumer Method
// Which of the following statement(s) is(are) FALSE with respect to then consumer method?

// then() method has two parameters – successCallback and errorCallback. The former is invoked when the promise is resolved in the producer code (resolve() callback is invoked) and the latter is invoked when the promise is rejected in the producer code (reject() callback is invoked).

// The order of resolve() and reject() callbacks in the producer code must always remain the same – reject() should be the first parameter and resolve() must be the second parameter.

// Feedback :
// The statement given in this option is false.

// The order of resolve() and reject() callbacks in the producer code must always remain the same – resolve() should be the first parameter and reject() should be the second parameter.

// resolve & reject are the keywords in JavaScript and should be used as they are.

// Feedback :
// The statement given in this option is false.

// resolve & reject are not the keywords in JavaScript and they can be replaced with any other valid identifier.

// resolve() and reject() – both can have only one argument each.

// Feedback :
// The statement given in this option is false.

// resolve() and reject() methods can have any number of arguments – 0, 1 or more. It’s not necessary that both should have one argument each.


//Q
// Description
// This is an extension to the problem which you saw in the last assessment. 

// You are required to get the email of the currently logged-in user from the server.  Initially, the message should be printed as 'Getting email from server...' to the console. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, resolve the promise while sending in your email as the string argument.

// Now, in the consumer code, you need to use a then() method and you need to print the email received as an argument to the console.

// The output on the console should be:
// Getting email from server...
// Email = srishti.gupta@upgrad.com

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting email from server...");
    setTimeout(() => {
     resolve("srishti.gupta@upgrad.com");
    }, 2000);
});
// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the email given in the question as the argument

// TODO 3: Define a then() consumer method which has two arguments
//- one as the successCallbackHandler and the other as the errorCallbackHandler

// TODO 4: Print the email received as an argument in the successCallbackHandler of the then() method
promiseObj.then((val) =>{
  console.log(`Email = ${val}`);
}, (err) => {
 
})


//Q
// Description
// This is an extension to the problem which you saw in the last assessment. 

// You are required to get the email of the currently logged-in user from the server.  Initially, the message should be printed as 'Getting email from server...' to the console. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, reject the promise while sending in error message as a string 'Could not get email from server!' to the reject() callback.

// Now, in the consumer code, you need to use a then()method and you need to print to the console the error received as an argument.

// The output on the console should be:
// Getting email from server...
// Could not get email from server!

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting email from server...");
    setTimeout(() => {
     reject("Could not get email from server!");
    }, 2000);
});
// TODO 2: Inside the producer code, invoke the reject() callback while passing in the plain string 'Could not get email from server!' as the argument without creating an Error object

// TODO 3: Define a then() consumer method which has two arguments - one as the successCallbackHandler and the other as the errorCallbackHandler

// TODO 4: Print the error received as an argument in the errorCallbackHandler of the then() method
promiseObj.then((val) =>{

}, (err) => {
  console.log(`${err}`);
})

/* ===================== Catch ======================= */
//CASE: When the promise is REJECTED
// defining the promise object with the producer
let promise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);

});

// defining the consumer
promise.catch(err => {
    console.log(`Error occurred = ${err}`);
});


// Output:

// Getting name from DB..
// Error occurred = Error: Could not get the name from DB!

//Q catch Consumer Method
// Which of the following statement(s) is(are) TRUE with respect to the catch() consumer method?

// The catch() consumer method is used to handle the error(s), If any, in the producer code.

// Feedback :
// The statement in this option is true.

// The catch consumer has two arguments as the callback methods – successCallback and errorCallback. // FALSE

// You can pass only one argument as the error in the errorCallback in the catch() method. // FALSE

// Feedback :
// The statement in this option is false. You can pass as many arguments as you want in the errorCallback in the catch() method.

//
// The errorCallback in the catch() consumer method is invoked when the promise is rejected in the producer code.

// Feedback :
// The statement in this option is true.

//Q
// Getting Email from Server - V
// Description
// This is an extension to the problem which you saw in the last assessment. 

// You are required to get the email of the currently logged-in user from the server.  Initially, the message should be printed as 'Getting email from server...' to the console. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, reject the promise while sending in error message as a string 'Could not get email from server!' to the reject() callback.

// Now, in the consumer code, you need to use a catch()method and you need to print to the console the error received as an argument.

// The output on the console should be:
// Getting email from server...
// Could not get email from server!

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting email from server...");
    setTimeout(() => {
     reject("Could not get email from server!");
    }, 2000);
});
// TODO 2: Inside the producer code, invoke the reject() callback while passing in the plain string 'Could not get email from server!' as the argument without creating an Error object
// TODO 3: Define a catch() consumer method which has one argument - errorCallbackHandler

// TODO 4: Print the error received as an argument in the errorCallbackHandler of the catch() method

promiseObj.catch((err) => {
  console.log(`${err}`);
})


