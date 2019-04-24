var name = "Ashfaq";
console.log(name);

let addu = "Adyan";
console.log(addu);

addu = "Adyan Shaik";
console.log(addu);

const appu = "Tasneem Shaik";
console.log(appu);

//appu = "Tannu";  // Uncaught TypeError: Assignment to constant variable. can't modify constents
console.log(appu);

//Q let vs const:

// Given below are some variables. Select the option which correctly maps all these identifiers with the correct keyword with which they must be declared.

// name (name of the user who logs into the website)

// pi (mathematical value)

// g (gravitational acceleration)

// age (age of a student in a college)

//ANS ::
// name - let
// pi - const
// g - const
// age - let

//Q2

function placeOrder(status) {
    if (status) {
        var message = "Order successfully placed!";
        console.log(message);
    }
    console.log(message);
 }
 
 placeOrder(true);

 
// Feedback :
// The variable message is defined with a keyword var. You have already learned that all the variables declared with var keyword in JavaScript, are hoisted to the top of their scope. This means that the variable message is hoisted to the top of its scope, which is the function scope.

function placeOrder(status) {
    const message = "Order successfully placed!";
    //let message = "Order successfully placed!";
    if (status) {
        // const message = "Order successfully placed!";
        // let message = "Order successfully placed!";
        console.log(message);
    }
    console.log(message);
 }
 
 placeOrder(true);

 //Q3 Usage of ‘let’ & ‘const’ - I :
 let firstName = "Srishti";
console.log(firstName);
firstName = "Prateek";

const lastName = "Gupta";
//lastName = "Grover";  // console error
console.log(lastName);

//Q4 Usage of ‘let’ & ‘const’ - II

let arr = [1, 2, 3, 4, 5], numberToFind = 4;

// finding index of the given numberToFind in the given array arr
for (let index = 1; index <= 10; index++) {
   if (arr[index] === numberToFind) {
       break;
   }
}
//console.log("The number is found at index " + index); // Console error


// Feedback :
// The variable index is declared and initialized within the for loop, which has the block scope. This means that the variable index is not accessible outside the for loop, thereby throwing an error that says that the variable is not defined, when being accessed in the print statement. Thus, this option is the correct choice.

//Q 
/**
 * Function to calculate amount for the item pen
 * quantity number of pens to be purchased
 */
function calculateAmount(quantity) {
    /* TODO 1: Write all your code inside this function
    The price is always fixed to Rs. 10.
    Assume the quantity to be 5.
    */
    const price = 10;

    // TODO 2: Return the amount to be paid by the customer
    return price * quantity;
}

/**
 * Function to show the amount payable on the console
 * amount total amount to be paid
 */
function showAmount(amount) {
    // TODO 3: Log the given message to the console here
    console.log("Total amount to be paid = Rs.", amount);
}

/* TODO 4: Call the function calculateAmount() while passing the quantity of pens as an argument
and
Call the function showAmount() while passing the result (amount) of the function calculateAmount() as its argument
*/
calculateAmount(5);
showAmount(calculateAmount(5));
