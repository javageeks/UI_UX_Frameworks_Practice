// remember that a string should always be enclosed within quotes - single '' or double "".
//Q1
// Variable to define Sixth planet of our Solar System in a variable by name planet
var planet = "Jupiter";
// Print the variable here
console.log(planet);


/** ESCAPE NOTATION  */

//C:\Program Files\nodejs
console.log("C:\\Program Files\\nodejs");



/* ============== String Concatenation and Length of Strings =============== */

var name = "  ";
console.log(name.length);

var sum = 10 + 15;
console.log(sum);

var name = "Up" + "grad";
console.log(name);

//Q1
console.log('Hussain Shaik'.length);
//The output will be 13 as Srishti contains 7 letters, Gupta contains 5 letters and space is also counted as a character.

//Q2
var stringOne = "UpGrad";
var stringTwo = "Education";
var stringThree = stringOne + stringTwo;
console.log(stringThree);
console.log(stringThree.length);

/* ===========Type Coercion  ==============*/
//Q1
var x = 4 + "Hello";
console.log(x);
// In JavaScript, while adding two different data types, one of the data types is converted to another so that the operation can be performed. Here, the number is converted to a string. Thus, 4 is converted into a string “4”. Thus, the + operator now acts as the concatenation operator and concatenates the strings “4” and “Hello”, resulting in “4Hello”.

var x = 1 + 2 + "Hello";  // 1 +2 = 3  ==> "3" + "Hello" = 3Hello
var y = "Hello" + 1 + 2 ; // "Hello" + "1" + 2 ==> "Hello1" + "2" = Helllo12 
console.log(x, y);

//Q2
var x = 2 + 3 + "Hello"; // 5Hello
console.log(x);
/* In the given expression, the plus operator has been used twice. Since the same operator is used, the associativity rules apply. The associativity of the plus operator is from left-to-right and this is why, the given expression is evaluated from left to right. Thus, 2+3 will be evaluated first, resulting into 5 and this will be added to the string "Hello". Now, type coercion happens because the first operand is a number and the second is a string. Thus, the first operand, which is a number, is converted into string. Thus, number 5 becomes string ‘5’. Now, the plus operator behaves as a concatenation operator. Thus, the two strings - ‘5’ and ‘Hello’ are concatenated together, resulting into ‘5Hello’. Therefore, this option is the correct choice.*/

//Q3 You need to print the string ‘6upgrad23upgrad21’ using only the string ‘upgrad’ and the numbers- 2 and  3. 
var temp = 3-2;
console.log(3+3+"upgrad"+2+3+"upgrad"+2+temp);



/* ====================== Conversion between String & Number type ===============================*/

var x = "20";
var y = "2";
var sub = x-y;
console.log(sub); // It retrun 18 ==> x and y are converted to numbers

var x = "20";
var y = "2a"; // Not valid Number 
var sub = x-y;
console.log(sub); // It return NaN ==> Not Number 
console.log(isNaN(sub)) // It return true

// Converting number to string
var a = 20; // number
a.toString(); // String 

//Converting Sting to number
// 1st way
console.log(Number("10")); //10
console.log(Number("10a")); //NaN
// 2nd way
console.log(parseInt("10")); //10
console.log(parseInt("10.10")); //10
console.log(parseInt("10a")); //10
//2rd way
console.log(parseFloat("10.20")); //10.2
console.log(parseFloat("10.20a")); //10.2

//Q1
var x = parseInt("10.3");
console.log(x); //10

//Q2
var x = parseFloat("10.3")
console.log(x);



