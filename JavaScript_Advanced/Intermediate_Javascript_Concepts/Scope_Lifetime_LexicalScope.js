// Javascript scope 
var x = 15;
function foo() {
    var x = 20;
    console.log(x); // 20  -- x in local scope
}

function bar() {
    var y = 30;
}
//console.log(y); // undefined , y is in local scope
// ========================
function test() {
    console.log(x);
}
test();
//==========================
function foo1() {
    var z = 100;
    bar1();
}

function bar1() {
    // console.log(z);  // z is not defined
}

foo1();

//=================
function foo2() {
    var b = 20;
    bar2();
    function bar2() {
        console.log(b);

    }
}

foo2();

// ================= Lexical Scope ======================= //

function fun1() {
    var x = 99;
    fun2();
    function fun2() {
        var y = 88;
       // console.log(z); // error undefine
        fun3();
        function fun3() {
            var z = 77;
            console.log(x, y , z);
        }
    }
}
fun1();

//Q
/* TODO 1: Declare a variable with identifier itemsInCart in your code and initialize it with 0. 
Figure out the proper place where this variable needs to be declared.
*/
var itemsInCart = 0;
/* TODO 2: Defined a function with identifier addItem, which does the following:
a) Increments the number of items in the cart
b) Prints a message "Item added to cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function addItem(){
    itemsInCart++;
        var numberOfItemsInCart = itemsInCart;
    
    console.log("Item added to cart!");
    console.log("Item(s) in cart = " +  numberOfItemsInCart);
}
/* TODO 3: Defined a function with identifier removeItem, which does the following:
a) Decrements the number of items in the cart
b) Prints a message "Item removed from cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function removeItem(){
    itemsInCart --;
    var numberOfItemsInCart = itemsInCart;
    console.log("Item removed from cart!");
    console.log("Item(s) in cart = " + numberOfItemsInCart);

}
// WARNING: DO NOT EDIT THE CODE GIVEN BELOW
console.log("Initially: Item(s) in cart = " + itemsInCart);
addItem();
addItem();
removeItem();

// ===============================
var x = 23;

function foo() {
   console.log(x);
}

x = 45;

foo();

// ============================
function foo() {
    var xx = 34;
    bar();
    xx = 75;
 }
 
 function bar() {
   // console.log(xx);
 }
 
 foo();
//  This code snippet will throw an error. Though the function bar() is called inside the function foo() but their scopes remain different for the function is just called inside another function and not actually declared and defined in another function. This makes their scopes different and a variable defined in one scope cannot be referenced in another scope. Thus, the variable x, which is in the scope of function foo(), cannot be referenced in scope of function bar(). This is because their scopes are different. Therefore, this option is the correct choice.

//Q
function alpha() {
    var xxx = 3;
   // gamma();  // Error    
 
    function beta() {
        function gamma() {
            var yyy = 9;
            console.log(xxx); // statement 1
            console.log(yyy); // statement 2
        }
    }
 }
 
 alpha();