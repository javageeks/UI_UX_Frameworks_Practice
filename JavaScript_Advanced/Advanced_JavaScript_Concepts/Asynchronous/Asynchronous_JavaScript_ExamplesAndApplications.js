//Syntax of setTimeout() method:
// ES5 Syntax
// setTimeout(function() {
//     // code to be executed
// }, timeInMs);

// ES6 Syntax
// setTimeout(() => {
//     // code to be executed
// }, timeInMs);

//Code Snippet:

setTimeout(() => {
    console.log("This is executed after 3 seconds");
}, 3000);
 

//Output: (after 3 seconds)

//This is executed after 3 seconds

//Q
// Practice setTimeout method
// Description
// Write a setTimeout() method in ES5 syntax which is executed after 1 second and prints the following message:
// This is executed after 1 second.

// Write another setTimeout() method in ES6 syntax (using arrow function) which is executed after 2 seconds and prints the following message:
// This is executed after 2 seconds.

// TODO 1: Write a setTimeout() method in ES5 syntax which is executed after 1 second and prints the message "This is executed after 1 second." on the console.
setTimeout(function() {
    console.log("This is executed after 1 second.");  
 }, 1000);
 
// TODO 2: Write a setTimeout() method in ES6 syntax which is executed after 1 second and prints the message "This is executed after 2 seconds." on the console.

setTimeout(() => {
 console.log("This is executed after 2 seconds."); 
}, 1000);

//Q
// Custom Clock
// Description
// Have you ever wondered how a clock ticks after each second? Now is the time to experience this exciting exercise. 
// You need to create you own clock which prints the current time on the console in the format hh:mm:ss. Let’s consider that the current time is15:28:35. Thus, the clock will display:﻿

const startTimer = () => {
    /* TODO:
    Define startTimer() function which prints the current time after each second for three times
    Time Format => hh:mm:ss
     */
    
    
    
       setTimeout(() => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        console.log(h + ":" + m + ":" + s);
    }, 1000);
    setTimeout(() => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        console.log(h + ":" + m + ":" + s);
    }, 2000);
    setTimeout(() => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        console.log(h + ":" + m + ":" + s);
    }, 3000);
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
    
    
    startTimer();

    // Best Solution for above problem 

    /**
 * Function to start the timer and to print the value of the current time in the format hh:mm:ss
 */
const startTimer = () => {
    const now = new Date();
    const h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = prefixWithZero(m);
    s = prefixWithZero(s);
    console.log(h + ":" + m + ":" + s);
}

/**
 * Function to print 0 in front of the numbers which are of single digit (0 - 9)
 * @param {*} i minutes or seconds
 */
const prefixWithZero = (i) => {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

for (let i=0; i<3; i++) {
	setTimeout(startTimer, i*1000);
}