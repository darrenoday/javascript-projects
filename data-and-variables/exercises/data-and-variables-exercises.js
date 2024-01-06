// Declare and assign the variables below
let shuttle = 'determination';
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKm);


// Calculate a space mission below
let milesMars = distanceMars * milesPerKm;
console.log (milesMars);
let hoursToMars = (milesMars / shuttleSpeed);
console.log (hoursToMars);
let daysToMars = hoursToMars / 24;
console.log (daysToMars);





// Print the results of the space mission calculations below
console.log (shuttle + " will take " + daysToMars + " days to reach Mars.") 
// Calculate a trip to the moon below
let milesToMoon = distanceMoon * milesPerKm;
console.log (milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeed;
console.log (hoursToMoon);
let daysToMoon = hoursToMoon / 24; 
console.log (daysToMoon);




// Print the results of the trip to the moon below
console.log (shuttle + ' will take ' + daysToMoon + ' days to reach the moon.');