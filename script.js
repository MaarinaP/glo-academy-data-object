'use strict';

const div = document.querySelector("div");
const greeting = document.createElement("p");
const week = document.createElement("p");
const time = document.createElement("p");
const newYear = document.createElement("p");

let today = new Date();
let optionWeek = {
  weekday: 'long'
};
let todayWeek = new Intl.DateTimeFormat("ru-ru", optionWeek).format(today);
let optionTime = {
  hour: '2-digit', 
  minute: '2-digit', 
  second: 'numeric'
};
let todayTime = new Intl.DateTimeFormat("en-en", optionTime).format(today);

const greetingText = () => {
  if(today.getHours() >= 6 || today.getHours() < 12) {
    greeting.textContent = `Доброе утро,`;
  } else if (today.getHours() >= 12 || today.getHours() < 18) {
    greeting.textContent = `Добрый день,`;
  } else if (today.getHours() >= 18 || today.getHours() < 0) {
    greeting.textContent = `Добрый вечер,`;
  }  else if (today.getHours() >= 0 || today.getHours() < 6) {
    greeting.textContent = `Доброй ночи,`;
  }   
};

const newYearDate = new Date(2023, 0, 1, 0, 0, 0, 0);
let diff = newYearDate.getTime() - today.getTime();
let newYearText = Math.round(diff/(1000*60*60*24));

div.style.fontSize = "40px";

div.append(greeting);
div.append(week);
div.append(time);
div.append(newYear);

greetingText();
week.textContent = `Сегодня: ${todayWeek.charAt(0).toUpperCase()}${todayWeek.substring(1)}`;
time.textContent = `Текущее время: ${todayTime}`;
newYear.textContent = `До нового года осталось ${newYearText} дней`;












