/* ex1 - sort the following values alphabetically */

var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
var sortedCars = cars.sort();
document.write("ex1: ", sortedCars);
document.write("<hr>");
/* console.log(sortedCars); */


/* ex2.1 -  */

var obst = ["apple", "banana", "kiwi"];

var moreObst = obst.push("orange");
document.write("ex2.1: ", obst);/* we'll get the new array */
document.write("<hr>");
/* console.log (moreObst); */ /* we'll get the length */
/* console.log (obst); */


var lessObst = obst.pop("orange");
document.write(obst);
document.write("<hr>");
/* console.log(lessObst); */
/* console.log(obst); */

/* ex2.2 -  */

var animals = ["monkey", "horse", "dog"];
document.write("ex2.2: ", animals.sort());
document.write("<hr>");

var moreAnimals = animals.unshift("cat");
document.write(animals);