'use strict';

//lesson 9
console.log("\n lesson 9 ------------\n");

let today = new Date();

let place1 = document.getElementById("item1");
let place2 = document.getElementById("item2");

let options1 = {
  weekday: 'long',  
  month: 'long', 
  day: 'numeric'
};

let options2Date = {
  year: 'numeric', 
  month: '2-digit', 
  day: 'numeric'
};

let options2Time = {
  hour: '2-digit', 
  minute: '2-digit', 
  second: 'numeric'
};

let date = new Intl.DateTimeFormat("ru-ru", options1).format(today);
let date2Date = new Intl.DateTimeFormat("ru-ru", options2Date).format(today);
let date2Time = new Intl.DateTimeFormat("ru-ru", options2Time).format(today);

// let dateText = `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часа ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
let dateText = () => {
  if (today.getHours() == 1 || today.getHours() == 21) {
    return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} час ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
  } else if (today.getHours() == 2 || today.getHours() == 3 || today.getHours() == 4 || today.getHours() == 22 || today.getHours() == 23 || today.getHours() == 24){
    return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часа ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
  } else {
    return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часов ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
  }
};
let date2Text = `${date2Date} - ${date2Time}`;

place1.textContent = dateText();
place2.textContent = date2Text;

let textChange = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    for (let number of arr){
      if (number == 1 || number == 21) {
        console.log(`${number} час`);
      } else if (number == 2 || number == 3 || number == 4 || number == 22 || number == 23 || number == 24){
        console.log(`${number} часа`);
      } else {
        console.log(`${number} часов`);
      }
    }
  console.log(arr);
};

textChange();

let dateTextTest = () => {
  
    if (today.getHours() == 1 || today.getHours() == 21) {
      console.log(`Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} час ${today.getMinutes()} минут ${today.getSeconds()} секунд`);
    } else if (today.getHours() == 2 || today.getHours() == 3 || today.getHours() == 4 || today.getHours() == 22 || today.getHours() == 23 || today.getHours() == 24){
      console.log(`Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часа ${today.getMinutes()} минут ${today.getSeconds()} секунд`);
    } else {
      console.log(`Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часов ${today.getMinutes()} минут ${today.getSeconds()} секунд`);
    }
};


