'use strict';

//lesson 7
console.log("\n lesson 7 ------------\n");

const week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

//на страницу
const today = new Date();

const div = document.createElement("div");
document.body.append(div);

let p = document.createElement("p");

for (let day in week) {
    
    p = document.createElement("p");
    div.append(p);
    p.style.fontSize = "18px";

    if (today.getDay()-1 == day) {
        p.style.fontWeight = "bold";
    } else if (day == 6 || day == 5){
        p.style.fontStyle = "italic";
    } p.append(week[day]);

}

//lesson 9
console.log("\n lesson 9 ------------\n");

let today = new Date();
let today2 = new Date();

let place1 = document.getElementById("item1");
let place2 = document.getElementById("item2");

today.toLocaleDateString('ru-RU');
today2.toLocaleDateString('ru-RU', {year: 'numeric', month: '2-digit', day:'2-digit'});

place1.textContent = today;
place2.textContent = today2;

console.log(today);