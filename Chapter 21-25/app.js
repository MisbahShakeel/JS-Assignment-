// Question No:1

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Second Name");
// let fullName = firstName + " " + lastName;
// alert ("Hello " + fullName);

// Question No:2

// let phoneModel = prompt("What is your favourite mobile phone model ?");
// let length = phoneModel.length;
// alert("My favourite mobile phone model is: " + phoneModel + "length of string: " + length);

// Question No:3

// let word = "Pakistani";
// let index = word.indexOf("n");
// document.write("String: Pakistani " + "<br>" + "Index of 'n': " + index);

// Question No:4

// let word = "Hello World";
// let index = word.lastIndexOf("l");
// document.write("String: Hello World" + "<br>" + "Last index of 'l': " + index);

// Question No:5

// let word = "Pakistani";
// let char3rd = word.charAt(3);
// document.write("String: Pakistani" + "<br>" + "Character at index 3: " + char3rd);

// Question No:6

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Second Name");
// let fullName = firstName.concat(" ", lastName); 
// alert ("Hello " + fullName);

// Question No:7

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("City: Hyderabad" + "<br>" + "After replacement: " + newCity);

// Question No:8

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var newMessage = message.replaceAll("and",  "&");
// document.write(newMessage);

// Question No:9

// let str = "472";
// let num = parseInt(str);
// document.write("Value: " + str + "<br>" + "Type: " + "String" + "<br>" );
// document.write("Value: " + num + "<br>" + "Type: " + "Number");

// Question No:10

// # Take user input
// let user_input = input("Enter a string: ");

// # Convert the input to uppercase
// let capitalized_input = user_input.upper()

// # Display the capitalized input
// document.write("Capitalized input:", capitalized_input);

// Question No:11

// let userInput = prompt("Enter some text: ");
// let title_case = userInput.title_case();
// document.write("user input: " + userInput + "<br>" + "Title Case: " + title_case );

// Question No:12

// var num = 35.36;
// var result = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + result)

// Question No:13

// var username = prompt("Enter your username: ");
// var specialSymbols = ["@", ".", ",", "!"];
// for (var i = 0; i < specialSymbols.length; i++) {
//     if (username.includes(specialSymbols[i])) {
//         alert("Please enter a valid username. \n\n Prevent this page from creating aditional dialogs" );
//        break;
//     }
// }

// Question No:14

// let ary = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to oder Sir/Mam'm ? ").toLowerCase();
// let found = false;
// for (let i=0; i <ary.length; i++) {
//     if (ary[i].toLowerCase() === userInput){
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + "is available in our bakery.");
// } else {
//     alert("We are sorry. " + userInput + "is not available in our bakery.");
// }