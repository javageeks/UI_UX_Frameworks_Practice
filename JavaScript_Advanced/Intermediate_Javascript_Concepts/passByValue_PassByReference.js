var a = 10;
var b = a;
a = 15;
console.log(a, b);
//Q
var a = {key1: 1, key2: 2};
var b = a;

a = {newKey1: 10, newKey2: 20};
console.log(a, b);
//Q
var a = {key1: 1, key2: 2};
var b = a;

a.key1 = 3;
console.log(a, b);

//Q
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a , b); // a = 2 , b = 1 
}

var x = 1, y = 2; 
swap(x, y);
console.log(x , y); // x = 1, y =2

//Q
function swap(a, b) {
    a.a = a.a + b.b;
    b.b = a.a - b.b;
    a.a = a.a - b.b;
    console.log(a, b);
}

//var x = 1, y = 2;
var x = {a:1};
var y = {b:2};
console.log(x.a, y.b); // prints 1 2
swap(x, y);
console.log(x.a, y.b); // prints 1 2