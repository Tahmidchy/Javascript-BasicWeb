//To use For Loop in javascript part-1

document.write("<h1> How to use For Loop in Javascript </h1><br/>");

for(var x = 1; x<=10; x++){
    document.write("<h6> Hello ! Chittagong !!</h6><br/>");
}
document.write("<br/><h5> The End</h5><br/>");

//2nd code for loop

for(var x = 1; x<=100; x++){
    document.write(" " + x);
}
document.write("<br/><h5> The End</h5><br/>");

// 3rd code for loop

for(var x = 1; x<=99; x=x+2){
    document.write(" " + x);
}
document.write("<br/><h5> The End</h5><br/>");

// 4th Code for loop in javascript part -2 

var sum = 0;
for (var x = 0; x <= 5; x=x+1){
    result1 = sum + x;
}
document.write(" The sum is :" + result1 +"<br/>");

//5th code for loop

var m = parseInt(prompt(" Enter the starting number : "),10);
var n = parseInt(prompt(" Enter the last number : "),10);
var sum = 0;

for ( var x = m; x <= n; x++){
    sum = sum + x;
}
document.write(" The sum is : " + sum + "<br/>");

// 6th code for loop

for (var x = 1; x <= 5; x++) {
    var digit1 = parseInt(prompt(" Enter Your First Digit for sum :"), 10);
    var digit2 = parseInt(prompt(" Enter Your Second Digit for sum :"), 10);
    var result3 = digit1 + digit2;
    document.write(" The sum is : " + result3 + "<br/>");
}

// Use while loop in javascript

document.write("<br/> To use While loop in Javascript <br/>");

var i = 1;

while (i <= 5) {
    document.write(" " + i);
    i = i + 1;
}

//while loop code 2nd 

// 1 + 2 + 3 + ..... + 10    

var i = 1;
var sum = 0;

while (i <=10 ){
    result4 = sum + i;
    i = i + 1;
}

document.write("<br/> The while loop sum is :" + result4 + "<br/>");

// Task -6 Anisul Islam

document.write("<br/> <h3> The Question is : </h3> <h4>A program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100</h4><br/>");

var sum=0;
var x=1;
while(x<=100)
{
  if(x%3==0 && x%5==0)
  {
    document.write("this digit is divisible by 3 and 5: "+x);
    document.write("</br>")
    sum=sum+x
  }

  x=x+1
}

// while loop program-1

var i = 1;
var sum = 0;

while (i <= 10) {
    sum = sum + i;
    i = i + 1;
}
document.write(" The Sum is :" + sum + "<br/>");
document.write("<br/> The end <br/>");

//do while loop program -1

document.write("<br/> Do while loop program -1 <br/>");

var i = 1;

do {
    document.write(" " + i);
    i++;
}while ( i <= 20);

//To use Break and Continue

for (var i = 1; i <= 100; i++) {
    document.write(" " + i);

    if( i == 10) {
        break;
    }
}
document.write("<br/> The End Break Program <br/>");

// To use Break and Continue program-2

for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(" " + i);
}
document.write("<br/> The End Continue program <br/>");

// Ternary Operators Program

document.write("<br/> Ternary Operators Program <br/>");

var number = Number(prompt(" Enter a Number for Ternary Operators: "));

var result5 = number > 0 ? "Positive" : "Negative";
document.write(" The Result is Ternary Operators is :" + result5 + "<br/>");

// Multiple condition check by Ternary Operators Program.

document.write("<br/> Ternary Operators are using For multiple Condition check <br/>");

var number = Number(prompt(" Enter a Number for Multiple Condition Check by Ternary Operators program : "));

var result6 = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
document.write("<br/> The Result is Multiple Ternary Operators is :" + result6 + "<br/>");

//Traditional Function
//Create a function

document.write("<br/> Traditional Function <br/>");

function sqaure() {
    var num = 5;
    var result = num * num;
    document.write("Result = " + result + "<br/>");
}
//calling function

sqaure();

// Create a function program -2 

function square(num) {
    var result = num * num;
    document.write("Result = " + result + "<br/>");
}
// calling function

square(5);
square(6);
square(7);

// create a function program-3

function square1(num1 , num2) {
    var result = num1 * num2;
    document.write("Result = " + result + "<br/>");
}
//calling function
 square1(5,6);

 // create a function program-4 use return

 function square2(num1, num2) {
    var result = num1 * num2;
    return result;
 }
 // calling function
  var x = square2(8 , 16);
  document.write("Result is =" + x + "<br/>");

// Create addition function

function addition(x,y){
    var result = x + y ;
    return result;
}
//calling function
 var sum = addition(5 , 5);
 document.write("The SUM Function result is =" + sum + "<br/>");

 // Create Subtraction function

 function subtract(p, q){
    var result = p - q;
    return result;
 }
 // calling function
  var sub = subtract(15 , 5);
  document.write("The Subtraction function result is =" + sub + "<br/>");

  // Create a Calculator by function

  function addition(x, y) {
    var toShow = x + y;
    document.write("The addition value is : " + toShow +"<br/>");
}
function subtraction(x, y) {
    var toShow = x - y;
    document.write("The subtraction value is : " + toShow +"<br/>");
}
function multiplication(x, y) {
    var toShow = x * y;
    document.write("The multiplication value is : " + toShow +"<br/>");
}
function division(x, y) {
    var toShow = x / y;
    document.write("The division value is : " + toShow +"<br/>");
}
function modulus(x, y) {
    var toShow = x % y;
    document.write("The modulus value is : " + toShow);
}
// calling function for calculations

addition(10, 20);
subtraction(10, 20);
multiplication(10, 20);
division(10, 20);
modulus(10, 20);

// IIFEs (Immediately Invokeable Function Expression)
//program-1

(function display(message) {
    document.write(message);
})("<br/>Chittagong <br/>");

//program-2
//Task-7 Anisul Islam : Create an IIFEs that print sum of 2 numbers

document.write("<br/><h4>Task-7 :</h4> <h5> Create an IIFEs that print sum of 2 numbers :</h5><br/> ");

(function addition(v, w){
    var sum =  v + w;
    document.write(" The Sum of 2 numbers are : " + sum + "<br/>");
})(15,18);

//Function Expressions
//program -1 
document.write("<br/> <h5> Function Expressions Program </h5><br/>");

var display2 = function displayMessage() {
    document.write("<br/> Hello world !! <br/>");
};
display2();

// To create An array

var names = new Array(5);

names[0] = "Ahnaf";
names[1] = "Tahmid";
names[2] = "Muhammad";
names[3] = "Mostafa";
names[4] = "Masud";

document.write("<br/> The Array Result Is :" + names[2] + "<br/>");

// To Create An array Program - 1

var names1 = ["Ahnaf","Tahmid","Muhammad","Mostafa","Masud"];
document.write("<br/> The Array program-2 result is :" + names1 + "</br/>");

// To Create An Array Program-3 using Push and Pop functions

var names2 = ["Rahim","Karim","Abul","Ratul"];
// push  functions
names2.push("Ahanf","Tahmid","Muhammad","John");
document.write("<br/> The Array Program-3 result After using push functions :" + names2 + "</br/>");
//pop functions
names2.pop();
document.write("<br/> The Array Program-4 result after using pop functions :" + names2 + "</br>");

// To create An Array program-4 using the Concatination functions

var country1 = ["Bangladesh","India","Pakistan","Nepal"];
var country2 = ["America","Canada","France","Germany","Russia"];

// Concat together the country

var country = country1.concat(country2);
document.write("<br/> The Concat program result is :" + country + "<br/>");

// To Loop An Array Program-1

var num = [10,20,30,40,50,60];
var sum = 0;

for (var i = 0; i <= 5; i++) {
    document.write("<br/> The Loop Array Result is :" + num[i] + "<br/>");
    sum = sum + num[i];
}
document.write("<br/> The Loop Array Result Sum is : " + sum + "<br/>");

// To Loop An Array program-2

document.write("<br/> The Array New Program Collect Data From users <br/>");

var num = new Array();

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a Number For An Array : "),10);
}
var sum = 0;

for (var i = 0; i < 5; i++) {
    document.write(num[i] + "<br/>");
    sum = sum + num[i];
}

document.write("<br/> The Array Sum = " + sum + "<br/>");

// Array Methods 
// You have already learned about pop(),push(),concat()
//shift(),unshift(),splice(pos,noe,ele1,ele2..),
//sort(), reverse()

// Array Libary methods program-1 using shift, shift is opposite of pop functions.

var names = ["Rahim", "Karim", "Abul","Ratul", "Sakib"];
document.write("<br/> The Array result is : " + names + "<br/>");
//using now shift
names.shift();
document.write("<br/> After Using Shift the array result is : " + names);

// Array libary methods program-2 using unshift, unshift is opposite of push functions

var names3 = ["India","Pakistan","France","Germany"];
document.write("<br/> The Array result2 is : " + names3 + "<br/>");
//using unshift
names3.unshift("Bangladesh");
document.write("<br/> The Array results After using unshift methods : " + names3 + "<br/>");

// Array libary methods program-3 using splice methods
//using splice methods add elements
names3.splice(2,0, "Nepal","Bhutan");
document.write("<br/> The Array results After using splice methods : " + names3 + "<br/>");
// remove last 1 element remove elements
names3.splice(2,1);
document.write("<br/> The Array results After using splice methods and remove last element : " + names3 + "<br/>");

// Array libary methods program-4 using slice methods

var names4 = ["Dhaka","Chittagong","Rajshahi","Khulna","Sylhet"];
document.write("<br/> The Array result before using slice methods : " + names4 + "<br/>");
var newArray = names4.slice(1);
document.write("<br/> The Array result after using slice methods : " + newArray + "<br/>");

// Array Libary methods program-5 using sort methods

var names5 = ["Rassia","Canada","Sweden","Germany","Australia"];
var sortedNames = names5.sort();
document.write("<br/> The Array result after using sort methods : " + sortedNames + "<br/>");

// Array libary methods program-6 using reverse methods 

var names6 = ["Anis","Rahim","Karim","Tahmid"];
var sortedNames = names6.reverse();
document.write("<br/> The Array result after using reverse methods : " + sortedNames + "<br/>");

// Array libary methods program-7 using number sort methods

var numbers = [10,15,20,1,60,6,90,2,55,9];
numbers.sort(function(a,b){
    return a-b;
});
document.write("<br/> The Array result after using numbers sort methods : " + numbers +"<br/>");

// Array Libary methods program-8 using reverse sorting numbers 

var numbers1 = [10,15,20,1,60,6,90,2,55,9];
numbers.sort(function(a,b){
    return b-a;
});
document.write("<br/> The Array result after using reverse numbers sort methods : " + numbers1 +"<br/>");

// TASK-8 Anisul Islam 
// Create a function called highestScore that will
// .Receive a 1D array called scores . return the height scores


function highestScores(scores){
    var max = scores[0];
    for(var x = 1; x<scores.length; x++){
      if(max < scores[x]){
          max = scores[x]
      }
    }
    return max;
  }
  var scores = [20,30,40,80,100,10];
  //function calling
  var heightScore = highestScores(scores);
  document.write("<br/> The Task -8 HeightScore is : " + heightScore + "<br/>");

// Task-9 Anisul Islam
//Create a function called heightScore that will
//.Received a 2D array called playersInfo
//. Based on HeightScore,return the name and score.

function highestRunScorer(playersInfo){
    var highestScorer=playersInfo[0][0];
    var highestScore=playersInfo[0][1];
    for(var x=1;x<playersInfo.length;x++){
    
    if(highestScore<playersInfo[x][1]){
      highestScore=playersInfo[x][1];
    highestScorer=playersInfo[x][0];
    
    }
    
    }
    
    return highestScorer
    }
    
    var playersInfo=[
    ["shakib",20],
    ["tamim",30],
    ["liton",400],
    ["santo",100]
    
    ]
    //function calling
    var maxScore=highestRunScorer(playersInfo);
      document.write("<br/>Task-9 : The HeightScore Run and playersInfo are :" + maxScore + "<br/>");  

// To Create and use objects
//object variables
//How to create objects
//how to print the value an objects
//adding a constructors
//adding a function in constructors
//Object variables program-1

document.write("<br/> The Object variables program-1 <br/>");

var studentsInfo = {
    StudentName : "Hasan",
    StudentAge : 22,
    language : ['Bangla','English','Japanese']
}

document.write("<br/> The Object variables are : " + studentsInfo.StudentName + " " +studentsInfo.StudentAge+ " " + studentsInfo.language + "<br/>");

// adding a constructors function program-2

function student(name,age,Cgpa,language) {
    this.name = name;
    this.age = age;
    this.Cgpa = Cgpa;
    this.language = language;
}

var student1 = new student("Tahmid",24,2.90,['Bangla','English','Japanese']);
var student2 = new student("Nasir",25,3.90,['Bangla','English','maloy']);
var student3 = new student("Rahim",24,3.00,['Bangla','English','korean']);

document.write("<br/> The Constructors function result is :" + student2.name +" "+ student2.age + "<br/>");

//adding a function in constructors program-3

function student(name,age,Gpa,subject){
    this.name = name;
    this.age = age;
    this.Gpa = Gpa;
    this.subject = subject;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.Gpa);
        console.log(this.subject);
    }
}

var student4 = new student("Mahin", 24, 2.90, ['Bangla','English','Japanese']);
var student5 = new student("Nasir", 25, 3.90, ['Bangla','English','Hindi']);
var student6 = new student("Tahmid", 24, 3.00, ['Bangla','English','korean']);

//function calling

student6.display();

// Math Object program we are using console for programming but we are code paste here.

// Math Object program-1

var num1 = parseInt(prompt("Enter the First number for Math objects maximum number find :"),10);
var num2 = parseInt(prompt("Enter the Second number for Math objects maximum number find :"),10);

var maximum = Math.max(num1,num2);

document.write("<br/> The Maximum Number is : " + maximum + "<br/>");

//Math object program-2

var minimum = Math.min(num1,num2);
document.write("<br/> The Minimum Number is : " + minimum + "<br/>");

// Guessing Game By Anisul Islam.
//Guess a number from 1 to 5.
//Generate a random number between 1 to 5
// if the guess number matches random number, then show message won else lost
// Run the game for 5 times
//Show the number of won and lost.

document.write("<br/> <h4> The Guessing Game !! </h4> <br/>");

var numberOfWon = 0;
var numberOfLost = 0;

for(var x = 1; x <=5; x++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "),10);

    var randomNumber = Math.floor(Math.random()*5) + 1;
    
    if (guessNumber == randomNumber) {
        document.write("<br/>Congratulations!!  You are Wining This Game !! <br/>");
        numberOfWon++;
    }else {
        document.write("<br/> Sorry !! You are Loss This Game, The Random Number was : " + randomNumber + "<br/>");
        numberOfLost++;
    }
}

document.write("<br/> The Number of Won This Game is : " + numberOfWon + "<br/>");
document.write("<br/> The Number of Lost This Game is : " + numberOfLost + "<br>");

// Date Object and date Methods

var date = new Date();
document.write("<br/> The date :" +date + "<br/>");

var year = date.getFullYear();
document.write("<br/> The year is :" + year + "<br/>");

var month = date.getMonth();
document.write("<br/> The month is :" + month + "<br/>");

var currentDate = date.getDate();
document.write("<br/> The date is :" + currentDate + "<br/>");

var currentDay = date.getDay();
document.write("<br/> The day is :" + currentDay + "<br/>");

// The End in here this Javascript Code Previous Code you will find script.js and next Javascript code will find script2.js.






      