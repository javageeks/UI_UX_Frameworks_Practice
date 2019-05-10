// 1.       async & await keywords were introduced in ES8 (ES2017), which are internally based on promises but makes the code even more readable as compared to promises.
 

// 2.    When the keyword async is prepended to a function, it can be safely assumed that a promise is returned from that function. Even if the function does not explicitly return a promise object, it is made to implicitly return a promise object after resolving it with the value that is returned from the function.

let foo = async () => Promise.resolve("Srishti");
foo().then(val => alert(val));

// Output:

// Srishti (inside the alert box)


let foo = () => {
    // assume namePromise as a promise existing in the code
    let name = await namePromise; 
}

// Uncaught SyntaxError: await is only valid in async function

// //Q async & await
// Which of the following statement(s) is(are) TRUE with respect to async & await in JavaScript?

// async & await were introduced in ES6 syntax.  // FALSE statement

// async & await are internally based on promises.

// Feedback :
// The statement given in this option is true.

// async & await are not keywords in JavaScript. You can use any valid identifier in place of these words.

// When the word async is prepended to a function, it is assumed that the function returns a promise object.

// Feedback :
// The statement given in this option is true.

// If a function prepended with the async word does not explicitly return a promise, then it is made to do that while rejecting the promise with the argument passed as the value returned from the function.


// //Q 
// await Keyword
// Which of the following statement(s) is(are) FALSE with respect to await keyword in JavaScript?


// The await keyword makes the code wait until the promise is resolved or rejected. TRUE

// The await keyword can be used to catch the error (if any) occurred while returning the promise and thus, is a better alternative way of writing the catch() method.

// Feedback :
// The statement given in this option is false. The await keyword can be used to handle the SUCCESS result of the promise and thus, is an alternative way of writing the then() method.


// await keyword can be used inside a function, which does not has async keyword prepended to it.

// Feedback :
// The statement given in this option is false. await keyword can only be used inside a function, which HAS the async keyword prepended to it.