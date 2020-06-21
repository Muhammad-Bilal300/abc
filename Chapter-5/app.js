//  TASK # 1

var first_Number = 3;
var second_Number = 5;
document.write("<h1>Task # 1 & 2</h1>")
document.write("Sum of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number + second_Number) + "</b></u><br>");
document.write("Subtraction of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number - second_Number) + "</b></u><br>")
document.write("Multiplication of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number * second_Number) + "</b></u><br>")
document.write("Division of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number / second_Number) + "</b></u><br>")
document.write("Modulus of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number % second_Number) + "</b></u><br>" + "<br>" + "<br>")


//  TASk # 3

document.write("<h1>Task # 3</h1>");

var number;
document.write("Value after variable declaration is " + number + "<br>");
number = 5;
document.write("Initial value " + number + "<br>");
number++;
document.write("Value after increment is : " + number + "<br>");
number = number + 7;
document.write("Value after addition is : " + number + "<br>");
number--;
document.write("Value after decrement is : " + number + "<br>");
number = number % 3;
document.write("The remainder is : " + number + "<br>" + "<br>" + "<br>");


//  TASK # 4

document.write("<h1>Task # 4 </h1>");

var ticket_Price = 600;
var no_of_Tickets = 5;
document.write("Price of 1 ticket is : " + ticket_Price + "<br>");
document.write("Total No. of Tickets are : " + no_of_Tickets + "<br>")
document.write("Total cost to buy " + no_of_Tickets + " tickets to a movie is " + (ticket_Price * no_of_Tickets) + " PKR" + "<br>" + "<br>");


//  TASK # 5

document.write("<h1>Task # 5</h1>");

var table_Number = 5;
document.write("Table of  " + table_Number + "<br>");
document.write(table_Number + " x 1 = " + (table_Number * 1) + "<br>");
document.write(table_Number + " x 2 = " + (table_Number * 2) + "<br>");
document.write(table_Number + " x 3 = " + (table_Number * 3) + "<br>");
document.write(table_Number + " x 4 = " + (table_Number * 4) + "<br>");
document.write(table_Number + " x 5 = " + (table_Number * 5) + "<br>");
document.write(table_Number + " x 6 = " + (table_Number * 6) + "<br>");
document.write(table_Number + " x 7 = " + (table_Number * 7) + "<br>");
document.write(table_Number + " x 8 = " + (table_Number * 8) + "<br>");
document.write(table_Number + " x 9 = " + (table_Number * 9) + "<br>");
document.write(table_Number + " x 10 = " + (table_Number * 10) + "<br>");


//  TASK # 6


document.write("<h1>Task # 6</h1>")

var temp_in_Celsius = 25;
var temp_in_Fahrenheit = 70;
var celsius_Into_Fahrenheit = (temp_in_Celsius* (9/5) + 32);
var Fahrenheit_Into_Celsius = ((temp_in_Fahrenheit-32) * (5/9));
document.write(temp_in_Celsius + "&degC is " + celsius_Into_Fahrenheit + "&degF" + "<br>");
document.write(temp_in_Fahrenheit + "&degF is " + Fahrenheit_Into_Celsius + "&degC" + "<br>");
