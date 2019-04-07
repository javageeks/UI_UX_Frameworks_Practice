/* ========= Boolean Data Type ============ */

console.log(22>0);  // true
console.log(18 == 18); // true
console.log(true && false); // false
console.log(false || true ); // true

console.log(true == "true"); // false

console.log(true || 0); // true
console.log(false == 0); // true
console.log(true == 1); // true

/* =============== NULL Data Type =================*/

var marks =null;
console.log(marks);

marks = 10;
console.log(marks);

/* ============= Undefined Data Type ===============*/

var marks;
console.log(marks); // undefined

console.log(null == undefined); // true

console.log(isNaN(1 + null));  // false
console.log(isNaN(1 + undefined)); // true

var x;
console.log(x); //undefined
//console.log(a); // Not defined

console.log(typeof 12); // number
console.log(typeof true); // boolean
console.log(typeof "Hussain"); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object 

console.log(0 =="0"); // true
console.log(0 ==="0") // false -- checking data types 

console.log(typeof('5'),typeof(''));

//Q 
// Store your hometown's name in variable hometown
var hometown = "Bangalore";
//Store do you stay here in a variable doYouStay as true or false boolean values
var doYouStay = true;
// Store the type for each variable in separate variables

hometownType = typeof(hometown);
doYouStayType = typeof(doYouStay);

// Print the Datatype
console.log(hometownType);
console.log(doYouStayType);
