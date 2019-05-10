//Syntax of a Promise:

let promiseObj = new Promise((resolve, reject) => {
    // producer code
});

console.log(promiseObj); // promiseStatus = pending // PromiseValue = undeifned

//Q
// Asynchronous Programming with Promise
// Which of the following statement(s) is(are) FALSE with respect to promises?

// (Note that there can be more than one correct option.)

// The producer code is the one that consumes the result produced by the consumer code.

// Feedback :
// This is reverse of what is true. The 'consumer' code is the one that consumes the result produced by the 'producer' code.

//A promise provides linkage between the producer & consumer codes. TRUE

// A promise contains the consumer code.

// Feedback :
// This statement is not true. The promise object contains the 'producer' code. The consumer code is later on defined on the promise object.


// The producer code is needed to be explicitly called when the promise object is created.

// Feedback :
// The producer code is not needed to be explicitly called when the promise object is created. The producer code is called implicitly when the promise object is created.


// //Q
// Properties of Promise Object
// Which of the following statement(s) is(are) FALSE with respect to properties of a promise object?

//The promise object contains two properties – one for its status and the other for its value. TRUE

// The internal properties of a promise object can be represented as [PromiseStatus] and [PromiseValue].

// Feedback :
// The [[PromiseStatus]] and [[PromiseValue]] are the internal properties of a promise object 

// When a promise object is created, the property [[PromiseStatus]] is initialized with ‘pending’ and the [[PromiseValue]] property is initialized with null.

// Feedback :
// When a promise object is created, the property [[PromiseStatus]] is initialized with 'pending' but the property [[PromiseValue]] is initialized with undefined and not null.