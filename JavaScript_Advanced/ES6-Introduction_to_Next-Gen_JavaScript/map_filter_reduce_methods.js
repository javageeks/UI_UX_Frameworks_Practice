
const a = [10, 20, 30];
let n =1;
for(var i =0;  i<=a.length-1; i++){
    a[i] =  a[i]*5;
}
console.log(a);

// Better way 
const b = [10, 20, 30];

function multiply(arr) {
  for (let i = 0; i <  arr.length; i++) {
      arr[i] *= 5;
  }
}

multiply(b);
console.log(b);

// Using Map

const c = [10, 20, 30];
c.map(function(item){
 return item*5;
})
//console.log(c.map())

//Q Finding elements in the array
// Write JavaScript code to find all the elements which are greater than or equal to 15 in the array given below:
//const a = [10, 20, 30];

const e = [10, 20, 30];

function findElements(arr) {
   let newArr = [], index = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= 15) {
           newArr[index++] = arr[i];
       }
   }
   return newArr;
}

let arr = findElements(e);
console.log(arr);

// Sum of array 
const d = [10, 20, 30];

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
}

console.log(sum(d));


//Q
// ilter() method
// Description
// Now it's time to implement the filter function to convert a given array into one in which all elements are those which are multiples of 10. Given the array, input = [....], can you write a filter function on this array and reduce it to the one required? The input array has already been provided in the stub code. Store the output in a new array called "output" and print the resulting array.
// To verify your solution, you can look at the solution code of this question after submitting your code.

//Q
//Map, Reduce & Filter
// Description
// Now its time to implement the map function which we discussed about in the previous question on our input dataset array. Given the array, input = [....], can you write a map function on this array and convert all the decimal numbers in the given array into whole numbers? The input array has already been given in the stub code. Store the output in a new array called "output" and print the resulting array.
// You can verify your solution by checking the solution code once you submit your code.
// A sample input and output array has been provided here for your reference:

//Q
// Map, Reduce & Filter
// Description
// Now that you have seen how reduce() operation will be useful to calculate the total revenue of the company in one year, its time to write a simple code for this. Given the array, input = [....], can you write a reduce function on this array and calculate the total revenue of the company? The input array has already been given in the stub code. Store the output in a new array called "output" and print the resulting array.
// You can verify the solution by referring to the solution code once you submit your code.

// What you have
var input = [189.45, 12.89, 7.43, 167.98, 767.78, 23.89, 990.67, 289.7, 44.56, 97.65, 2345.87, 665.43, 7221.89, 58843.21];

var output = input.map(val => {
    return Math.trunc(val);
});
console.log(output);

var input = [234, 567, 273, 456, 598, 635, 644, 718, 750, 753, 801];
var output = input.reduce((val1, val2)=> {
    return val1 + val2 ;
})
console.log(output);

 
  