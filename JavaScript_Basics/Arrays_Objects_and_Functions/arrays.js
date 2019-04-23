var yearArr = [2000, 2001, 2002, 2003, 2004]

// Print the array here
console.log(yearArr);

// Array Shopping List
// Description
// Create an array in which you need to add the following items and their required numbers.
// The items that you need are
// Milk - 2
// Bread - 3 
// Potato - 12

// Create an array in which you need to add the following items and their required numbers.
//Name the array shoppingList
var shoppingList = [];
// Milk - 2
shoppingList[0] = "Milk-2";
// Bread - 3
shoppingList[1] = "Bread-3";
// Potato - 12
shoppingList[2] = "Potato-12";
console.log("Shopping List -");
for(var i =0; i<shoppingList.length; i++ ){
    
    console.log(shoppingList[i]);
}


// Properties of Array
// Description
// You are given an array carNames = [Honda, Ferrari, Porsche,Fiat]
// You have to perform the operations given below in the order they are given and then print the array after every operation.
// Remove Fiat from the end of the array.
// Add Mazda to the end of the array.
// Remove Honda from the front/beginning of the array
// Add Ford to the front/beginning of the array

var carNames = ['Honda','Ferrari','Porsche','Fiat'];
// You have to print the array carNames after you perform each operation.
// Remove Fiat from the end of the array.
 carNames.pop();
 console.log(carNames);
// Add Mazda to the end of the array.
 carNames.push("Mazda");
 console.log(carNames);
// Remove Honda from the front of the array.
 carNames.shift();
 console.log(carNames);
// Add Ford to the front of the array.
 carNames.unshift("Ford");
 console.log(carNames);