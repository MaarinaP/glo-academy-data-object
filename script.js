'use strict';

//lesson 9
console.log("\n lesson 9 ------------\n");







// console.log(today);

// console.log(new Date().toLocaleString('ru', {  weekday: 'long' }));


// let dayOfTheWeek = (day, month, year) => {
//     return new Date(year, month - 1, day).toLocaleString("ru", {
//       weekday: "long",
//     });
//   };
  
//   console.log(dayOfTheWeek(3, 11, 2020));

//   new Intl.DateTimeFormat(["ru"[, options]])
// const date = today.getDate();
// const day = today.toLocaleString("ru", {weekday: "long"});

//   console.log("Сегодня " + day + ", " + date);

let today = new Date();

let place1 = document.getElementById("item1");
let place2 = document.getElementById("item2");

let options1 = {
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric'
};

let options2 = {
  year: 'numeric', 
  month: '2-digit', 
  day: 'numeric',
  hour: '2-digit', 
  minute: '2-digit', 
  second: 'numeric'
};

let date = new Intl.DateTimeFormat("ru-ru", options1).format(today);
let date2 = new Intl.DateTimeFormat("ru-ru", options2).format(today);

place1.textContent = date;
place2.textContent = date2;


