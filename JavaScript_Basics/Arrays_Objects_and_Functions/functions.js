function applyDiscount(cartAmount, discount) {
    cartAmount -= discount;
    return cartAmount;
   }
   
   console.log(applyDiscount(1000, 100));

   function f(x) {
    return x * x;
};

console.log(f(x));


var x = function(){
    return 4*4;
};

console.log(x);

function add(x = 10, y = 20, z = 30){
    return x + y + z;
}
console.log(add(13,45));

function add(){
    return arguments[0] + arguments[2];
}
add(1,345);


var match= {
    team1: "Man City",
    team2: "Liverpool",
    winner: function() {
        alert("Man City beat Liverpool 5-0");
    }
    }
match.winner();

