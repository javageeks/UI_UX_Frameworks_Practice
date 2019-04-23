var p;
console.log("P", p);
p = 20;

add(1, 2);
function add(x, y) {
    console.log(x + y);
}

//add(1, 2);



// var add;
// add(1, 2);

add(1, 2);

var add = function (x, y) {
    console.log(x + y);
};
//Uncaught TypeError: add is not a function

console.log(x);
var x;
x = 10;

// In JavaScript, all the variables are hoisted at the top of their scope. In the given code snippet, the declaration of the variable x is moved to the top of its scope, which is the global scope. So, this code snippet is converted to:

// var x;
// console.log(x);
// x = 10;
// Any variable, if left uninitialized, is assigned a value undefined in JavaScript. The next statement is the console.log() statement, which prints the value of x as undefined on the console. Thus, this option is the correct choice.

// TODO: Refactor the code snippet given below so that the output is the average of the numbers 1, 2, 3, 4, and 5, which is equal to 3.
// var average, arr;


// console.log(average(arr));
// arr = [1, 2, 3, 4, 5];

// function average(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }


//     var sum = 0;
//     return sum / arr.length;
// }

var average, arr;
console.log(average(arr));
function average(arr) {
    var sum = 0;
    arr = [1, 2, 3, 4, 5];
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }


    return sum / arr.length;
}