// DOM -> Document Object Model
// Using DOM We can Find / get, change, add, or delete HTML elements.

// How to find HTML Elements 
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()


// finding element by ID

var h2 = document.getElementById("heading2");
console.log(h2);

// Finding element by tagName

var h1 = document.getElementsByTagName("h1");
console.log(h1);

// Finding element by className

var p = document.getElementsByClassName("para1");
console.log(p);

// Finding element by querySelector()

var q1 = document.querySelector("#para2");
console.log(q1);

var q2 = document.querySelector(".para3");
console.log(q2);

document.querySelector(".para5").innerHTML= "The winner is The Brazil!";

document.querySelector("a").innerHTML= "Visit Github for code";

document.querySelector("li a").innerHTML= "BRAZIL";

document.querySelector(".my-div a").innerHTML= "Contact me";

//finding element by querySelectorAll

var q4 = document.querySelectorAll(".para4");
console.log(q4);


// Event Handler to onclick event function

function myMessage(){
    alert("Brazil is winner yesterday Match!!");
}

function myMessage1(){
    alert("I am Bangladeshi");
}

function myMessage2(){
    var myVar = document.querySelector("#button1");
    myVar.innerHTML = "You have clicked on button1";
}

function myMessage3(){
    var MyVar1 = document.querySelector("#button1");
    MyVar1.innerHTML = "You have clicked on Button2";
}

var myVar = document.querySelector("#myImageId");
function myPicture1(){
    myVar.src = "img/me.png";
}

function myPicture2(){
    myVar.src = "img/me1.png";
}

// Try New Javascript file previous code find Script,script1,script2.js Next code find script3.js

