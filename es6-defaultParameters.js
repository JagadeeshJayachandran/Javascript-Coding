'use strict';

//Default parameters, both ES5 and ES6 way

const createBooking = function (flightName = 'H333', numPassengers = 60, price = 500) {
  // Assign Default parameters in ES5 WAY
//   flightName = flightName || 'H333';
//   numPassengers = numPassengers || 60;
//   price = price || 70;

  const booking = { flightName, numPassengers, price };
  console.log(booking);
};

createBooking('H244'); //{flightName": "H244","numPassengers": "60", "price": "70"}
