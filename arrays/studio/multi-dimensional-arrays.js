let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
console.log(food = food.split(",").sort());
console.log(equipment = equipment.split(",").sort());
console.log(pets = pets.split(",").sort());
console.log(sleepAids = sleepAids.split(",").sort());
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold =[];
 
cargoHold.push(food, equipment, pets, sleepAids)

console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
info = input.question("Please select a cabinet number (0-3) ")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (info <= 3){
    console.log(cargoHold[info])
} else {
    console.log("invalid input, must be a number 0-3 ")
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
info = input.question("Please select a cabinet number (0-3) ")
if (info <= 3){
    console.log(cargoHold[info])
    info2 = input.question("Please select an item ")
    if (cargoHold[info].includes(info2)){
        console.log(`Cabinet ${info} DOES contain ${info2}.`)
        
    } else { 

     console.log(`Cabinet ${info} does NOT contain ${info2}.`)
    }
} else {
    console.log("invalid input, must be a number 0-3) ")
}
