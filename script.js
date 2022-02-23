'use strict';

//lesson 7
console.log("\n lesson 7 ------------\n");

const week = [
    {id: 7, day: "воскресенье", isWeekend: true},
    {id: 1, day: "понедельник", isWeekend: false},
    {id: 2, day: "вторник", isWeekend: false},
    {id: 3, day: "среда", isWeekend: false},
    {id: 4, day: "четверг", isWeekend: false},
    {id: 5, day: "пятница", isWeekend: false},
    {id: 6, day: "суббота", isWeekend: true}
];

const today = new Date();
const div = document.createElement("div");
document.body.append(div);

for (let day in week) {
    
    const p = document.createElement("p");
    div.append(p);
    p.style.fontSize = "18px";

    if (today.getDay() == week[day].id) {
        p.style.fontWeight = "bold";
    } else if (week[day].isWeekend){
        p.style.fontStyle = "italic";
    } p.append(week[day].day);

}

