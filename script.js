'use strict';

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