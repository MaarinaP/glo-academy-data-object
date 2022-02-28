'use strict';

//display today's day as timer
let place1 = document.getElementById("item1");
let place2 = document.getElementById("item2");

//Wording format
setInterval(function() {
  let today = new Date();
  let options1 = {
    weekday: 'long',  
    month: 'long', 
    day: 'numeric'
  };

  let date = new Intl.DateTimeFormat("ru-ru", options1).format(today);

  let dateText = () => {
    if (today.getHours() == 1 || today.getHours() == 21) {
      return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} час ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
    } else if (today.getHours() == 2 || today.getHours() == 3 || today.getHours() == 4 || today.getHours() == 22 || today.getHours() == 23 || today.getHours() == 24){
      return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часа ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
    } else {
      return `Сегодня ${date} ${today.getFullYear()} года, ${today.getHours()} часов ${today.getMinutes()} минут ${today.getSeconds()} секунд`;
    }
  };

  place1.textContent = dateText();
}, 1000);

//Number format
setInterval(function() {
  const today = new Date();

  const options2Date = {
    year: 'numeric', 
    month: '2-digit', 
    day: 'numeric'
  };
  
  const options2Time = {
    hour: '2-digit', 
    minute: '2-digit', 
    second: 'numeric'
  };

  const date2Date = new Intl.DateTimeFormat("ru-ru", options2Date).format(today);
  const date2Time = new Intl.DateTimeFormat("ru-ru", options2Time).format(today);
  const date2Text = `${date2Date} - ${date2Time}`;

  place2.innerHTML = date2Text;
}, 1000);











