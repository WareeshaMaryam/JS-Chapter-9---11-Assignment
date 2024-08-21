//Q.1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
// var cityName = prompt("Enter your city name.")
// if (cityName == "Karachi" || cityName == "karachi"|| cityName =="KARACHI"){
//     document.write("Welcome to city of lights")
// }else {
//     document.write("Welcome to " + cityName)
// }




// Q.2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var gender = prompt("What is your gender")
// if (gender == "Male" || gender == "male"|| gender =="MALE"){
//     document.write("Good morning sir")
// }else if(gender == "Female" || gender == "female"|| gender =="FEMALE"){
//     document.write("Good morning madam")
// } 




// Q.3 Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var signal = prompt("Enter the color of traffic signal")
// if (signal == "Red" || signal == "red"|| signal =="RED"){
//     document.write("Must Stop")
// }else if(signal == "Yellow" || signal == "yellow"|| signal =="YELLOW"){
//     document.write("Ready to move")
// } else if(signal == "Green" || signal == "green"|| signal =="GREEN"){
//     document.write("Move now")
// } 




//Q.4 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel = +prompt("Write the current fuel in the car (in litres)")
// if (fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// } else {
//     document.write ("You have enough fuel")
// }




//Q.5 Run this script, & check whether alert message would be displayed or not. Record the outputs.

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } 

// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// }

// if (true){ 
//     alert("True"); 
//     } 
//     if (false){ 
//     alert("False"); 
//     }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     } 




// Q.6 Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 

// var marksObtained = prompt("Enter your marks obtained in three subjects");
// var totalMarks = prompt("Enter total marks");
// var percentage = (marksObtained / totalMarks) * 100;
// var grade;
// if (percentage >= 80 && percentage<=100) {
//     grade= "A-one";
// } else if (percentage >= 70 && percentage<=79 ) {
//     grade= "A";
// } else if (percentage >= 60 && percentage<=69) {
//     grade= "B";
// } else if (percentage >= 0 && percentage<=59) {
//     grade= "Fail";
// }

// var remarks;
// if (grade === "A-one") {
//     remarks = "Excellent";
// } else if (grade === "A") {
//     remarks = "Good";
// } else if (grade === "B") {
//     remarks = "You need to improve";
// } else if (grade === "Fail") {
//     remarks = "Sorry";
// }

// document.write("Total marks: " +totalMarks + "<br/>");
// document.write("Marks obtained: " +marksObtained+ "<br/>");
// document.write("Percentage: " +percentage+ "%" + "<br/>");
// document.write("Grade: " +grade+ "<br/>");
// document.write("Remarks: " +remarks+ "<br/>");




//Q.7 Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
// var secretNum = 1;
// var guessNum = +prompt("Enter your number to guess the secret number (between 1 to 10)");
// if( guessNum === secretNum ){
// alert("Bingo! Correct answer");
// } else if (guessNum == +1){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Try again! The secret number was " + secretNum);
// }




//Q.8  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var numBer = +prompt("Enter a number to check is it divisble by 3 or not?");

// if (numBer%3 === 0){
// alert("The number " + numBer +" is divisible by 3")
// }else{
//     alert("The number " + numBer + " is not divisible by 3")
// }




//Q.9  Write a program that checks whether the given input is an even number or an odd number. 

// var num = +prompt("Enter a number to check if is it Even Number or Odd Number?");

// if (num%2 === 0){
// alert("The number " + num +" is an Even Number")
// }else{
//     alert("The number " + num + " is an odd Number")
// }




//Q.10  Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” 

// var T = +prompt("Enter the Temprature");
// if (T > 40) {
//     alert("“It is too hot outside.");
// } else if (T > 30) {
//     alert("The Weather today is Normal.");
// }else if (T > 20) {
//     alert("Today’s Weather is cool.");
// }else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }




//Q.11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number  c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 
// var firstNumber = +prompt("Enter the first Number");
// var secondNumber = +prompt("Enter the second Number");
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation == "+") {
//     result = firstNumber + secondNumber
// } else if (operation == "-") {
//     result = firstNumber - secondNumber
// } else if (operation == "*") {
//     result = firstNumber * secondNumber
// } else if (operation === "/") {
//     // Check if the second number is not zero to avoid division by zero
//     if (secondNumber == 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         result = "Error: Division by zero is not allowed.";
//     }
// } else if (operation === "%") {
//     // Check if the second number is not zero to avoid modulus by zero
//     if (secondNumber == 0) {
//         result = firstNumber % secondNumber;
//     } else {
//         result = "Error: Modulus by zero is not allowed.";
//     }
// } else {
//     result = "Invalid operation. Please enter one of +, -, *, /, %.";
// }
 

// alert("The result is " + result)

