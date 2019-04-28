// Function before ES6 i.e ES5

function print(firstName, lastName){
    return firstName+" "+lastName;
}
print("Hussain","Shaik");

// Funtion in ES6(Arrow)
const print1 = (firstName, lastName)=>{
    return firstName+" "+lastName;
}

print1("Hussain","Shaik");

//Q Print 'title' & 'author' of a novel:
// Description
// You are given an object named novel. This object has the setter method named set() which sets the title and author of the novel. The novel object has another method named get(), which prints the title and author of the novel set by the user on the console. The get() method contains a normal function named print() which does the same thing of printing the title and author of the novel. 

// Currently, the function print() is not correctly printing the title and author of the novel. You are required to rewrite the print() function as an arrow function such that the output on the console is as follows:
 
// Title = Pride and Prejudice, Author = Jane Austen
// Title = Pride and Prejudice, Author = Jane Austen
// novel object
const novel = {
    /**
     * Setter method to set the title and author of the novel
     */
    set: function(title, author) {
        this.title = title;
        this.author = author;
    },
    /**
     * Getter method to print the title and author of the novel
     */
    get: function () {
        console.log("Title = " + this.title + ", Author = " + this.author);
        
        /* TODO: Convert the function named print to an arrow function so that the output from this function is:
        Title = Pride and Prejudice, Author = Jane Austen
        */
       /**
        * Function to print the title and author of the novel
        */
        let print = () => {
            console.log("Title = " + this.title + ", Author = " + this.author);
        }
        print();
    }
}

let title = "Pride and Prejudice", author = "Jane Austen";
novel.set(title, author); // setting the keys title and author of the novel object as the ones defined in the above line
novel.get();

//Q 
// Arrow Functions
// Which of the following functions, when called with the argument “Srishti”, correctly print(s) the given output on the console?
const greet1 = (name) => {
    return console.log("Hello " + name);
 }
 
 const greet2 = name => {
    return console.log("Hello " + name);
 }
 
 const greet3 = name => console.log("Hello " + name)
 
//  const greet4 = (name) {
//     console.log("Hello " + name);
//  }
 
//  const greet5 = name {
//     console.log("Hello " + name);
//  }
greet1("Srishti");
greet2("Srishti");
greet3("Srishti");

//Q Print Android Versions
/* TODO 1: Define an arrow function based on the information given in comment below
The identifier used for this function must be mergeWords.
*/

/**
 * Function to merge the given array of words (strings) into a single string separated by the given delimiter
 * @param {*} wordsArr array consisting of a list of single-word strings
 * @param {*} delimiter sequence of one or more characters used to distinguish between different words
 */
let mergeWords = (wordsArr, delimiter) =>{
    let message ="";
      wordsArr.forEach(function(word, index){
          if(index == wordsArr.length-1){
            message = message+word;
          }else{
            message = message+word + delimiter;
          }
          
      });
      
      return message;
  }
  
  /* TODO 2: Define an arrow function based on the information given in comment below
  The identifier used for this function must be printMessage.
  */
  /**
   * Function to log message to the console
   * @param {*} message message to be logged on to the console
   */
  let printMessage = message => 
      console.log(message);
    
  
   
  /* TODO 3: Call the arrow function named mergeWords defined earlier with the argument words defined as an array for you and a comma (",") as the delimiter
  & 
  Call the arrow function named printMessage while passing the result of the function named mergeWords as an argument to it
  */
  
  const words = ["Kitkat", "Lollipop", "Marshmallow", "Noughat", "Oreo"];
  let result = mergeWords(words, ",");
  printMessage(result);