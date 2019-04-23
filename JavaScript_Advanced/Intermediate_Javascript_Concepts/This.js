var operation = {
   a: 1,
   b: 2,
  
   add: function() {
       this.a + this.b;
       console.log("a = " + this.a + ", b = " + this.b);
       var print = function() {
           console.log("a = " + this.a + ", b = " + this.b);
       }

       print();
   }
}

operation.add();

// The variable operation is an object which contains the keys - a and b (representing two operands) and a key named add (function to add the two operands). The add() is a method because it defined as a function for the key in the object operation. Inside the add() method, there is another variable named print, which contains a function. Now, this function is a normal function because it is not mapped to any key of the object

// the ‘this’ keyword inside the add() method points to the operation object and thus, this.a and this.b correctly prints the value of the keys - a and b defined in the operation object. Now, inside the print() function, the ‘this’ keyword points to the global object (window object in browsers) and since the keys a and b are not defined inside the window object, this.a and this.b prints undefined and undefined respectively

// 'this' keyword
// Choose the option which correctly displays the output of the code snippet given below:
var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   print: function() {
       console.log(this.title);
       console.log(this.author);
   }
}

novel.print();

// 'this' keyword
// Choose the option which correctly displays the output of the code snippet given below:
var novel1 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    get: function() {
        console.log("Title = " + this.title + ", Author = " + this.author);
    }
 }
 
 novel2 = {
    title: "A Passage to India",
    author: "E.M. Forster"
 }
 
 novel2.get = novel1.get;
 novel2.get();
 novel1.get();

//'this' keyword
//Description:
//You need to declare an object named employee which contains the keys – firstName and lastName. Inside this employee object, you need to define a method named get(), which prints the firstName and the lastName on the console.

// Example:
// For the firstName “Srishti” and lastName “Gupta”, the following message is printed on the console by the get() method:

// Srishti Gupta is an employee of our organization.

// Notes: 
// The message to be displayed on the console should use the exact template, which is shown in the example.
// Your solution will be evaluated based on the correct output displayed, the proper identifiers used as per the context provided and the correct syntax used while using the ‘this’ keyword.


employee = {
    firstName:"Srishti",
    lastName:"Gupta",
    get: function() {
        console.log(this.firstName + " " + this.lastName + " is an employee of our organization.");
    }
  }

  employee.get();