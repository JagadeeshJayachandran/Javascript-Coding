
const placeSet = new Set([
  'London',
  'HongKong',
  'singapore',
  'India',
  'London',
]);

console.log(placeSet);
//functions in set
// .size
console.log(placeSet.size);
//.has
console.log(placeSet.has('London'));
//.add
placeSet.add('Japan');
console.log(placeSet);
//.delete
placeSet.delete('Japan');
console.log(placeSet);
//looping
for (const n of placeSet) console.log(n);
//usecase for sets
//1) Remove duplicates of array
const greatPeople = [
  'Gandhi',
  'Jesus',
  'bhudha',
  'vivekananda',
  'Ramanujam',
  'bhudha',
  'Jesus',
];
const gp = [...new Set(greatPeople)];
console.log(gp);

//How many unique letters are in the string
console.log(new Set('jagadeesh').size);
