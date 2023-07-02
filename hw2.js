/***** 1 ****/
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }
// let message = checkAge();
// message = checkAge(20);
// console.log(message);
// message = checkAge(8);
// console.log(message);
// message = checkAge(14);
// console.log(message);
// message = checkAge(38);
// console.log(message);

/***** 2 ****/
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//  if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// let message = checkPassword()
// message = checkPassword("mangohackzor");
// console.log(message);
// message = checkPassword("polyhax");
// console.log(message);
// message = checkPassword("jqueryismyjam");
// console.log(message);

/***** 3 ****/
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 250))
// console.log(checkStorage(150, 0));

/***** 4 ****/
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits);

/***** 5 ****/
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

/***** 6 ****/
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana"
// console.log(fruits);

/***** 7 ****/
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line
// console.log(fruitsArrayLength);

/***** 8 ****/
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line
// console.log(lastElementIndex);
// console.log(lastElement);

/***** 9 ****/
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

/***** 10 ****/
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter)
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

/***** 11 ****/
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  let countWords
//    let totalPrice
//    countWords = message.split(" ");
//    totalPrice = countWords.length * pricePerWord;
//    return totalPrice
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
//  console.log(calculateEngravingPrice("Web-development is creative work", 20));

/***** 12 ****/
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

/***** 13 ****/
// function slugify(title) {
//   // Change code below this line
//   let slugTitle;
//   let titleLow;
//   titleLow = title.toLowerCase().split(' ');
//   slugTitle = titleLow.join('-');
//   return slugTitle;
//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

/***** 14 ****/
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length -1) ;
// const lastThreeEls = fruits.slice(-3) ;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/***** 15 ****/
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);

/***** 16 ****/
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// let splitArray
// splitArray = firstArray.concat(secondArray);
// if (maxLength < splitArray.length) {
//   return splitArray.slice(0, maxLength)
// }
// return splitArray
//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

/***** 17 ****/
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }

/***** 18 ****/
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

/***** 19 ****/
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i+= 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

/***** 20 ****/
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (i=0; i < order.length; i += 1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

/***** 21 ****/
// function findLongestWord(string) {
//   // Change code below this line
//   let arrString = string.split(' ');
//   let longestWord = '';
//   for (const word of arrString){
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

/***** 22 ****/
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//     // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

/***** 23 ****/
// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArrNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArrNumbers.push(numbers[i]);
//     }
//   }
//   return newArrNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/***** 24 ****/
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// /***** 25 ****/ (спробувати цикл for)
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newElements = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newElements.push(number);
//     }
//   }
// return newElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/***** 26 ****/
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

/***** 27 ****/
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     const filteredNumber = number;

//     if (filteredNumber > value) {
//       filteredNumbers.push(filteredNumber);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/***** 28 ****/
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

/***** 29 ****/
// 1st Method

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     numbers.push(i);
//      }
//   for (number of numbers) {
//     if (number % 2 === 0) {
//         evenNumbers.push(number)
//     }
//   }
//   return evenNumbers;
//   // Change code above this line
// }

// 2nd Method
// function getEvenNumbers(start, end) {
//   //   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

/***** 30 ****/
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

/***** 31 ****/
// function findNumber(start, end, divisor) {
//   // Change code below this line
//     for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

/***** 32 ****/
// function includes(array, value) {
//   // Change code below this line
//   for (const include of array) {
//     if (include === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// );
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
// );
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
