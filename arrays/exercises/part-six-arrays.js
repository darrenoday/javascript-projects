//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1, element2, element26);
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
let arr4 = [10,11,12];
let arr5 = [13,14,15];
let arr6 = [16,17,18];
let arr7 = [19,20,21];
let arr8 = [22,23,24];
let arr9 = [25,26,27];

let item1 = [arr1, arr2, arr3];
let item2 = [arr4, arr5, arr6];
let item3 = [arr7, arr8, arr9];

let array3D = [];
array3D.push(item1,item2,item3);
console.log (array3D);
console.log(array3D[0]);
console.log(array3D[1][1]);
console.log(array3D[2][2][2]);