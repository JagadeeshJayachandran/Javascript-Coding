//Working with strings

const nine = 'jagadeesh';
console.log([...new Set([...nine])]); // ["j", "a", "g", "d", "e", "s", "h"]

console.log('jagadeesh'.length); //9
console.log('jagadeesh'[2]); //g
const secondname = 'jayachandran';
console.log(secondname[3]); //a
console.log(secondname.indexOf('a')); //1
console.log(secondname.lastIndexOf('a')); //10
console.log(secondname.slice(4)); //chanddran
console.log(secondname.slice(0, 4)); //Jaya

//to get the first word of the string
const you = 'Always famoush';
console.log(you.slice(0, you.indexOf(' '))); //Always
//to get the last word of the string
console.log(you.slice(you.lastIndexOf(' ') + 1));
//to print the last character of the string
console.log(you.slice(-1)); //h

//challenge - Write a function that receives a airplane seat and log if its a middle seat or not

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const check =
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
      ? 'Middle seat'
      : 'Not a middle seat';
  console.log(check);
};

checkMiddleSeat('11E');

console.log(typeof new String('jaga')); // Object
