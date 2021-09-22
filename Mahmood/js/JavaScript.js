var a = "Hi my name is Martin" // Basic 2 
console.log(a);
document.write(a); //to show the result on Html


// Basic 3 

var age= 25;
document.write(" and i am " + age + " Years old <br> ");


// Basic 4

var Players = ["Martin","Thomas","Peter","Mathias","Niki"]

console.log("The most valuable Player of the match is " + Players[2]);



// Intermediate 1

var Alpha = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat","Ferrari",];

document.write(Alpha.sort()); // sort Array elements alphabatically


// Intermediate 2.1

var fruits = ["apple"," banana","kiwi"] // main Array
var moreFruits = fruits.push("orange") // added another fruit at the end
document.write("<br>")
document.write(fruits);
document.write("<br>")
var lessfruits=fruits.pop("orange"); // removed the last one 
document.write(fruits)

// var moreFruits = new Array();
// moreFruits = fruits.push("orange");
// document.write(moreFruits); // added another one at the end

// var lessFruits = new Array();
// lessFruits = moreFruits.pop("orange");
// document.write(lessFruits);


// Intermediate 2.2
document.write("<br>")
var animals = ["monkey", "horse", "dog"]
var reversed = animals.reverse(); // reversed the Array
document.write(animals); 
document.write("<br>") // new line
var moreAnimals= animals.unshift("cat"); // added another animal at the beginning 
document.write(animals);

// intermediate 2.3
document.write("<br>")
var fruitList = ["mango","cherries","kiwi","grapes","pear","peach","orange","lemon"]
document.write(fruitList[0])
document.write("<br>")
document.write(fruitList[1])
document.write("<br>")
document.write(fruitList[2])
document.write("<br>")
document.write(fruitList[3])
document.write("<br>")
document.write(fruitList[4])
document.write("<br>")
document.write(fruitList[5])
document.write("<br>")
document.write(fruitList[6])
document.write("<br>")
document.write(fruitList[7])
document.write("<br>")

