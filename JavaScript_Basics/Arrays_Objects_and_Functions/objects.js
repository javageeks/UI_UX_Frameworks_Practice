var book ={
    title :"The loard of the rings",
    pages : 9250,
    isAvilable : true
}

//Accessing Keys of Objects

console.log(book.title);

// can also use  bracket  notation 

console.log(book["title"]);

var book = {
    title: "The Lord of the Rings",
        pages: 9250,
      "is-available": true
};
console.log(book.title);
console.log(book["title"]);

var music = {
    rock: 'guitar',
    classical: 'violin'
  };
  var  classical = 'rock';
  var  sound = music[classical];
  console.log(sound);

  var  music = {
    rock: 'guitar',
    classical: 'violin'
  };
  var  classical = 'rock';
  var  sound = music.classical;
  console.log(sound);


  // You have been provided with an object containing different items and their properties
// You need to store the elements that have to be bought in an array named itemList
// The items that have to be bought have the value of key isAvailable as false

var itemsToBuy = {
    bread : {
        isAvailable : false,
        quantityToBuy : 2,
    },
    eggs : {
        isAvailable : true,
        quantityToBuy : 0
    },
    tomatoes : {
        isAvailable : false,
        quantityToBuy : 23
    }
}

// Create a new array here.
var itemList = [];
// Write the logic for pushing the elements to be bought in the array here
for(var k in itemsToBuy){
    if(!itemsToBuy[k].isAvailable){
        itemList.push(k);
    }
  
   
}


// Print the array here
console.log(itemList);


var person = {
    id: 101,
    email: 'alice11@gmail.com',
    personalInfo: {
        name: 'Alice',
        address: {
            line1: 'Smith Avenue',
        }
    }
};

console.log(person.id);
//console.log(person[id]);
console.log(person["id"]);

var person = {
    id: 101,
    email: 'alice11@gmail.com',
    personalInfo: {
        name: 'Alice',
        address: {
            line1: 'Smith Avenue',
        }
    }
};

console.log(person["personalInfo"]["name"])
console.log(person["personalInfo"].name);
console.log(person.personalInfo.name);
console.log(person.personalInfo["name"]);