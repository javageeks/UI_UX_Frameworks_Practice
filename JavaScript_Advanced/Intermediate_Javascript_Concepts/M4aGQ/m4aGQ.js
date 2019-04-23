//Q1
var x = 22;
var a = 5, b;

function foo() {
   var y = 7;
   b = 2;
}

//console.log(x / y);  // just to stop error
console.log(a / b);

//Q2 Prototypes:
var person = {
    name: "Mayank Kumar",
    gender: "male"
 }
 
 var employee = {
    id: 1001
 }
 
 employee.__proto__ = person;
 console.log(person.__proto__);
 console.log(employee.__proto__);

 //Q3 Hoisting :
 var side = 5;
console.log(calculateArea(side));
//console.log(calculateVolume(side));   // commenting to void error for next question 

// Function to calculate area of a square
function calculateArea (side) {
   return side * side;
};

// Function to calculate volume of a square
var calculateVolume = function(side) {
   return side * side * side;
}

// Feedback :
// calculateArea() function is a normal function (defined with function keyword). In the case of a normal function, you can call the function before defining it. Thus, the first console.log() statement correctly prints the value 25 on the console.

// However, in case of a function, which is assigned to a variable, the function cannot be called before it is defined. The compiler treats the above code snippet as:

// var calculateVolume;
// var side = 5;
// console.log(calculateArea(side));
// console.log(calculateVolume(side));

// // Function to calculate area of a square
// function calculateArea (side) {
//    return side * side;
// };

// // Function to calculate volume of a square
// calculateVolume = function(side) {
//    return side * side * side;
// }
// Notice that the declaration of variable calculateVolume has been moved to the top of its scope (global scope in this case). Now, when you try to call the calculateVolume(side) function while passing the argument as side, you are actually trying to call a function on an undefined variable. This is why it throws a data type error saying “calculateVolume is not a function”. Therefore, this option is the correct choice.

//Q4 ‘this’ keyword:
var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   get: function() {
       console.log("Title = " + this.title + ", Author = " + this.author);

       var print = function() {
           console.log("Title = " + this.title + ", Author = " + this.author);
       }
       print();
   }
}

novel.get();

// Feedback :
// The ‘this’ keyword inside a method points to the object to which the method is attached. Thus, the ‘this’ keyword written directly inside the get() method in the given code snippet points to the novel object. Thus, the first console.log() statement prints the title as Pride and Prejudice and the Author as Jane Austen. This ‘this’ keyword inside a normal function (defined with function keyword) points to the global object. The console.log() statement inside the print() function, which is inside the get() method of the novel object, points to the global object. Now, since the variables title and author are defined in the global scope, they get bond to the global scope. This is why the values of these global variables - A Passage to India and E.M. Forster, are printed by the second console.log() statement. Thus, this option is the correct choice

//Q5  bind(), call(), apply() methods : 
var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.call(this, model);
 
        var setOS = function (os) {
            this.os = os;
        }.apply(this, os);
    },
    get: function () {
        console.log("Company = " + this.company + "\nModel = " + this.model + "\nOS = " + this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Windows");
 laptop.get();

//  Feedback :
// Note that the function setCompany() inside the set() method uses bind() method and when using the bind() method, you need to explicitly call the function. Since the setCompany() function is not called anywhere, the key named company of the laptop object is not updated and thus, retains its old value, viz., Apple.

// The function setModel() inside the get() method uses call() method and passes the argument model inside this function. Since the function which uses call() method is implicitly called, you do not have to call this function. Thus, this function successfully updates the model key of the laptop object.

// The function setOS() inside the get() method uses apply() method and passes the argument named os inside this function. Since the apply() method expects the arguments to be provided as an array and here, the argument is provided without enclosed in an array, this function, thus, throws a type error “CreateListFromArrayLike called on non-object”.

// Thus, this option is the correct choice.