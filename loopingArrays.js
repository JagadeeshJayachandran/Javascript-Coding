//looping Arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let [i, n] of movements.entries()) {
  if (n < 0) {
    console.log(`${i + 1}: withdrawn ${n}`);
  } else {
    console.log(`${i + 1}: deposited ${n}`);
  }
}

movements.forEach(function (n, i) {
  if (n < 0) {
    console.log(`${i + 1}: withdrawn ${n}`);
  } else {
    console.log(`${i + 1}: deposited ${n}`);
  }
});

const currency = new Map([
  ['INR', 'India'],
  ['USD', 'America'],
  ['GBP', 'UK'],
]);

currency.forEach(function (v, i, a) {
  console.log(`${v} = ${i}`);
});

//console.log(currency);

const capitals = new Set(['India', 'China', 'America', 'India']);

capitals.forEach(function (n, i) {
  console.log(`${i} : ${n} `);
});
