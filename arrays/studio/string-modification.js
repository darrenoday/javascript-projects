const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2
str2 = str.slice(3)+str.slice(0,3);
console.log(str2);
 

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str2} is the "psuedo-pig latin version of ${str} `);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info=input.question("How many letters do you want to swap?");
 str2 = str.slice(info)+str.slice(0, (info));
 console.log(`${str2} is the "psuedo-pig latin version of ${str} `);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
info=input.question("How many letters do you want to swap?")

if (info<=10){str2 = str.slice(info)+str.slice(0, (info))
    console.log(`${str2} is the "psuedo-pig latin" version of ${str} `)
} else { 
    (info = 3)
    
    str2 = str.slice(info)+str.slice(0, (info));
    
    console.log(`Input exceeds character limit, defaulting to 3! \n ${str2} is the "psuedo-pig latin version of ${str}`)
}