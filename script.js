'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements - query selectors for the elements in the HTML file - DOM elements - elements in the HTML file that we want to interact with
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // Ensure the container is cleared before adding new movements
  containerMovements.innerHTML = ''; // Clear the container before adding new movements

  // Function to display the movements in the account
  movements.forEach(function (mov, i) {
    // forEach method - for arrays - does not work with objects - does not have access to the index - does not return a new array
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`; // HTML template literal

    containerMovements.insertAdjacentHTML('afterbegin', html); // Insert the HTML into the container
  });
};
displayMovements(account1.movements); // Display the movements for account1 in the container

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd'] - 4 is not included in the result array - postion 2 to position 4
// console.log(arr.slice(-2)); // ['d', 'e'] - last two elements
// console.log(arr.slice(-1)); // ['e'] - last element
// console.log(arr.slice(1, -2)); // ['b', 'c'] - position 1 to second last element
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] - shallow copy of the array - slice without any arguments does the same thing
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e'] - shallow copy of the array - spread operator does the same thing

// // SPLICE - mutates the original array - removes elements from the array - returns the removed elements
// console.log(arr.splice(2)); // ['c', 'd', 'e'] - mutates the original array - removes elements from the array
// arr.splice(-1); // ['a', 'b', 'c', 'd'] - mutates the original array - removes elements from the array
// console.log(arr); // ['a', 'b'] - original array after splice

// // REVERSE - mutates the original array - reverse the array elements in place - returns the reversed array
// arr = ['a', 'b', 'c', 'd', 'e']; // reset the array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j'] - mutates the original array - reverse the array elements in place

// // CONCAT - does not mutate the original array - concatenates two arrays - returns a new array with the concatenated elements
// const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] - does not mutate the original array - concatenates two arrays
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] - new array with the concatenated elements
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] - does the same thing as concat

// // JOIN - does not mutate the original array - joins the elements of the array into a string - returns a string with the joined elements
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j - does not mutate the original array - joins the elements of the array into a string
// console.log(letters.join('')); // abcdefghij - does not mutate the original array - joins the elements of the array into a string

// // 143. The new at Method
// const arr1 = [23, 11, 64];
// console.log(arr1[0]); // [23, 11, 64]
// console.log(arr1.at[0]); // 23 - at method is not available in the browser

// console.log(arr1[arr1.length - 1]); // 64 - last element of the array
// console.log(arr1.slice(-1)[0]); // 64 - last element of the array
// console.log(arr1.slice(-1)); // [64] - last element of the array

// // 144. Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('---- FOR OF ----');

// for (const movement of movements) {
//   // for of loop - for arrays and strings - does not work with objects - does not have access to the index
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// } // You deposited 200, You deposited 450, You withdrew 400, You deposited 3000, You withdrew 650, You withdrew 130, You deposited 70, You deposited 1300

// console.log('---- FOREACH ----');

// movements.forEach(function (mov, i, r) {
//   // forEach method - for arrays - does not work with objects - does not have access to the index - does not return a new array
//   if (mov > 0) {
//     console.log(`Movemnt ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movemnt ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// }); // You deposited 200, You deposited 450, You withdrew 400, You deposited 3000, You withdrew 650, You withdrew 130, You deposited 70, You deposited 1300

// // 145. forEach With Maps and Sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   // forEach method - for maps - does not work with arrays - does not have access to the index - does not return a new map
//   console.log(`${key}: ${value}`);
// }); // USD: United States dollar, EUR: Euro, GBP: Pound sterling

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique); // Set(3) {"USD", "GBP", "EUR"}
// currenciesUnique.forEach(function (value, _, set) {
//   // forEach method - for sets - does not work with arrays - does not have access to the index - does not return a new set
//   console.log(`${value}: ${value}`);
// }); // USD: USD, GBP: GBP, EUR: EUR
