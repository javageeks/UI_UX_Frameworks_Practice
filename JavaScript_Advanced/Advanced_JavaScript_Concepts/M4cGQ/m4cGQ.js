// MC4cGQ 1
// var orderId = null;

// var placeOrder = (callback) => {
//    console.log("Placing order...");
//    setTimeout(function () {
//        orderId = "101";
//        callback(orderId);
//    }, 2000);
// }

// var printOrderID = function (orderId) {
//    console.log("Order ID = " + orderId);
// }

// placeOrder(printOrderID());


// Order ID = undefined
// Placing order...
// Uncaught TypeError: callback is not a function

// Feedback :
// The function placeOrder() is called while trying to pass the function printOrderID() as the callback. Notice that the function printOrderID() is directly called when passed as an argument to the function placeOrder(). Now, when printOrderID() is called, the orderId is printed. Since, there is no value provided as the argument for orderId, the local variable orderId remains undefined, thus printing the message “Order ID = undefined”. Now, the function placeOrder is called with whatever printOrderID() returns as the callback function. Inside the placeOrder() function, the statement “Placing order…” is printed on the console. On the next statement, setTimeout() function is called which assigns a value to the global variable orderId after 2 seconds. Now, when this function finishes its execution after 2 seconds, result of printOrderID() function (whatever is returned by printOrderID) is called. Since the function printOrderID() returns undefined, which is obviously not a function, the result is a type error because a callback needs to be a function. Thus, this option is the correct choice.

// MC4cGQ 2

// Promise
// Choose the option which correctly displays the output of the two example code snippets given below:
// Example 1
var loadImage1 = new Promise(function (resolve, reject) {
    console.log("Example 1: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        resolve();
    }, 2000);
 });
 
 loadImage1.then(function () {
    console.log("Image loaded successfully!");
 }, function (error) {
    console.log(new Error(error));
 });
 
 // Example 2
 var loadImage2 = new Promise(function (resolve, reject) {
    console.log("Example 2: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        reject(new Error("Error in loading image!"));
    }, 2000);
 });