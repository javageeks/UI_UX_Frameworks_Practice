// Success
// When the result of the producer code is success, the resolve() callback is invoked to resolve the promise object.

// The properties of the promise object change as:

// Status = ‘resolved’

// Value = val

// Failure
// When the result of the producer code is failure, the reject() callback is invoked to reject the promise object.

// The properties of the promise object change as:

// Status = ‘rejected’

// Value = err

// //Q
// Producer Code
// Which of the following statement(s) is(are) FALSE with respect to the producer code contained inside a promise object?

// The result produced by the producer code can either result in success, or failure, or both.

// Feedback :
// The statement given in this option is false. The result produced by the producer code can either result in success or failure; both results cannot be obtained simultaneously.

// When the result produced by the producer code is successful, the resolve() callback is invoked and when the result is failure, the reject() callback is invoked. TRUE

// resolve & reject are the parameters, which can be considered as normal variables which can be used to hold arguments of any data type, not necessarily a function.

// Feedback :
// The statement given in this option is false. Though it’s true that resolve & reject are the normal variables (parameters of the producer code) which can be used to hold arguments passed into the producer code but these arguments should always be functions. This is because of the reason that resolve() and reject() are callbacks and the callbacks are always functions which can be invoked.

//Q
// resolve & reject Callbacks
// Which of the following statements is(are) true about promises?

// When a promise is resolved, it gives us the value which is returned after the job is finished successfully.

// Feedback :
// When a promise is resolved, it gives us the value which is returned after the job finishes successfully and when it is rejected, it gives us an error to indicate that the job could not finish successfully.


// When a promise is rejected, it gives us the value which is returned after the job is finished successfully. //FALSE statment

// When a promise is resolved, it gives us an error to indicate that the job could not finish successfully.  //FALSE statment   

// When a promise is rejected, it gives us an error to indicate that the job could not finish successfully.

// Feedback :
// When a promise is resolved, it gives us the value which is returned after the job finishes successfully and when it is rejected, it gives us an error to indicate that the job could not finish successfully.


// //Q
// Effect of Callbacks on Internal Properties of Promise
// Given are the two callbacks invoked inside the producer code contained inside two different promises 

