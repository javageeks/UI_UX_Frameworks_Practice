// Template Literals
// Consider that some variables have been declared and initialized like this:

 const firstName = 'Srishti', lastName = 'Gupta', role = 'developer', type = 'JavaScript';
// Try to convert the following string, which is currently written using ES5 syntax, into ES6 syntax while utilizing template literals.

 console.log('My name is ' + firstName + " " + lastName + ". I am a " + type + " " + role + ".");
// The output should be:

// My name is Srishti Gupta. I am a JavaScript developer.

console.log(`My name is ${firstName } ${lastName }. I am a ${type } ${role } .`)

//Q
// Order Summary
// Description
// Imagine an online store that displays the order summary of an order placed by a customer. The details of the customer and the order placed by the customer are already provided. You just need to print the details in the template given below:
 
// Hi firstName lastName! Your order for numberOfItemsInItemsArray items has been successfully placed. Thank you!

// Sample Input:
// // object consisting details of the customer
// const customer = {
//     firstName: "Srishti",
//     lastName: "Gupta",
//     gender: "female"
// };

// // object consisting details of the order
// const order = {
//     id: "SG101",
//     amount: 950,
//     items: ["Apparel", "Shoes", "Bag"]
// }
 
 
// Sample Output:
// Hi Srishti Gupta! Your order for 3 items has been successfully placed. Thank you!

/**
 * Function to print the order summary with the given customer and order details 
 */
const printOrderSummary = () => {
    // TODO: Rewrite the message given below using template literals (template strings)
    //let message = "Hi " + customer.firstName + " " + customer.lastName + "! Your order for " + order.items.length + " items has been successfully placed. Thank you!";
    let message = `Hi ${customer.firstName} ${customer.lastName}! Your order for ${order.items.length} items has been successfully placed. Thank you!`;
    console.log(message);
}

// object consisting details of the customer
const customer = {
    firstName: "Srishti",
    lastName: "Gupta",
    gender: "female"
};

// object consisting details of the order
const order = {
    id: "SG101",
    amount: 950,
    items: ["Apparel", "Shoes", "Bag"]
}

printOrderSummary(customer, order);