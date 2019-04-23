
//M2Q1 {IF ELSE} :: Which of the following code snippet will throw an error?

// var x =35;
// if(x > 34){
//    console.log('Greater than 34');
//    console.log('Positive');
// }else
//    console.log('Less than 34');

// var x =35;
// if(x > 34)
//    console.log('Greater than 34');
//    console.log('Positive');
// else
//    console.log('Less than 34');

var x =35;
if(x > 34){
   console.log('Greater than 34');
   console.log('Positive');
}else{
   console.log('Less than 34');
}


var x =35;
if(x > 34){
   console.log('Greater than 34');
   console.log('Positive');
}else{
   console.log('Less than 34');
   console.log('Positive');
}

//M2Q2 Switch Case
//In which of the given scenarios would Switch case be unsuitable?


// A conditional has to be designed whereupon Green Signal a machine has to be turned on and upon Red Signal the machine would be turned off.


// A conditional has to be designed in which if a number is equal to 10, then “The number is 10” is printed on the console” or else “The number is not 10” is printed on the console


// A conditional has to be designed in such a way that is the number is less than 100, then “The number is less than three digits” or else “The number is more than two digits”

// Feedback :
// This case cannot be solved by using Switch case because as you learnt in the course, Switch case is not helpful when ranges have to be considered, In this example, there would be infinite cases for number larger than 100, hence this is not possible.

//M2Q3 For Loop
//What will be the last number printed when the code below is run?

var n=2;
 for (var i=n; i < 12;i=i+n){
     console.log(i);
 }


 //M2Q4 Objects
//Which of the following statements is false about objects.


// Values in the objects can be accessed like an element in an array is accessed. So the second value can be accessed by doing object[2].


// Objects can store values of multiple data types.


// Objects store data using key-value pairs.


// You can iterate over an object using for in loop.

//M2Q5 Function Declaration
//Which of the following is the correct declaration of a function? The function is not an anonymous function.

function sum(a,b) {
    var c = a+b;
 console.log(c);
}

// function sum(a b) {
//     var c = a+b;
//    console.log(c);
// }

// function(a,b) {
//     var c = a+b;
//    console.log(c);
// }

// sum(a,b){
//     var c = a+b;
//    console.log(c);
// }