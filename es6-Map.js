//MAP:
const rest = new Map();

rest.set('name', 'Jagadeesh');
rest.set(1, 'Expertise in Automation');
rest.set(2, 'Expertise in web automation');

//You can continue set in a chain form rather than calling individually as in the above line
rest
  .set('country', 'India')
  .set('Settled country', 'London')
  .set('Side job', 'You tube');

console.log(rest);
//You can get the value by using get method
console.log(rest.get('Settled country'));
//You can use array as map keys
const arr = [1, 2];
rest.set(arr, 'array');
console.log(rest.get(arr));
//you can use objects as map keys
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const openingHoursmapconvertion = new Map(Object.entries(openingHours));
console.log(openingHoursmapconvertion);

//Iterate through map
//Quiz app
const question = new Map([
  ['question', 'How to stay positive?'],
  [1, 'Do yoga'],
  [2, 'Do Meditation'],
  [3, 'Do read good books'],
  [4, 'All'],
  ['correct', 4],
  [true, 'This message is correct 😍'],
  [false, 'This is not a correct answer 🤢'],
]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Please enter the right answer'));

// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

//Convert Map to array
console.log('------------');
console.log([...question]);
//you can store the Map's keys and values separately in the array

console.log([...question.keys()]);
console.log([...question.values()]);
