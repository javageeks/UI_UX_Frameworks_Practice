const customer = {
    firstName: "Sakshi",
    lastName: "Jain",
    country: "India",
    contact: 9999999999
 }

 const {fn, ln} = customer;

 console.log(fn, ln);   

//Q
// Object Destructuring
// Which of the following options correctly represents the output of the following code?
 const employee = {
    id: 101,
    gender: "male",
    department: "Tech"
 }
 
 const {id, dept} = employee;
 console.log(id, dept);
 //101 undefined

 //Q
//  Print name of a person
// Description
// You are given an object consisting of some details of a user such as firstName, lastName, nationality and gender. You need to destructure this object and extract the keys firstName and lastName into the alias identifier fn and ln respectively.
 
// The given object is as follows:

// const person = {
//     firstName: "Srishti",
//     lastName: "Gupta",
//     nationality: "Indian",
//     gender: "Female"
// };

// You need to print the first name and the last name of this person. Thus, the following message must be displayed on the console:
 
// Hello Srishti Gupta!

/**
 * Function to greet the user with his/her first name and last name
 * @param {*} person 
 */
const greetUser = (person) => {
    // TODO: Use spread operator to get the values of the keys - firstName and lastName with alias names fn and ln respectively

    // WARNING: DO NOT EDIT THE LINE GIVEN BELOW
    const {firstName:fn, lastName:ln }= person;
     console.log("Hello " + fn + " " + ln + "!");
}

// object for a person
const person = {
    firstName: "Srishti",
    lastName: "Gupta",
    nationality: "Indian",
    gender: "Female"
};

greetUser(person);