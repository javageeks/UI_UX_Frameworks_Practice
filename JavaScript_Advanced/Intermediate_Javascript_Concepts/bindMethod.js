var person = {
    firstName: "Sakshi",
    lastName: "Jain",
    get: function () {
        console.log("Outer: " + this.firstName + " " + this.lastName);
        var print = function (role) {
            console.log("Inner: " + this.firstName + " " + this.lastName + ". I am a " + role + ".");
        }.bind(this, "Developer");
        print();
    }
 };
 
 person.get();

 // If we change 
//  var print = function (role) {
//     console.log("Inner: " + this.firstName + " " + this.lastName + ". I am a " + role + ".");
//  }.bind("Developer", this);
 

//  Suggested Answer

// When you change the order of the arguments (passing “Developer” first and then passing the context), the following output is given:

// Inner: undefined undefined. I am a [object Object].

// This proves that you must not change the order of the arguments. The first argument should always be the context that will be used for ‘this’ keyword inside the function and the subsequent arguments can be anything that you wish to pass to the function.

// Here, the “Developer” is passed as the context. Since no keys named firstName and lastName are found for the object referred to by the ‘this’ keyword, the values printed for this.firstName and this.lastName are therefore undefined and undefined respectively. Now, when the argument ‘this’ (context of the person object) is passed as the argument, the role parameter accepts it and when you try to print the value of role parameter, [object Object] is printed to the console, which is the default conversion of an object to a string.

