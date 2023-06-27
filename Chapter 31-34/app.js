// Question No:1

// let d = new Date();
// document.write(d);

// Question No:2

// let currentDate = new Date();
// let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonthIndex = currentDate.getMonth();
// let months = monthsName[currentMonthIndex];
// alert("Current month: " + months);

// Question No:3

// let currentDate = new Date();
// let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let currentDayIndex = currentDate.getDay();
// let firstThreeLettrs = daysOfWeek[currentDayIndex];
// alert("Today is: " + firstThreeLettrs);

// Question No:4

// let today = new Date().getDay();
// if (today === 6 || today === 0) {
//     alert("It's Fun day");
// } else {
//     alert("It's work day");
// }

// Question No:5

// let today = new Date().getDate();
// if (today < 16){
//     document.write("First fifteen days of month ");
// } else{
//     document.write("Last days of the month");
// }

// Question No:6

// let now = new Date(2014, 12, 5);
// let millisecondSince1970 = now.getTime();
// let minutesSince1970 = Math.floor(millisecondSince1970 / 60000);
// document.write("Current date: " + now + "<br>" + "Elapsed millisecond since January, 1, 1970: " + millisecondSince1970 + "<br>" + "Elapsed minutes sinceJanuary, 1, 1970: " + minutesSince1970);

// Question No:7

// let now = new Date();
// let hours = now.getHours();
// let amPm = hours >= 12 ? "PM" : "AM";
// hours = hours % 12;
// hours = hours ? hours : 12;
// let minutes = now.getMinutes();
// minutes = minutes < 10 ? '0' + minutes : minutes;
// let strTime = hours + ':' + " " + amPm;
// if (hours > 12) {
//     alert("It's AM");
// } else{
//     alert("It's PM");
// }

// Question No:8

// let laterDate = new Date(2020, 11, 31);
// document.write("later Date: " + laterDate);

// Question No:9

// let ramadanStartDate = new Date(2015, 5, 18);
// let currentDate = new Date();
// let timeDiff = currentDate.getTime() - ramadanStartDate.getTime();
// let daysPass = Math.floor(timeDiff/ (1000 * 3600 * 24));
// alert(daysPass + " Number of days passed since 1st Ramadan 2015")

// Question No:10

// let now = new Date();
// let refrenceDate = new Date(2015, 11, 5);
// let timeDiff = now - refrenceDate;
// let secndElapsed = Math.floor(timeDiff / 1000);
// document.write("On reference date " + refrenceDate , secndElapsed + " seconds had passed since begining of 2015");

// Question No:11

// let now = new Date();
// let refrenceDate = now.getHours();
// now.setHours(refrenceDate + 1);
// document.write("current date: " + now + "1 hour ago, It was " + now);

// Question No:13

// let age = prompt("Enter your age: ");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your Age is: " + age + "<br>" + "Your birth year is: " + birthYear);

// Question No:14
