// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init (){
const upButton = document.getElementById("up")
const downButton = document.getElementById("down")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const takeoffButton = document.getElementById("takeoff")
const landingButton = document.getElementById('landing')
const missionAbortButton = document.getElementById('missionAbort')
const flightStatus = document.getElementById('flightStatus')
const backColor = document.getElementById("shuttleBackground")
let height = document.getElementById("spaceShuttleHeight")
let rocket = document.getElementById('rocket')

rocket.style.position = "absolute"
rocket.style.bottom = "0px"
rocket.style.left = "0px"





takeoffButton.addEventListener('click', event => {
    let readyStatus = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if(readyStatus){
        flightStatus.innerHTML = "Shuttle in flight.";
        backColor.style.backgroundColor = "blue";
        height.innerHTML = parseInt(10000)
        }

});

landingButton.addEventListener('click', event => {
    window.alert("The shuttle is landing. Landing gear engaged");
    flightStatus.innerHTML = "The shuttle has landed";
    backColor.style.backgroundColor = "green";
    height.innerHTML = 0;
});

missionAbortButton.addEventListener('click', event => {
    let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
    if(abortConfirm){
        flightStatus.innerHTML = "Mission aborted."
        backColor.style.backgroundColor = "green"
        height.innerHTML = 0;
    }

    
    
    

});
upButton.addEventListener('click', event => {
   height.innerHTML = parseInt(height.innerHTML) + 10000;
   rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";

});
downButton.addEventListener('click', event =>{
    height.innerHTML = parseInt(height.innerHTML) - 10000;
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";


});

leftButton.addEventListener('click', event => {
    rocket.style.left = parseInt(rocket.style.left) - 10 + "px";

});

rightButton.addEventListener('click', event =>{
    rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
} )




}


window.addEventListener("load", init);