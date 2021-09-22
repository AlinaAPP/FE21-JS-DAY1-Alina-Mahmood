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
fruits.push("orange") // added another fruit at the end
var moreFruits = fruits ;
document.write("<br>")
document.write(moreFruits);
document.write("<br>")
fruits.pop("orange"); // removed the last one 
document.write(fruits)

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


// Advanced 1.1

var a = 7;
var b = 14;
var c = Number("21"); // converting String to a Number 
var d = Number('36'); // converting String to a Number 
var e = 42;
var sum = a + b + c + d + e ;
document.write("The sum is " +sum);
document.write("<br>")

var f = Number('1');// converting String to a Number
var g = 15;
var h = 8;
var i = Number("1");// converting String to a Number
var multiplication = (f * g * h * i );
document.write("Multiplication result is " +multiplication);
document.write("<br>")

var division = multiplication / sum ;
var Result = division;
document.write("The Result is " +Result);
document.write("<br>")


// Advanced 2

var L = [[1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]]

    console.log(L[1][1]);
    console.log(L[4][2]);
    console.log(L[5][3]);
    console.log(L[2][3]);
    console.log(L[2][1]);



    // Challenge 1 
    
    var cityArray= [["Vienna"],
                    ["is"],
                    ["a"],
                    ["nice"],
                    ["city"]];

document.write(cityArray[0][0]);
document.write("<br>")
document.write(cityArray[1][0]);
document.write("<br>")
document.write(cityArray[2][0]);
document.write("<br>")
document.write(cityArray[3][0]);
document.write("<br>")
document.write(cityArray[4][0]);
document.write("<br>")


    


// Challenge 2 

var Challenge2 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
document.write(Challenge2.split("$").join(" "));
document.write("<br>")

// Extra ex 1
var Text = "Hey there, i am a javascript developer, and i live in vienna"
document.write(Text.substring(10,38));



