//Closures

const name = function () {
  let age = 31; //Environment variable

  return function () {
    age += 1;
    console.log(`Jagadeesh is ${age} years old adult`);
  };
};
const hisAge = name();
hisAge();
hisAge();
hisAge();
console.dir(hisAge); //
//Closure examples

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const a = 10;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
h();
f();
//Example 2 timer function

const boarding = function (n, wait) {
  let passengers = n / 3;

  setTimeout(function () {
    console.log(`${passengers} in 3 groups each are boarded`);
  }, wait * 1000);
  console.log(`All passengers will board in ${wait} seconds`);
};
boarding(60, 3);

//Code Challenge
(function () {
  const header = document.querySelector('h1');

  document.querySelector('body').addEventListener('click', function () {
    console.log(`body element is clicked`);
    header.style.color = 'red';
  });
})();
