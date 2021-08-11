//console.log (alert('nice'));
// let age = 27;
// let month = 12;
// let year = 2021;

// console.log (age, year, month,);

// just some randome code for training
const points = 500;
console.log (points); 

var score = 555;
score = 600;
console.log(score); 

//strings
let email = 'danylokuspis@gmail.com'
console.log ("I am living in Poznan");

//string concatenation

let firstName = 'Danylo';
let secondName = 'Kuspis';
let fullName = firstName + " " + secondName
console.log (fullName);

//getting characters
console.log (secondName [0]);

// string length
console.log (fullName.length);

//string methods
console.log (fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log (result);
let index = email.indexOf('.');
console.log (index);

//common string methods

let lastC = email.lastIndexOf('c');
console.log (lastC);

let cut = email.slice(0,3);
console.log (cut);

let fromposition = email.substr(4,5);
console.log (fromposition);

let replacing = email.replace('danylo', 'marko');
console.log (replacing);

let radius = 22;
const pi = 3.14;

//math operators +, -, *, /, **, %
//order of operation B I D M A S
//Brackets Indices Division Multiplication Addittion Subtraction

console.log (15/4);
let zalyszok = radius % 5;
console.log (zalyszok);
let multiplication = zalyszok*radius**3;
console.log (multiplication);

let likes = 100;
//likes = likes + 1;
//likes ++;
//likes --;
//likes += 10;
//likes -= 40;
//likes /= 20;
//likes *= 30;
console.log (likes);

//NAN - not a number
let sentence = 'the blog has ' + likes + ' likes'
console.log (sentence);

//template strings
const title = 'best post of 2020';
const author = 'Danylo';
const reads = 0;

//concatenation way
//let longsent = 'The ' + title + ' by ' + author + ' has ' + reads + ' reads'
//console.log (longsent);

//template string way
let longsent = `The ${title} by ${author} has ${reads} reads`;
console.log (longsent);

//creating html template
let html = `
<h2> ${title} <h2>
<p>By ${author} <p>
<span> This blog has ${reads} reads <span>
`;
console.log (html);


//arrays
let ninjas = ['Marko', 'Danylo', 'Yanki', 'Oleh'];
ninjas [2] = 'Petro'

console.log(ninjas [2]);

let ages = [22,27,30,31,32];
console.log(ages[3]);

let random = ['Marko', 'Danylo', 22, 24];
console.log(random);
console.log(ninjas.length);

// array methods
let newmethod = ninjas.join('/');
console.log(newmethod);

let concaten = ninjas.concat('Fed9', 'Valera');
console.log(concaten);

let pushmet = ninjas.push('Boom');
console.log (pushmet);
console.log (ninjas);
takeout = ninjas.pop();
console.log (takeout);

//null and unidentified

let age = null;
console.log(age, age + 3, `the age is ${age}`);

// booleans & comparisons
console.log(true, false, "true");

// methods can return boolens
let mail = 'tormoz@gmail.com';
let incl = ['tormoz', 'afa', 'uaajjjaa'];
let ret = mail.includes('@');
console.log(ret);

let mailincl = incl.includes("tormoz");
console.log(mailincl);

// comparison operators

let number = 300;

// is number = 300?
console.log(number==301);
// is number not = 300?
console.log(number != 300);

console.log(number > 299);
console.log(number >=300);

let text = "Vasyl"

console.log(text == 'vasyl');
console.log(text == 'Vasyl');

// loose comparison

console.log(number == 300);
console.log(number == '300');
console.log(number != 300);
console.log(number != '300');

// strict comparison (different types cannot be equal)
// is 'age' the same TYPE and VALUE to '25'

console.log (number === '300');
console.log (number === 300);
console.log (number !== '300');
console.log (number !== 300);

//type conversion

let goals = '100';
//goals = Number (goals);
console.log (goals + 1);
console.log (typeof goals);

let teamname = Number('liverpool')
console.log(teamname);

//let access = String(50);
//console.log (typeof access);

let access = Boolean(546);
console.log(access, typeof access);

//explain Booleans