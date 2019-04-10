//Q
function modifyItem() {
    var items = 0;
 
    return {
        add: function() {
            console.log("Added item to cart!");
            items++;
        },
 
        getCount: function() {
            return "Items in cart = " + items;
        }
    }
 }
 
 var item = modifyItem();
 
 item.add();
 console.log(item.getCount()); // prints 1
 
 item.add();
 item.add();
 console.log(item.getCount()); // prints 3

 // Q
 function createEmployeeID() {
    var prefix = "employee";
    return generateID();
 }
 
 var generateID = function() {
    for (var i = 0; i < 5; i++) {
        console.log(prefix + i);
    }
 }
 
 var print = createEmployeeID();

//Q
function createEmployeeID() {
    var prefix = "employee";
    var generateID = function() {
        for (var i = 0; i < 5; i++) {
            console.log(prefix + i);
        }
    }
    return generateID;
 }
 
 var print = createEmployeeID();
 console.log(print());



 //Q
//  Generate User ID
// Description
// Imagine that there is a function that generates unique userID for each user. The user ID is formed in the following format:
 
// uid-100
 
// The number after the hyphen starts from 1 and keeps on incrementing for each new user added. Thus, the user IDs can be uid-1, uid-2, uid-3, and so on.
 
// You must achieve this using a closure function that is returned from the main function given inside the stub code. This closure function returns the generated ID. Make sure that you have a variable to maintain the count of the IDs generated till now and this variable is not exposed to the outer scope of the function in which it is defined.

// Notes:
// 1.    Your solution will be evaluated based on the correct output of the code, correct usage of closure function, and the correct syntax followed.
// 2.    Follow all the TODOs given in the stub.

var generateID = function() {
    // TODO 1: Declare & initialize variable named prefix with value "uid-"
     var prefix = "uid-"
    // TODO 2: Declare & initialize variable named count with value 0
     var count = 0;
    // TODO 3: return function which increments the count 
    //and returns the id formed with concatenating prefix and count
   return function(){
    count ++;
   // console.log(prefix+count);
   return prefix+count;
   }
        
}

// calling the generateID() and then storing the returned function inside the variable named create
var create = generateID();
// calling the create function thrice
console.log(create());
console.log(create());
console.log(create());
// create();
// create();
// create();