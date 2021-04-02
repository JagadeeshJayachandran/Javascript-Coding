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

//To change the case:
const gratitude = 'Thanks for the pleasant life';

console.log(gratitude.toLowerCase());
console.log(gratitude.toUpperCase());

//Fix capilatization in the string
let president = 'bIDen';
president = president.toLowerCase();
president = president[0].toUpperCase() + president.slice(1);
console.log(president);

//Comparing emails

const expected = 'jaga@jaga.com';
const actual = ' Jaga@jaga.com';
const result = actual.toLowerCase().trim();
console.log(result);
console.log(expected === result);

//replacing
const amount = `$100`;
console.log(amount.replace('$', '#'));
const announcement = `All passenger please sit in passenger commode`;
console.log(announcement.replaceAll('passenger', 'passengers'));

//You can also use Regex to replace all string
const heading = `All forein ministers are in forein countries`;
console.log(heading.replace(/forein/g, 'foreign'));

//Booleans
const plane = 'A12RC A299jag';
console.log(plane.includes('RC')); //true
console.log(plane.startsWith('A12')); //true'
console.log(plane.endsWith('jag'));

//Practice excercise
const itemsAllowed = function (items) {
  const itemsToLowerCase = items.toLowerCase();
  const permits =
    itemsToLowerCase.includes('food') || itemsToLowerCase.includes('medicine')
      ? 'Not allowed'
      : 'allowed';
  console.log(permits);
};

itemsAllowed('I have some Medicine');
//split
const path = 'c/test/project/name.feature';
console.log(path.split('/'));
const [projectName, featureName] = path.split('/');
console.log(projectName, featureName); //c test
const [pathArray] = path.split('.');
console.log(pathArray.split('/'));
//split and Join
const myName = 'Jagadeesh Jayachandran';
const [firstname, lastname] = myName.split(' ');
console.log(['Mr', firstname, lastname.toUpperCase()].join(' ')); //Mr Jagadeesh JAYACHANDRAN
console.log(['Mr', firstname, lastname.toUpperCase()].join('_')); //Mr_Jagadeesh_JAYACHANDRAN
//Change first letter of each name into capital letter

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesarray = [];
  console.log(names);
  for (let n of names) {
    // namesarray.push(n[0].toUpperCase() + n.slice(1)); //Method 1
    namesarray.push(n.replace(n[0], n[0].toUpperCase())); //Method 2
    0;
  }
  console.log(namesarray);
};

capitalizeName('jagadeesh hari goenka');

//Padding
const ecg = 'my heart ecg';
console.log(ecg.padStart(30, '`')); //``````````````````my heart ecg
console.log(ecg.padEnd(40, '`')); //my heart ecg````````````````````````````
//Mask card number

const maskCardNumber = function (num) {
  const str = num + '';
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, `*`);
};

console.log(maskCardNumber(54657986541312));
console.log(maskCardNumber(465132454));
console.log(maskCardNumber(12345788888888));
//output
// **********1312
// script.js:369 *****2454
// script.js:370 **********8888

//Repeat
const message = 'I am happy all the time ';
console.log(message.repeat(5));
//Repeat exercise
const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planeInLine(5);
planeInLine(3);
//Output
// There are 5 planes in line 🛬🛬🛬🛬🛬
// script.js:381 There are 3 planes in line 🛬🛬🛬
//convertToCamelcase('first_name');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const texts = text.split('\n');
  console.log(texts);
  for (const [i, n] of texts.entries()) {
    const ss = n.toLowerCase().split('_');
    if ((ss.length = 2)) {
      console.log(
        `${(
          ss[0].trim() + ss[1].replace(ss[1][0], ss[1][0].toUpperCase()).trim()
        ).padEnd(50, '.')} ${'👌'.repeat(i + 1)} `
      );
    }
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const routes = flights.split('+');
console.log(routes);
for (const n of routes) {
  const [dep, from, to, a] = n.split(';');
  const reason = dep.replaceAll('_', ' ').trim();
  const f = `from ${from.slice(0, 3).toUpperCase()}`;
  const t = `to ${to.slice(0, 3).toUpperCase()}`;
  const c = `(${a.replace(':', 'h')})`;

  console.log(
    `${
      reason.startsWith('Delayed') ? '🛑' : ''
    } ${reason} ${f} ${t} ${c}`.padStart(60, '-')
  );
  // for (const [i, c] of further.entries()) {
  //   const reason = c.replace('_', ' ').trim();
  // }
}

