var x = 3 ** 3 / 3;
console.log(x);

// ** ---> precedence is 15
// / ---> precedence is 14

// 27 / 3 -->  9

var y = 3 ** (3 / 3);
console.log(y);

// operator ()  ---> precedence is 20

// 3 ** 1 --> 3

//Q1
console.log(2 ** 4 / 4);
// ** > / 
// 2**4 = 16
//16/4 = 4
// According to the precedence of operators in JavaScript, the ** will be evaluated before the / operator. Thus, 2**4 will be evaluated first which will give the result as 16, which is then divided by 4, giving 4 as the final result.

//Q2
console.log(2 ** 3 ** 2);
// 3**2 = 27
// 2**27 = 512
// Associvity for ** operator is Right to Left

// In Javascript, the associativity of  ** operators is always from right to left in the order. Thus, in 2**3**2, 3**2 will be evaluated first which comes out to be 9. Now the expression reduces to 2**9 which is 512. Hence 512 gets printed on the console. Let's watch the next video to understand how this unfolds

// Associvity: 
var z = 125/25/5;
console.log(z);
// operator / associvity is from Left To Right
// 125/25 = 5
// 5/5 = 1

//Q3
var x = y = 10;
console.log(x,y);
// Since both the operators used here is same (=), thus associativity rules apply. The associativity of the assignment operator is from right-to-left. Thus, the expression on the right will be evaluated first, so y = 10 is evaluated first. After 10 is assigned to y, the expression x  = y is evaluated. So first the value of 10 is assigned to y, and then the value of y is assigned to x, thus resulting in printing the value 10 10 for the given statement.

// Precedence and Associativity of all operators :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table