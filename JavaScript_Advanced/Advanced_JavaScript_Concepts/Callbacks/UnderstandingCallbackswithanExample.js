// let name;

// const getName = () => {
//    // get data from database
//    setTimeout(() => {
//        name = "Srishti";
//    }, 2000); 
// }

// const greet = () => {
//    console.log(`Hello ${name}`);
// }

// getName();
// greet();

//Output:
//Hello undefined  

// let name;

// let getName = (cb) => {
// 	// get name from DB
// 	setTimeout(() => {
// 		name = "Hussain";
// 		cb();
// 	}, 2000);
// }

// let greet = () => {
// 	console.log(`Hello ${name}`);
// }

// getName(greet);

// Output:

// Hello Hussain

/* Paasing parameter to callback function */


let getName = (cb) => {
    let name;
	// get name from DB
	setTimeout(() => {
		name = "Hussain";
		cb(name);
	}, 2000);
}

let greet = (nameVal) => {
	console.log(`Hello ${nameVal}`);
}

getName(greet);

// Output:

// Hello Hussain


//Q Getting order ID
// Description
// Imagine that a user is placing an order, for which the user needs to interact with the database. You can mock the functionality of interacting with the database using the setTimeout() method. Assume that the new order ID is created after 2 seconds. 

// Just like you saw the example of getting name from DB, you can consider this exercise as creating an order ID in DB. Also, assume that the order ID, which is assigned after 2 seconds, is 101 and creating it takes 2 seconds. 

// After 2 seconds, you need to print the following message on the screen:

// Order placed successfully with order ID = 101.

// Do not forget to use a callback to display the above message to the user. 

// TODO 1: Write a function to create an order ID in the DB. You can mock this functionality by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.
let createOrderId = (callback) =>{
    let orderId;
    setTimeout(()=>{
        orderId = 101;
        callback(orderId);
    },2000);
}
// TODO 2: Write a callback function which prints the order ID to the console in this format: Order placed successfully with order ID = 101.
let printOrderId = (orderId) =>{
    console.log(`Order placed successfully with order ID = ${orderId}.`);
}
// TODO 3: Invoke first function while passing in the callback function.
createOrderId(printOrderId);
