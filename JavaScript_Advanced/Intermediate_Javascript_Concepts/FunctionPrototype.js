var a;

//console.log(a.__proto__);
var b = null;

console.log(b.__proto__);

//Q
// Create an object named shape which has some keys. One of these keys is is2D, which has the Boolean value true. 
 
// After this, create an object named circle consisting of a key named radius. The value corresponding to the radius key is 3.
// Now, create another object named rectangle consisting keys named length and breadth.
// The values corresponding to the length and breadth keys are 1 and 2 respectively. 
 
// Now, change the prototype of the circle as well as rectangle objects to the shape object.
 
// At the end, print the values of the keys is2D and radius on the circle object 
//and the values of the keys is2D, length, and breadth on the rectangle object.

// Sample Output Format:
// Is circle a 2D shape? true
// Radius of circle = 3
// Is rectangle a 2D shape? true
// Length of rectangle = 1, Breadth of rectangle = 2
 
var shape = {is2D:true};
var circle = {radius:3};
var rectangle = {length:1, breadth:2};

circle.__proto__ = shape;
rectangle.__proto__ = shape;
console.log("Is circle a 2D shape? ", circle.is2D );
console.log("Radius of circle = ", circle.radius);
console.log("Is rectangle a 2D shape? ", rectangle.is2D);
console.log("Length of rectangle =", rectangle.length,", Breadth of rectangle =", rectangle.breadth);
