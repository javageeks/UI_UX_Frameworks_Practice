
//Q1
console.log(6*7+3); //42 + 3 = 45
// When given a mathematical expression inside the console.log statement, the console treats it like a mathematical expression itself and makes the calculation, and then prints the result of this calculation on the console. Following the associativity and precedence rules, first 6*7 will give 42, and then 3 added to it will give 45.

//Q2

//String to Number Conversion
// You are making a program for a wholesale rice shop. The grocery shop owner makes an entry in the form of 23.5kg. Although you’ve told him not to do so, he always writes kg behind the quantity of rice. Which of the following will help you extract the exact quantity of rice from the string that the owner writes? Remember that a customer can purchase half kg of rice too.
// ANS : parseFloat()

//Q3
//ANS && 

//Q4

var message = "The nearest city is";
var city = "Goa";
// What is the correct Javascript syntax to store the text "The nearest city is Goa" in a variable called displayText, and then print this variable on the console?
 
// var displayText = message + " " + city;
// console.log("displayText");

// var displayText = "message" + " " + "city";
// console.log(displayText);

// var displayText = message + city;
// console.log(displayText);

var displayText = message + " " + city;
console.log(displayText);

//Q5
// Type Coercion
// What will be the output of this code snippet?

var x = 1 + 2 + ' Hello World ' + 3 + 4;
console.log(x); // 3Hello World34


