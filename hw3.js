/***** 1 ****/
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
//   console.log(apartment);

/***** 2 ****/
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com"
//     }
//   };
//   console.log(apartment.descr);
//   console.log(apartment.owner);
//   console.log(apartment.owner.name);

/***** 3 ****/
//  const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
//   console.log(aptRating);
//   console.log(aptDescr);
//   console.log(aptPrice);
//   console.log(aptTags);

/***** 4 ****/
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[numberOfTags -1];
//   // Change code above this line
//   console.log(ownerName);
//   console.log(ownerPhone);
//   console.log(ownerEmail);
//   console.log(numberOfTags);
//   console.log(firstTag);
//   console.log(lastTag);

/***** 5 ****/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

/***** 6 ****/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// // Change code below this line
// console.log(apartment);
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

/***** 7 ****/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';
// // Change code below this line
// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);
// console.log(apartment);

/***** 8 ****/
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product);

/***** 9 ****/
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };
// console.log(credentials);

/***** 10 ****/
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// // Change code below this line
// console.log(keys);
// console.log(values);

/***** 11 ****/
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//     values.push(apartment[key]);
// }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);

/***** 12 ****/
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const props in object) {
//     if (object.hasOwnProperty(props)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

/***** 13 ****/
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key])
//   }
//   console.log(keys);
//   console.log(values);

/***** 14 ****/
// 1й варіант
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);
//   propCount = keys.length;
//   return propCount;
//   // Change code above this line
// }

//2й варіант спробувати через цикл
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);
//   for (let i = 0; i < keys.length; i += 1) {
//     console.log(i);
//     propCount = i + 1;
//   }
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

/***** 15 ****/
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);

/***** 16 ****/
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//   const salariesArr = Object.values(salaries);
//     for (const salary of salariesArr) {
//       totalSalary += salary;
//     }
//     // Change code above this line
//     return totalSalary;
//   }
//   console.log(countTotalSalary({}));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/***** 17 ****/
//   const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
//   }
// console.log(hexColors);
// console.log(rgbColors);

/***** 18 ****/
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price
//     }
//   }
//   return null;

//     // Change code above this line
//   }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

/***** 19 ****/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const allPropValues = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       allPropValues.push(product[propName]);
//     }
//   }
//   return allPropValues;
// }
// // Change code above this line

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

/***** 20 ****/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

/***** 21 ****/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);

/***** 22 ****/
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
// //   const icon = highTemperatures.icon;

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(yesterday);
//   console.log(today);
//   console.log(tomorrow);
//   console.log(meanTemperature);
//   console.log(icon);
//   console.log(highTemperatures);

/***** 23 ****/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(meanTemperature);
// console.log(highIcon);

/***** 24 ****/
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
// console.log(hexColors);
// console.log(rgbColors);

/***** 25 ****/
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

/***** 26 ****/
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

/***** 27 ****/
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

/***** 28 ****/
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

/***** 29 ****/
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings.theme);
// console.log(finalSettings.public);
// console.log(finalSettings.withPassword);
// console.log(finalSettings.minNumberOfQuestions);
// console.log(finalSettings.timePerQuestion);

// console.log(defaultSettings);
// console.log(overrideSettings);
// console.log(finalSettings);

/***** 30 ****/
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//        // Change code below this line
//     const {categoryIn, priorityIn, text} = data;
//     const outTask = {category: category, priority: priority, ...data, completed: completed}
//     return outTask;
//     // Change code above this line
//   }
//   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

/***** 31 ****/
// // Change code below this line
// function add(...args) {
//   let totalArgs = 0;
//   for (const arg of args) {
//     totalArgs += arg;
//   }
//   return totalArgs;

//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

/***** 32 ****/
// // Change code below this line
// function addOverNum(trethshold, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > trethshold) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

/***** 33 ****/
// // Change code below this line
// function findMatches(arrNumbers, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (arrNumbers.includes(arg)) {
//         matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

/***** 34 ****/
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Haze'));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

/***** 35 ****/
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//    const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
//       // Change code above this line
//        },
//   };
// // bookShelf.updateBook("Haze", "Dungeon chronicles");
// // console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);

/***** 36 ****/
// const atTheOldToad = {
//     // Change code below this line
//   potions: [],

//     // Change code above this line
//   };
// console.log(atTheOldToad.potions);

/***** 37 ****/
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//   getPotions() {
//     return this.potions;
//   }
//     // Change code above this line
//   };
//   console.log(atTheOldToad.getPotions());

/***** 38 ****/
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

/***** 39 ****/
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     console.log(potionIndex);
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion('Speed potion');
// console.log(atTheOldToad.potions);

/***** 40 ****/
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// console.log(atTheOldToad.potions);

/***** 41 ****/
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         return (this.potions[i].name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// //Check add
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// //Check remove
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// console.log(atTheOldToad.getPotions());

// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );


