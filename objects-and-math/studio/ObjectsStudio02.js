// Code your orbitCircumference function here:
function findCircumference(radius){
  let circumference;
circumference = (2 * Math.PI * radius);
circumference = Math.round(circumference)
return circumference
}

 
// Code your missionDuration function here:
function findMissionDuration(orbitsCompleted, orbitRadius, orbitSpeed){
let circumference = findCircumference(orbitRadius)
let missionDuration;

orbitPeriod = (circumference/ orbitSpeed)
 missionDuration = (orbitPeriod * orbitsCompleted)
 missionDuration = missionDuration.toFixed(2)
 return (`The mission will travel ${circumference * orbitsCompleted} km around the planet, and it will take ${missionDuration} hours to complete `)

}

console.log(findMissionDuration(5, 2000, 28000));


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  candidatesSelected = []
   let i;
  
  while (candidatesSelected.length < 1){
  i = Math.floor(Math.random()*6)
    
    if (!candidatesSelected.includes(arr[i]))

    candidatesSelected.push(arr[i])

  }
  return candidatesSelected
}
// Code your oxygenExpended function here:

function oxygenExpended(astronaut){
  let o2;
  hours = findMissionDuration(3, 2000, 28000)
  o2 = astronaut.o2Used(hours)
  return (`${astronaut.name} will perform the spacewalk, which will last ${hours} and require ${o2} kg of oxygen.`)
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(candidateA));