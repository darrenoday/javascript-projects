//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let language2 = (language.slice(0, 1))
let language3 = (language.slice(4, 5))
console.log(language2.concat(language3))
//2. Without using slice(), use method chaining to accomplish the same thing.
let language4 = language.replace('ava','').replace('cript','')
console.log(language4)
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${language[0]}${language[4]}`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let language5 = language.replace('JavaScript', 'taco cat').toUpperCase().slice(5)
console.log(language5)
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let TitleCase = notTitleCase.replace('t','T').replace('c','C');
console.log (TitleCase);