// for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['Danylo', 'Marko', 'Orest', 'Oleh', 'Petro', 'Yanki'];
// for(let i = 0; i < names.length; i++){
//     //console.log (names [i])
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }
// console.log('loop finished')

//while loop

// let i = 0

// while(i < 5){
//   console.log('in loop: ', i);
//   i++;
//  }

// const names = ['Danylo', 'Marko', 'Orest', 'Oleh', 'Petro', 'Yanki'];
// //  console.log(names.length)
// let i = 0
// while(i < names.length){
//   console.log(names[i]);  
//   i++;
// }



// do while loops
// let i = 6

// do {
//   console.log('val of i is: ', i);
//   i++;
// } while(i < 5);



// if statements

// const age = 22;

// if (age > 20) {
//   console.log('you are over 20 years old');
// }

// const ninjas = ['Danylo', 'Marko', 'Orest', 'Oleh', 'Petro', 'Yanki'];

// if(ninjas.length > 5) {
//   console.log ("that's a lot of ninjas over here");

// }

// const pass = 'password';
// if (pass.length >= 8){
//   console.log('that password is migt safe');
// } else if(pass.length >= 7){
//   console.log('this password is safe');
// } else {
//   console.log('this password is not safe')
// }

// logical operators - OR || and AND &&

// const pass = 'password@@@';
// if (pass.length >= 14 && pass.includes('@')){
//   console.log('that password is might safe');
// } else if(pass.length >= 15 || pass.includes('@') && pass.length > 14){
//   console.log('this password is safe');
// } else {
//   console.log('this password is not safe')
// }


// Logical NOT (!)

// let user = false;

// if(!user){
//   console.log('you must be logged in to cont')

// }

// console.log(!true);
// console.log(!false);



// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) {

//   if (scores [i] === 0){
//     continue;
  
//   }

//     console.log('your score: ', scores[i]);

//   if(scores[i] === 100) {
//     console.log('congrats, you got rop score');
//     break;
//   }

// }


// switch statements

// const grade = 'X';

// switch(grade) {
//   case 'A':
//     console.log('you got an A');
//     break;
//   case 'B':
//     console.log('you got an B');
//     break;
//   case 'C':
//     console.log('you got an C');
//     break;
//   case 'D':
//     console.log('you got an D');
//     break;
//   case 'E':
//     console.log('you got an E');
//     break;
//   case 'F':
//     console.log('you got an F');     
//     break;
//   default:
//     console.log('not a valid grade');

// }


//variables & block sope

let age = 26;

if (true){
  let age = 87;
  let brother = 'Marko';
  console.log('inside 1st code block:', age, brother);


if (true) {
  let age = 23
  console.log('inside 2nd code block', age);
  }   
}

console.log('outside code block:', age);