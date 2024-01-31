let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:1,
   move: function () {return Math.floor(Math.random()*11)},
   turns:0,

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)},
   turns:0,
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID:2,
   move: function () {return Math.floor(Math.random()*11)},
   turns:0,
};


let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 9,
   move: function () {return Math.floor(Math.random()*11)},
   turns:0,
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)},
   turns:0,
};

let crew = [superChimpOne, superChimpTwo, salamander, beagleOne, tardigradeOne];

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old
   and ${animal.mass} kilograms. Their ID is ${animal.astronautID}. `)
}

(crewReports(beagleOne));

function fitnessTest(racer){
  
   raceResults = []
   for (i=0; i < racer.length; i++){
        steps=0
       while (steps < 20){
       steps += (racer[i].move())
       racer[i].turns ++
       }
       if (steps >= 20){
        raceResults.push(`${racer[i].name} took ${racer[i].turns} turns to take 20 steps. `)
       }
       

   }
   return raceResults
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!