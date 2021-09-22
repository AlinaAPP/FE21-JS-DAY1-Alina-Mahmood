/* Ch. 1 | Multidimensional array */
/* var multiArray = [
    ["Vienna"],
    ["", "", "is"],
    ["","","","","a"],
    ["","","","","","nice"],
    ["","","","","","","city"]
];

console.log(
    multiArray[0][0] + "\n\t\t",
    multiArray[1][2] + "\n\t\t\t", 
    multiArray[2][4] + "\n\t\t\t\t", 
    multiArray[3][5] + "\n\t\t\t\t\t", 
    multiArray[4][6]);
 */

/* Ch. 2 | String Manipulation */

/* var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

document.write (sentence.split("$").join(" ")); */

var txt = "Hey there, i am a javascript developer, and i live in vienna";
var arr = txt.split(",")
console.log(arr);
console.log(arr[1]);