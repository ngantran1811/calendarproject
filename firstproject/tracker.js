/* GET THE DATE */
var date = new Date();
console.log(date);

/* EXTRACT THE CURRENT DATE */
var currentDate = date.getDate();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var currentDay = date.getDay();

console.log("The current day date is " + currentDate);
console.log("The current month is " + currentMonth);
console.log("The current year is " + currentYear);
console.log("The current day is " + currentDay);

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
  // ask a question & save the answer to "habits"
  let habits = prompt("What is your habit", habitTitle.innerHTML);
  if (habits == null) return;

  if(habits.trim().length == 0){ //if they did not type anything
    habitTitle.innerHTML = "Click to set your habit";
  }else{  // update the habit to show what they typed
    habitTitle.innerHTML = habits;
  }
}

/* SET THE TOTAL DAYS */
var daysInTheMonthList = [31, 28, 31, 30, 31, 30 , 31, 31, 30, 31, 30 ,31];
var daysInThisMonth = daysInTheMonthList[currentMonth];
var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth; 

/* SET THE CALENDAR DAYS */
var dayCount = 0;
var rowCount = 0;
var days = document.getElementsByClassName("days");
for(var i=0; i <days.length; i++){
  var day = days[rowCount].getElementsByClassName("day");
  for (var j =0; j < day.length; j++){

    if(dayCount == currentDate - 1){
      // day[j].setAttribute("style", "border:2px solid black");
    // }else if (dayCount < daysInThisMonth) {
    //   day[j].setAttribute("style", "border:2px solid black; color: black;");
    }

    if (dayCount < daysInThisMonth) {
      day[j].innerHTML = dayCount + 1;
      day[j].setAttribute("id", "day" + (dayCount + 1));
      dayCount++;
    }else {
      day[j].innerHTML = "";
      day[j].setAttribute("style", "background-color: pink");
    }
  }
  rowCount++
}