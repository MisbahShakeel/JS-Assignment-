// Question:1

// var num1 = prompt("enter number 1");
// var num2 = prompt("enter number 2");
// var result =num1 + num2;
// document.write("The sum of" + num1 + num2 + "is" + result);

// Question:2

// var num1 = prompt("enter number 1");
// var num2 = prompt("enter number 2");
// document.write("the sum of" , num1 ,"and" , num2 , "is" , num1+num2 + "<br>" );
// if (num1>num2){
//     document.write("the subtraction of" , num1 , "and" , num2 , "is" , num1-num2 +"<br>");
// }
// else{
//     document.write("the subtraction of" , num1 , "and" , num2 , "is" , num2-num1 +"<br>");
// }
// document.write("the multiplication of" , num1 , "and" , num2 , "is" , num1*num2 +"<br>");
// document.write("the modul of" , num1 , "and" , num2 , "is" , num1%num2 +"<br>");

// Question:3

// var myVariable;

// document.write("Value after decleration is: " + myVariable + "<br>");

// myVariable = 5;
// document.write("Initial value: " + myVariable + "<br>");

// myVariable++;
// document.write("Value after increment is: " + myVariable + "<br>");

// myVariable += 7;
// document.write("Value after addition is: " + myVariable + "<br>");

// myVariable--;
// document.write("Value after decrement is: " + myVariable + "<br>");

// var remainder = myVariable % 3;
// document.write("The remainder is: "  + remainder + "<br>");

// Question:4

// ticket_price = 600;
// num_of_tickets = 5;
// total_cost = ticket_price * num_of_tickets;
// document.write("The cost of buying", num_of_tickets, "ticket is", total_cost, "PKR");

// Question:5

// var table = +prompt("enter number");
// document.write("Table of", table, "<br>");
// for (let i = 1; i <=10; i++) {
//     document.write(table+" X " + i + " = " +table*i + "<br>");
// }

// Question:6;

// var celcius = +prompt("enter temperature in celcius");
// var fahrenhite = +prompt("enter temperature in fahrenhite");
// document.write("temperature", celcius, "in fahrenhite is", ((celcius*(9/5))+32), "<sup>o</sup> F <br>");
// document.write("temperature", fahrenhite, "in celcius is", ((fahrenhite-32)*(5/9)), "<sup>o</sup> C <br>");

// Question:7

// var price_1 = 650;
// var quantity_1 = +prompt("enter quantity of item 1");
// var price_2 = 100;
// var quantity_2 = +prompt("enter quantity of item 2");
// var shopping_charges = 100;
// document.write("price of item 1 is:", price_1, "<br>");
// document.write("price of item 2 is:", price_2, "<br>");
// document.write("quantity of item 1 is:", quantity_1, "<br>");
// document.write("quantity of item 1 is:", quantity_2, "<br>");
// document.write("shopping price is:" , shopping_charges, "<br>");
// document.write("total cost is:", (price_1*quantity_1) + (price_2*quantity_2) + shopping_charges, "<br>");

// Question:8

// var total_marks = +prompt("enter total marks");
// var obtained_marks = +prompt("enter obtained marks");
// var per = (obtained_marks*100)/total_marks;
// document.write("total marks are:" , total_marks, "<br>");
// document.write("obtained marks are:" , obtained_marks, "<br>");
// document.write("percentage is:" ,per, "%");

// Question:9

// var dollar = +prompt("enter how many dollars you wants to convert");
// var riyal = +prompt("enter how many riyals you wants to convert");
// var conversion = (dollar*104.80) + (riyal*28);
// document.write("<b> currency in PKR </b> <br><br>");
// document.write("total currency in PKR is :" , conversion);

// Question:10

// var number =+prompt("enter a number");
// var calc =((number+5)*10)/2;

// Question:11

// var curr_year = +prompt("enter a current year");
// var birth_year = +prompt("enter birth year");
// var age = curr_year - birth_year;
// document.write("current year is:" , curr_year, "<br>");
// document.write("birth year is:" , birth_year, "<br>");
// document.write("age is :" , age);

// Question:12

// var radius = +prompt("enter radius");
// var circumference = 2*Math.PI * radius;
// var area = Math.PI * (radius**2);
// document.write("radius is:", radius, "<br>");
// document.write("circumference is:", circumference, "<br>");
// document.write("area is:", area, "<br>");

// Question:13

// var fav_snack = prompt("enter your fav snack");
// var curr_age = +prompt("enter your current age");
// var max_age = +prompt("enter your estimated max age");
// var snack_per_day =  +prompt("enter amount of snack u eat per day");
// var value = 0;
// var loop_value = (max_age - curr_age)*365;
// for (let i=1;i<=loop_value;i++){
//      value = value+snack_per_day;
// }
// document.write("your fav snack : ",fav_snack, " <br>");
// document.write("your current age : ",curr_age, " <br>");
// document.write("your estimated max age : ",max_age, " <br>");
// document.write("amount of snack u eat per day : ",snack_per_day, " <br>");
// document.write("you will need : ",value, " snack to last you until the ripe old age of ", max_age , "<br>");
