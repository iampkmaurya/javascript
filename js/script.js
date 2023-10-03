// const firstName = "Prahant";
// const age = "26";
// const year = "1994";
// console.log(`i am ${firstName} born in ${year}`);

// const private = "Name";
// Funtion
// function printName(){
//     console.log('HI my name is Prashant');
// }
// printName();

// Arrow Functions
// const ageCalculator = birthYear => 2021 - birthYear;
// console.log(ageCalculator(1994));

// Traditional Function
// function ageCalculator(birthYear) {
//     const age = 2021 - birthYear;
//     return age;
// }
// console.log(ageCalculator(1994));

// Objects

// const prashant = {
//     firstName : 'Prashant',
//     lastName : 'Maurya',
//     age : 2021 - 1994,
//     job : 'Developer',
//     friends : ['Aman', 'Rohan','Naman']
// }
// // console.log(prashant['firstName']);

// const nameKey = 'Name';
// console.log(prashant['first' + nameKey]);
// console.log(prashant['last' + nameKey]);

// const intrestedIn = prompt('What do you want to know ? Enter firstname, lastname, age, job, friends');
// // console.log(prashant[intrestedIn]);

// if(prashant[intrestedIn]) {
//     console.log(prashant[intrestedIn])
// } else{
//     console.log("Oops! Wrong entry 😐");
// }

// console.log(`${prashant.firstName} has ${prashant.friends.length} is first friend called ${prashant.friends[0]}`)

// const prashant = {
//         firstName : 'Prashant',
//         lastName : 'Maurya',
//         job : 'Developer',
//         birthYear : 1994,
//         friends : ['Aman', 'Rohan','Naman'],
//         ageCalc : function(){
//             this.age = 2021 - this.birthYear;
//               return this.age;
//         },
//         driversLicense : true,
//         getSummary : function (){
//             this.getSummary = (`${this.firstName} is a ${this.ageCalc()} year old ${this.job}, and he has ${this.driversLicense ? 'a' : 'no'} driving license`);
//             return this.getSummary;

//         }
// }

// console.log(prashant.getSummary());

// for(let num=1; num <= 10;  num++){
//     console.log(`Lifting weight repetitation ${num} 🏋🏻‍♂️`)
// }

// const employeeName = ['Prashant', 'Maurya', 27, 'Developer']

// for(let i=0; i<=employeeName.length; i++)
// {
//     console.log(employeeName[i]);
// }

//while Loop

// let dice = Math.trunc(Math.random() * 5 + 1);
// // // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
// }


//SCOPE IN ACTION
// const currentYear = new Date().getFullYear();
// console.log(currentYear);
// const prashant = {
//   birthYear: 1994,
//   calcAge: function(){
//     return currentYear - this.birthYear;
//   }

// }

// console.log(prashant.calcAge())


// const currentYear = new Date().getFullYear();
// console.log(currentYear);
// const calcAge = birthyear => {
//   return currentYear - birthyear;
// }
// console.log(calcAge(1994))


//Destructure Arrys and Desture Objes
//====================================


// const restaurant = {
//   name: 'Eatance Restaurant',
//   location: 'D-402, Ganesh Meridian, Ahemdabad',
//   categories: ['veg', 'non-veg', 'italian', 'organic'],
//   starterMenu: ['Soup', 'Punner chilli', 'Roll'],
//   mainCourse: ['Dal', 'Rice', 'Roti'],
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 12
//     },
//     frid: {
//       open: 12,
//       close: 12
//     },
//     sat: {
//       open: 0,
//       close: 24
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainCourse[mainIndex]]
//   }


// };


// const [a, b] = restaurant.starterMenu;
// console.log([a], [b]);


// let [a, b] = restaurant.categories;
// console.log([a, b]);

// const temp = a;
// a = b;
// b = temp;
// console.log([a, b]);


// [a, b] = [b, a];
// console.log([a, b]);

// console.log(restaurant.order(2, 1));

// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log([starter, mainCourse])

//Destrcture Object

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags

// } = restaurant;

// console.log(restaurantName);


// THE SPREAD OPERATOR .........
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr]
// console.log(newArr);

// const newMenu = [...restaurant.starterMenu, 'TomatoSoup'];
// console.log(newMenu);


// //Joint 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainCourse];
// console.log(menu);



// //REST Patterns
// const add = function (...y) {
//   let sum = 0;
//   for (let i = 0; i < y.length; i++) sum += y[i]
//   console.log(sum);

// }

// const x = [12, 12, 12];
// add(12, 13, 14)



// var a;
// a = 6;

// console.log(a);


// let a = 0;

// if (0 === 1) {
//   console.log("True --> this is same values");
// } else {
//   console.log("False");
// }


// In R.H.S. string "9" is converted into
// number 9, hence returns true.
// document.write(9 == "9");
// let a = "String";
// if (a === 9) {
//   alert(true)

// }

// let a = null;
// console.log(a);




// // used for next line
// document.write('<br>')

// // Here no type conversion takes place,
// // hence returns false
// document.write(9 === "9");

// function myFunction() {
//   document.getElementById("content").innerHTML = 'I am changed'
// }


//Program for making div random
// var rectangle = document.getElementsByClassName('rectangle');
// let boxWrapper = document.getElementById('box-wrapper');
// // let numberOfBox = parseInt(prompt("Please enter how many number of box you want to print"));
// // console.log(numberOfBox);
// //

// let str = '';
// let numberOfBox = 15;
// for (var i = 0; i < numberOfBox; i++) {
//   str = str + `<div class="random-box" style="background-color:rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)});" > ${i}</div>`;
// }
// boxWrapper.innerHTML = str;

// let str = '';
// // Reverse of an array
// let a = [12, 15, 13, 11, 10];
// str = `<div>${a.reverse()}</div>`;
// document.getElementById('data').innerHTML = str;


//Addition of two value;
// const a = parseInt(prompt('Enter the first number '));
// const b = parseInt(prompt('Enter the second number '));

// let str = '';
// function addition(a, b) {
//   return a + b;
// };

// let addition = (a, b) => a + b;



// str = `result will ${addition(a, b)}`
// document.getElementById('data').innerHTML = str;

// let a = 10
// function f() {
//   console.log(a)
// }
// f();
// console.log(a);

// const a = 6;
// console.log(a)

// const message = function () {
//   console.log("This message is shown after 3 seconds");
// }

// setTimeout(message, 3000);


// let a = 1250.9;

// Invoked Function
// let a = 5;
// let b = 6;
// (function () {

// })();



// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   }
// }

// obj.getName();

// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   }

// }

// var getName = obj.getName;

// var obj2 = { name: "akshay", getName };
// obj2.getName();

// var obj = {
//   name: 'prashant',
//   getName: function () {
//     document.getElementById('data').innerHTML = this.name;
//   }
// }

// obj.getName();

// function sayHello() {
//   return "Hello " + this.name;
// }

// var obj = { name: "Sandy" };

// sayHello.call(obj);


// let a = [2, 5, 12, 45];
// a.push(100);
// console.log(a);




// THE SPREAD OPERATOR .........
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr]
// console.log(newArr);


// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = []
//     if (skills.length > 0) {
//       resolve(skills)
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })

// doPromise
//   .then(a => console.log('Result'))
//   .catch()



// const square = async function (n) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n * n)
//     }, 4000)

//   }
//   )
// }
// const value = await square(2)
// console.log(value);
// console.log('first')
// console.log('first')
// console.log('first')
// console.log('first')


// //REST Patterns
// const add = function (...y) {
//   let sum = 0;
//   for (let i = 0; i < y.length; i++) sum += y[i]
//   console.log(sum);

// }
// add(2, 1, 5, 10)


//Classes IN Javascript

// class MathOperation {

//   a = 1;
//   b = 2;
//   c;
//   constructor() {
//     this.c = this.a + this.b;
//   }

//   add(a, b) {
//     return a + b;
//   }
//   sub(a, b) {
//     return a - b;
//   }

// }

// var a = new MathOperation();

// console.log(a.c)




// let nums = [1, 2, 3, 4, 5, 6];
// let evens = [];
// let odds = [];

// var evenNumbers = function (nums) {
//   for (var i = 0; i < nums.length; i++) {

//     if ((nums[i] % 2) != 1) {
//       evens.push(nums[i]);
//       console.log(evens);
//     }
//     else {
//       odds.push(nums[i]);
//       console.log(odds);
//     }
//   }

// };
// evenNumbers(nums);
// alert(evens);
// alert(odds);


// let x = 1;

// setTimeout(() => {
//     console.log("Hello")

// }, 5000)
// console.log(x)


// function clickFunction() {
//     console.log('Hello world')
// }

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },

//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
// ];



// const result = characters.filter((x) => {
//     return x.height < 200
// });

// let print = result.map((values) => {
//     return `${values.name} ${values.mass}`

// })

// document.getElementById('test').innerHTML = print.join('<br/>');
// console.log(result)


// Prmomiss
//============================================
// function checkValue(value) {
//     return new Promise((resolve, reject) => {
//         if (value <= 40) {
//             resolve("Value is less than or equal to 40: " + value);
//         } else {
//             reject("Value is greater than 40: " + value);
//         }
//     });
// }

// Example usage:
// const testValue = 50;

// checkValue(testValue)
//     .then((result) => {
//         console.log(result); // This will not be called for the given testValue.
//     })
//     .catch((error) => {
//         console.error(error); // This will be called since testValue is greater than 40.
//     });



// // Eg : String
// const text = 'Hello World';

// function capitalizeFirstLetter(inputString) {
//     // Make the first character uppercase and the rest lowercase
//     return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
// }

// const originalString = "hELlo WoRLd";
// const capitalizedString = capitalizeFirstLetter(originalString);
// // console.log(capitalizedString); // Output: "Hello world"

// Prototype Example
// ==================================================

// function EmployeeNames() {

// }

// EmployeeNames.prototype = {
//     name: [],
//     showName: function () {
//         return this.name;
//     }
// }


// var el = new EmployeeNames();
// el.name.push("Foo");
// console.log(el.showName());

// var e2 = new EmployeeNames();
// e2.name.push("Bar");
// console.log(e2.showName());


// const a = 7;
// function add() {
//     // let a = 6;
//     console.log(a)
//     let b = 5;
//     console.log(a + b)

// }
// console.log(a)



// add()



// const text = 'helloWorldWorld'

// function addDashBeforeCapital(text) {
//     return text.replace(/[A-Z]/g, (text) => '_' + text)
// }


// console.log(addDashBeforeCapital(text))'

// '


// const myJSON = [{ "name": "John", "age": 30, "car": null }];

// // Parse the JSON string into a JavaScript object
// // const myObject = JSON.parse(myJSON);
// // console.log(myObject)
// // Access values using dot notation
// // const name = myObject.name; // "John"
// // const age = myObject.age;   // 30
// // const car = myObject.car;   // null


// myJSON.map((item) => {
//     document.getElementById('test').innerHTML = item.name

// })


// async function display() {
//     return 56;
// }
// display().then(alert);


// function call() {
//     var obj = {
//         prop1: function () {
//             return this.prop2
//         },
//         prop2: "hello"

//     }
//     alert(typeof obj.prop1);
// }


// call()


// var a = 10;
// console.log((a++ + 10));


// function ele() {
//     let promise = promise.resolve(3);
//     let result = await promise;
// }




// for (var index; index <= 10; index++) {
//     if (index % 5 == 0) {
//         document.write('index is:' + index);
//     } else {
//         document.write("num" + index + 'is not multiply of')
//     }
// }


// console.log(Math.ceil(Math.random() * 10))


// varmyPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () { resolve("Success"); }, 2000)
// })

// myPromise.then(
//     function (error) { console.log(error + "2 sec") },

//     function (data) { console.log(data); }
// )

// export default function fn1(num1, num2) { return num1 + num2 }
// export function fn1(num1, num2) { return num1 - num2 }

// Math.floor(Math.random() * 100) + 1
// console.log(

//     Math.floor(Math.random() * 100) + 10

//     )


// var studentObj = {
//     score: 200,
//     myFn: function () {
//         setTimeout(function () { this.score += 20 }, 1000)
//         setTimeout(function () { console.log(this.score) }, 2000)
//     }
// }
// studentObj.myFn();


// var course = ["javaScript", "TypeScript", "Angular"];
// course.slice(2, 0, "AgularJS");
// console.log(course)


// var text = 'outside';
// function log() {
//     console.log(text);
//     var text = "inside";
// };
// log()


// function maxCompressionCount(str) {
//     let maxCount = 0; // Initialize the maximum count to 0
//     let currentCount = 0; // Initialize the current count to 0

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'P') {
//             // If the current character is 'P', increment the current count
//             currentCount++;
//             // Update the maximum count if the current count is greater
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             // If the current character is not 'P', reset the current count to 0
//             currentCount = 0;
//         }
//     }

//     return maxCount;
// }

// // Example usage:
// const inputString = "xyxale mnnm zpx"; // Replace with your input string
// const maxPCompression = maxCompressionCount(inputString);
// console.log(`Maximum compression achieved by slicing ${maxPCompression} 'P' characters.`);



// function compressPalindromicWords(text) {
//     // Split the text into words
//     const words = text.split(/\s+/);

//     // Function to check if a word is palindromic
//     function isPalindromic(word) {
//         return word === word.split('').reverse().join('');
//     }

//     // Function to perform P-slicing on a palindromic word
//     function pSliceWord(word) {
//         const wordLength = word.length;
//         const midpoint = Math.floor(wordLength / 2);
//         const mirrorImage = word.slice(0, midpoint);
//         return mirrorImage.length.toString();
//     }

//     // Process and compress palindromic words
//     const compressedWords = words.map((word) => {
//         if (isPalindromic(word)) {
//             return pSliceWord(word);
//         }
//         return word;
//     });

//     // Reconstruct the compressed text
//     const compressedText = compressedWords.join(' ');

//     return compressedText;
// }

// Example usage
// const inputText = "palindrom";
// const compressedText = compressPalindromicWords(inputText);
// console.log(compressedText); // Output: "2 3 civic"

// function wordCountWithAlphabet(inputString) {
//     // Convert the input string to uppercase
//     const upperCaseString = inputString.toUpperCase();

//     // Split the string into words based on spaces and newline characters
//     const words = upperCaseString.split(/\s+/);

//     // Filter out any empty strings resulting from consecutive spaces or newlines
//     const nonEmptyWords = words.filter((word) => word !== '');

//     // Count the number of words
//     const wordCount = nonEmptyWords.length;

//     // Calculate the English alphabet representation of the count
//     const alphabetCount = String.fromCharCode(65 + wordCount);

//     // Construct the result string
//     const result = `${wordCount}\n${alphabetCount}`;

//     return result;
// }

// // Example usage:
// const inputString = "Hello a very\ngood morning";
// const result = wordCountWithAlphabet(inputString);
// console.log(result);
// // Output:
// // 7
// // G



// function isPalindrome(word) {
//     return word === word.split('').reverse().join('');
// }

// function pSlice(word) {
//     if (!isPalindrome(word)) {
//         return word;
//     }

//     const length = word.length;
//     const middle = Math.floor(length / 2);
//     const left = word.slice(0, middle);
//     const right = word.slice(middle);

//     // Find the maximum compression length for the palindromic word
//     let maxCompression = 0;
//     for (let i = 0; i < middle; i++) {
//         if (left[i] === right[right.length - 1 - i]) {
//             maxCompression++;
//         } else {
//             break;
//         }
//     }

//     // Calculate the total characters p-sliced
//     const totalPSliced = length - maxCompression * 2;

//     return left.slice(0, maxCompression) + maxCompression + right.slice(maxCompression);
// }

// function countPSlicedCharacters(sentence) {
//     const words = sentence.split(' ');
//     let totalPSliced = 0;
//     const compressedWords = [];

//     for (const word of words) {
//         const [compressedWord, pSlicedChars] = pSlice(word);
//         totalPSliced += pSlicedChars;
//         compressedWords.push(compressedWord);
//     }

//     return [compressedWords.join(' '), totalPSliced];
// }

// const inputString = "xyxale mnnm zpx";
// const [compressedString, pSlicedCount] = countPSlicedCharacters(inputString);
// console.log("Compressed String:", compressedString);
// console.log("Total P-sliced Characters:", pSlicedCount);



// const obj = {
//     name: 'Prashant '
// }

// obj.name = 'Sheetal'

// console.log(obj.name)





// How to find vowel


//given string
// let s = 'this is an apple'

// function countVowel(string) {
//     console.log(string)
//     const result = string.match(/[aeiou]/gi);
//     console.log(result)


// }


// countVowel(s);


// let a = [1, 2, 2, 5, 5, 6, 6, 6, 24323452, 345, 6, 77]

// const result = a.sort();
// console.log(result)

// function prime(n) {

//     if (n > 1) {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return console.log(`${n}is not a prime number`);
//             } else {
//                 return console.log(`${n} is prime number`)
//             }

//         }
//     }
// }

// prime(89)






// let a = 5;
// let b = 6;

// let temp = null;
// temp = a;
// a = b
// b = temp;
// console.log(a, b)



// const text = 'hello world'
// const result = Array.from(text).reverse().join("");
// console.log(result)




// const a = [10, 2, 6, 7, 8]

// console.log(Math.min(...a))