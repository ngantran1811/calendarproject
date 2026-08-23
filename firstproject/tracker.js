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

/* INITIALIZE COMPLETED ARRAY */
var completed = new Array(31);
for (var i = 0; i < dayCount; i ++) {
  var tempString =
    "" + (currentMonth + 1) + "-" + (i +1) + "-" + currentYear;
  console.log("Storing data: " + tempString);
  var tempDay = localStorage.getItem(tempString);
  console.log(tempDay);

  if(tempDay == null || tempDay == "false") {
    localStorage.setItem(tempString, "false");
  } else if (tempDay == "true") {
    daysCompleted++;
  }
  totalDays.innerHTML  = daysCompleted + "/" + daysInThisMonth; 
}

console.log("Completed array: " + completed);
console.log("Total days completed: " + daysCompleted);

/** CHECK STORAGE & UPDATE COMPLETED ARRAY  */

for (var i = 0; i <currentDate; i++) {
  var tempString = 
    "" + (currentMonth + 1) + "-" + (i +1) + "-" + currentYear;
  console.log(tempString);
  var chosenDay = localStorage.getItem(tempString);
  console.log(i + 1 + ": " + chosenDay);
  var chosenDayDiv = document.getElementById("day" + (i +1));
  if (chosenDay === "true") {
    chosenDayDiv.style.backgroundColor = "pink";
  } else if (chosenDay === "false") {
    chosenDayDiv.style.backgroundColor = "white";
  }
}

/**UPDATE COMPLETED ON CALENDAR */
var dayDivs = document.querySelectorAll(".day");
for (var i = 0; i < currentDate; i ++) {
  dayDivs[i].onclick = function (e) {
    var num = e.target.innerText;
    var selectedDate = document.getElementById(e.target.id);
    var storageString = "" + (currentMonth + 1) + "-" + num + "-" + currentYear;
    if (localStorage.getItem(storageString) == "false") {
      selectedDate.style.backgroundColor = "pink";
      localStorage.setItem(storageString, true);
      daysCompleted++;
    } else if (localStorage.getItem(storageString) == "true"){
      selectedDate.style.backgroundColor = "white";
      localStorage.setItem(storageString, false);
      daysCompleted--;
    }
    
    totalDays.innerHTML = daysCompleted +"/" + dayCount;
    console.log(daysCompleted, currentDate);
    if(daysCompleted === currentDate) {
      alert("Great Progress");
    }
  }
}

/** RESET BUTTON */
var resetButton = document.getElementById("resetButton");
resetButton.onclick = function () {
  for(var i = 0; i < dayCount; i++) {
    var tempString = 
    "" + (currentMonth + 1) + "-" + (i+1) + "-" + currentDay;
    localStorage.setItem(tempString, "false");
    var curDay = document.getElementById("day" + (i+1));
    curDay.style.backgroundColor = "white" ;
  }

  daysCompleted = 0;
  totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}