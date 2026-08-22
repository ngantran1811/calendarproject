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

/* UPDATE THE CALENDAR INFO */
var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function () {

  let habits = prompt("What is your habit", habitTitle.innerHTML);
  if(habits.length == 0){
    habitTitle.innerHTML = "Click to set your habit";
  }else{
    habitTitle.innerHTML = habits;
  }
}

/* SET THE TOTAL DAYS */
var daysInTheMonthList = [31, 28, 31, 30, 31, 30 , 31, 31, 30, 31, 30 ,31 ,30 ,31];
var daysInThisMonth = daysInTheMonthList[currentMonth];
var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");