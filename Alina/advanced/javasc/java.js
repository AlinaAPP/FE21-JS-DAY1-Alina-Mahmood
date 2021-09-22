/* Exercise 1 */
/* Sum the following variables and store the result in one new variable: */

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a+b+Number(c)+Number(d)+e;
document.write("sum: ", sum);
document.write("<hr>");

/* Multiply the following variables and store the result in one new variable: */

var f = '1';
var g = 15;
var h = 8;
var i = "1";

var multiply = Number(f)*g*h*Number(i);
document.write("multiply: ", multiply);
document.write("<hr>");

/* Divide the two results that you got from the arithmetic operations and print the result in the web browser. */

var div = sum / multiply;
document.write("divide: ", div);
document.write("<hr>");

/* Exercise 2 */
/* Select and output the numbers 11, 25, 17, 27 and 0 in the console */
var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
document.write(a[1][1], "<br>", a[4][2], "<br>", a[5][3], "<br>", a[2][3], "<br>", a[2][1]);
console.log(a[1][1], a[4][2], a[5][3], a[2][3], a[2][1]);