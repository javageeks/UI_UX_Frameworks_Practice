// Calculate sum after tax
// Description
// You are required to define a function which calculates the sum of all the prices after applying the given tax on each price. The sum of all the increased prices is then printed on the console.
 
 
// Sample Input:
// Tax (in percentage) = 10
// Prices = 10, 20, 30
 
// Sample Output:
// 66
 
// For each price, the tax is calculated as 10% of the price. Thus, each price increases by 10% of the given price values. At the end, all the increased prices are summed up, thus giving the final value as 66.

/* TODO: Define a function with identifier calculateSumAfterTax
This function calculates the sum of all the prices after applying given tax on each price. 
*/
let calculateSumAfterTax = function(percentage, ...prices){
    let result =0
    prices.forEach(price => {
    result += price + (price * percentage)/100
      
    })
  return result;
    
  }
  // Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
  console.log(calculateSumAfterTax(10, 10, 20, 30));