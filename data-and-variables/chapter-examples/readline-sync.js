const input = require('readline-sync');

let candidateName = ("");

let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");

candidateName = input.question("What is your name? ");
console.log("Hello, " + candidateName + ", welcome to the quiz!");

candidateAnswer = input.question(question);

if (candidateAnswer === correctAnswer) {
    console.log("That is correct!");
  } else {
    console.log("Incorrect!");
  }