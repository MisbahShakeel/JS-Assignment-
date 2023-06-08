// Question:1

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");
// if (num1 == num2) {
//     document.write(num1 + "and" + num2 +" : is equal");
// }
// else if (num1 >= num2) {
//     document.write(num1 + ": is greater than" + num2);
// }
// else if (num1 <= num2) {
//     document.write(num1 + ": is smaller than" + num2);
// }
// else{
//     document.write("enter a correct input");
// }

// Question:2

// let = num1,num2;
// num1 = +prompt("Input the first integer", "0");
// num2 = +prompt("Input the second integer", "0");
// if (parseInt(num1, 10) > parseInt(num2, 10))
// {
//     console.log("The larger of" + num1 + "and" + num2 + "is" + num1 +".");
// }
// else
// if (parseInt(num2, 10) > parseInt(num1, 10))
// {
//     console.log("The larger of" + num1 + "and" + num2 + "is" + num2 +".");
// }
// else
// {
//     console.log("The values" + num1 + "and" + num2 + "are equal.")
// }

// Question:3

// let number = -5;
// if (number <0)
// document.write(number + 'is negative');
// else
// document.write(number + 'is positive');

// Question:5

// let correctPassward = "1234";
// let userInput = +prompt("Please enter your passward");
// if (userInput === null || userInput === ""){
//     alert("Please enter your passward");
// }
// else{
//     if(userInput === correctPassward){
//         alert("Correct! The passward you entered match to the orginal passward.");
//     }
//     else{
//         alert("Incorrect passward");
//     }
// }

// Question:6

// var greeting;
// var hour =13;

// if (hour < 18) {
//     greeting = "Good day";
// } else
// {
//     greeting = "Good evening";
// }

// Question:7

// const time = +prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):");
// const hour = parseInt(time.substr(0,2));
// let period;
// if (hour >= 0 && hour < 12){
//     period = 'AM';
// }else{
//     period = 'PM';
// }
// let hour12;
// if (hour == 0) {
//     hour12 = 12;
// } else if (hour > 12){
//     hour12 =hour-12;
// } else{
//     hour12 = hour;
// }
// console.log("The time in 12-hour  clock format is" + hour12 + period);