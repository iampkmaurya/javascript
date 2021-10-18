'use strict';

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


const restaurant = {
  name: 'Eatance Restaurant',
  location: 'D-402, Ganesh Meridian, Ahemdabad',
  categories: ['veg', 'non-veg', 'italian', 'organic'],
  starterMenu: ['Soup', 'Punner chilli', 'Roll'],
  mainCourse: ['Dal', 'Rice', 'Roti'],
  openingHours: {
    thur: {
      open: 12,
      close: 12
    },
    frid: {
      open: 12,
      close: 12
    },
    sat: {
      open: 0,
      close: 24
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainCourse[mainIndex]]
  }


};


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
const menu = [...restaurant.starterMenu, ...restaurant.mainCourse];
console.log(menu);



//REST Patterns   
const add = function (...y) {
  let sum = 0;
  for (let i = 0; i < y.length; i++) sum += y[i]
  console.log(sum);

}

// const x = [12, 12, 12];
add(12, 13, 14)







