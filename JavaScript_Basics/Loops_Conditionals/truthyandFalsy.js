//Q1
//What would be the output of the below code?
console.log('false' == false); // false

// ================= If Statement ===============
var marks;
if(marks >= 33){
console.log("Passed!");
}

// =================== IF Else ==============
var marks;
if(marks >= 33){
console.log("Passed!");
}else{
    console.log("Failed!");
}

//Q
var x ; //x =100 300 401 nun 
if(x > 300 || x < 400){
    console.log("I am in the If block");
 }else{
    console.log("I am in the else block");
 }

 //Q
 var password = "9Acasd";
// Make the check here
if(password.length >= 6){
    console.log("Correct Password");
}else{
    console.log(" Password too short");
}

// =============== IF Else If ===================
var num; // num =10

if(num === 0){
console.log("Neither positive Nor negitive");
}else if(num>0){
console.log("positive");
}else{
    console.log("Negitive");
}

// Q
var x = 0;
var y = '0';
var z = '2 - 2';
if( x === y ){
   console.log("Pizza");
}
else if ( x  ===  z )
{
   console.log(" Pizza's Over");
}
else if( x == y )
{
   console.log('More Pizza’s Coming');         
}
else{
   console.log('Party’s Over go home');
}

// Q
// ================= Nested If else =============
var x;
if(x === 0){
   console.log('Neither +ve or -ve');
}else if(x > 0){
   console.log('+ve');
   if(x < 10){
       console.log('Single-digit +ve number');
   }else{
       console.log('Not a single-digit +ve number');
   }
}else{
   console.log('-ve');
   if(x > -10){
       console.log('Single-digit -ve number');
   }else{
       console.log('Not a single digit -ve number')
   }
}


// equalent If else 
var x;
if(x === 0){
    console.log('Neither positve or negative');
} else if(x > 0){
    console.log('Positive');
}else if( x < 10){
    console.log('Single digit positive Number');
}else if(x >= 10){
    console.log('Not a single digit positive number')
}else{
    console.log('Negative');
}

// Declare three variables n1, n2 and n3
var n1 = 0;
var n2 = 1;
var n3 = 4;

// Write the code to check the values here
if(n1<n2){
    if(n1<n3){
        console.log(n1);
    }
}else if(n2<n1){
    if(n2<n3){
        console.log(n2);
    }
}else if(n1<n3){
  console.log(n1);
}else if(n2<n3){
    console.log(n2);
}else if(n3<n2){
    if(n3<n1){
        console.log(n3)
    }
    
}

// You have to make a country code checker which checks from which country does the dialled number belongs to
// The options are
// 91 - India
// 55 - Brazil
// 81 - Japan
// 30 - Greece
// 47 - Norway
// If a number does not belong from any country, then you have to print "Other World"
// The number needs to be input as CC-XXXX-XXXX (CC being country code)

var phoneNumber = '35-2353-1234';
var input = parseInt('35-2353-1234');
switch(input){
   case 91:
   console.log("India"); 
   break;
   case 55:
   console.log("Brazil");
   break;
   case 81:
   console.log("Japan");
   break;
   case 30:
   console.log("Greece");
   break;
   case 47:
   console.log("Norway");
   default:
   console.log("Other World");
}

var options =  '1';
switch(options){
case 1 :
alert("Option is 1");
}

var num = prompt("Enter a number:");
num = parseInt(num);
var sum = 0, n = num;
while (n > 0) {
   sum += (n % 10);
   n = Math.floor(n / 10);
}
console.log("Sum of the digits of " + num + " = " + sum);

var x;
for (x = 1; x < 5; x=x+2) {
  console.log(x+1);
}

var product =1;
for(var num =1; num<=10; num++){
    product = product*num;
    console.log(product);
}
var n = 14;

for(var num =0; num<n ; num++){
    if(num % 2 == 0 || num % 3 == 0 || num % 6 == 0){
        console.log(num);
    }
}

// var a = 1;
// var b = 1;

// while(c<=n)
// {
//     System.out.print(c+" ");
//     a=b;
//     b=c;
//     c=a+b;
// }
var a = 1, b = 1, f;
/* complete this "for" loop */
for(var i=3; i <= 15 ;i++)
{
    f = a + b;
    a = b;
    b = f;
}

console.log(f)
for(i = 1 ; i < 10 ; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

for(i = 1 ; i < 10 ; i++){
    console.log(i);
    if(i % 3 === 0){
        break;
    }
}
