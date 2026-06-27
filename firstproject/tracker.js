/* GET THE DATE */
var date = new Date();
console.log(date);

/* EXTRACT THE CURRENT DATE */
var currentDate = date.getDate();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var currentDay = date.getDay();

console.log(currentDate);
console.log(currentMonth);
console.log(currentYear);
console.log(currentDay);

/* DATE INFO */
var months = [
  "January", "February", "March", "April", 
  "May", "June", "July", "August", 
  "September", "October", "November", "December"
];
 /* MONTH */
var title = document.getElementById("title");
title.innerHTML = months[currentMonth];

var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function () {
  let habits = prompt("What is your habit", habitTitle.innerHTML)
}
