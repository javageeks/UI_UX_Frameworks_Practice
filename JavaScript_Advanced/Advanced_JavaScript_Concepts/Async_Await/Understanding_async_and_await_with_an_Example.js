//CASE A: When the promise is RESOLVED

// defining the async function which waits for the promise to be resolved / rejected
const getName = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

getName();

// Output:

// Getting name from DB...
// Name received from DB = Srishti


 

// CASE A: When the promise is REJECTED

// defining the async function which waits for the promise to be resolved / rejected
const getName = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);
});

getName();

// Output:

// Getting name from DB...
// Error: Error getting name!
//     at setTimeout

// //Q
// async & await
// Which of the following statement(s) is(are) TRUE with respect to async & await keywords in JavaScript?

// When a promise is resolved, the result passed in as an argument while resolving the promise is held inside the variable which waits for the promise object to be settled (either resolved or rejected).

// Feedback :
// The statement given in this option is true.


// If the promise is resolved, the control goes to the catch block. FALSE   


// The best practice is to wait for the promise in the try block using the await keyword and have a catch block to handle the error(s), if any.

// Feedback :
// The statement given in this option is true.

// Correct

// The await keyword can only be used for a promise and thus, can be prepended to a promise object only.

// Feedback :
// The statement given in this option is true.



//Q Getting Email from Server - VI

// Description
// This is an extension to the problem which you saw in the assessment in segment on Promises.

//  You are required to get the email of the currently logged-in user from the server.  Initially, the message should be printed as 'Getting email from server...' to the console. In order to mock the functionality of getting it from the server, you can use the setTimeout() method and assume that the email will be returned as a response after 2 seconds. 

// Implement this using a promise and in the producing code, resolve the promise while sending in the email ID 'srishti.gupta@upgrad.com' as a string to the resolve() callback.

// Now, you need to define an async function, inside which you must use the await keyword to wait for the promise defined earlier and hold the email in a variable. Then, print this email to the console in the format given for the output below:
// Getting email from server...
// Email = srishti.gupta@upgrad.com


// Also define a catch block which will handle error(s), if any.

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let getEmailPromise = new Promise((resolve, reject) => {
    console.log("Getting email from server...");
    setTimeout(() => {
        resolve("srishti.gupta@upgrad.com");
    }, 2000);
});
// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the given email id in the question as the argument

// TODO 3: Define an async function which has the try and catch blocks

// TODO 4: Inside the try block, wait for the promise defined above using the await keyword and hold the email returned by the promise in a variable and print the value inside this variable on the console in the format given in the question

// TODO 5: Inside the catch block, log on to console the error(s) received, if any (this won't be true for the current case since we are resolving the promise)

// TODO 6: Invoke the async function defined earlier
let printEmail = async () => {
    try{
        let email = await getEmailPromise;
        console.log(`Email = ${email}`);
    }catch(error){
       console.log(err); 
    }
}

printEmail();