//bind() method:
var person = {
    firstName: "Sakshi",
    lastName: "Jain",
    get: function () {
        console.log("Outer: " + this.firstName + " " + this.lastName);
        var print = function () {
            console.log("Inner: " + this.firstName + " " + this.lastName);
        }.bind(this, "Developer", "JavaScript");
        print();
    }
};

person.get();

//call() method:
var person = {
    firstName: "Sakshi",
    lastName: "Jain",
    get: function () {
        console.log("Outer: " + this.firstName + " " + this.lastName);
        var print = function (role, language) {
            console.log(role, language);
            console.log("Inner: " + this.firstName + " " + this.lastName);
        }.call(this, "Developer", "JavaScript");
    }
};

person.get();


//apply() method:
var person = {
    firstName: "Sakshi",
    lastName: "Jain",
    get: function () {
        console.log("Outer: " + this.firstName + " " + this.lastName);
        var print = function (role, language) {
            console.log(role, language);
            console.log("Inner: " + this.firstName + " " + this.lastName);
        }.apply(this, ["Developer", "JavaScript"]);
    }
};

person.get();

// Q1
var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);

        var setModel = function (model) {
            this.model = model;
        }.bind(this);

        var setOS = function (os) {
            this.os = os;
        }

        setCompany();
        setModel();
        setOS();
    },
    get: function () {
        console.log(this.company, this.model, this.os);
    }
};

laptop.set("Dell", "Inspiron", "Windows");
laptop.get();

// Q2
// bind(), call() and apply() methods
// Description
// Imagine that there is a programming contest and there are several teams which have participated in this contest. Each team consists of two participants. Before the start of the contest, it is customary that both the participants of the team are greeted. Amongst these teams, there is a team containing two members – Srishti and Prateek. Thus, the output should print the following message on the console:

// Welcome Srishti Prateek 
var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 1: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using bind() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function(){
            console.log("Welcome "+ this.participantOne+" "+this.participantTwo);
       }.bind(this);
      greetParticipants(); 
    }
}

team.print();


var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 2: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using call() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function(){
            console.log("Welcome "+ this.participantOne+" "+this.participantTwo);
       }.call(this);
    }
}

team.print();


var team = {
    participants: ["Srishti", "Prateek"],
    print: function () {
        /* TODO 3: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using apply() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function(participant1, participant2){
            console.log("Welcome "+ participant1+" "+participant2);
       }.apply(this, this.participants);
    }
}

team.print();