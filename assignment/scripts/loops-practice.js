console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(i);
}
// We need to update the i < to 6 so that the loop stops at 5.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i = 3; i <6; i++) {
  console.log(i);
}
// we updated the i variable to equal 3 but less than 6. confirmed in console.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10:');
for (let i = 2; i < 11; i++) {
  console.log('', i++);//end for
}

//updated let and adjusted greater than to 11. added increment to console.console.log
//confirmed in console.log that even number thru 10.

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
let array = [0,1,2,3,4,5]
console.log('STRETCH: countdown from 5 to 0');
for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']
for(let i = 0; i < stars.length; i++ ){
  console.log('for loop', stars[i]);
}// end for stars loop. confirmed loop in console.log

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for( set of stars) {
  console.log('for of loop', set);
  if( stars == '4');
  console.log();
} // end

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let index =0;
const max =5;

while (index < max) {
  console.log('Some stars using while:', stars[index]);
  index++;
}
// im thinking this is what the question is asking for? console. log
//logs each star in array in the console.

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
var i = 0;
const five = 6;
console.log('Count from 0 to 5');
while (i < five) {
  console.log('', (i));
  i++;
}
// used a whole loop to count from 0 to 5. changed const. console reads 0 -5.

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
let ii = 4;
let ten = 10;
console.log('count backwards from 10 to 5');
while (ii < ten) {
  console.log('', (ten) );
  ten--;
}
