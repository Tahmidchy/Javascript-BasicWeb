//Dom Find/get,change,add,or Delete HTML elements
//Create a Html Element

var heading3 = document.createElement("h1");
var text = document.createTextNode("Hello Javascript Learners!");
heading3.appendChild(text);

//attach this element with Mydiv id

var myDiv = document.getElementById("Mydiv");
myDiv.appendChild(heading3);

//remove html elements

var heading2 = document.getElementsByTagName("h1")[1];
Mydiv.removeChild(heading2);

//before adding elements

var heading0 = document.createElement("h1");
var text0 = document.createTextNode(" Hello AI!!");
heading0.appendChild(text0);

var heading2 = document.getElementsByTagName("h1")[0];
Mydiv.insertBefore(heading0,heading2);

// Downwards-QuerySelector / querySelectorAll 1st Rule

const studentList = document.querySelector(".students-list");
const studentA = document.querySelector(".student-a");

//studentsList children ( Downwards - children)

const studentC = studentList.children[2];

// Upwards-parentElement

const studentD = document.querySelector("li");
const studentList1 = studentD.parentElement;

// sideways-nextElementSibling,previousElementSibling (NextElementSibling)

const studentE = document.querySelector("li");
const studentF = studentE.nextElementSibling;
const studentG = studentF.nextElementSibling;

// sideways-nextElementSibling,previousElementSibling (previousElementSibling)

const studentI = document.querySelectorAll("li")[8];
const studentH = studentI.previousElementSibling;

// sideways -parentElement +children + index 

const studentK =document.querySelector("li");
const studentList2 = studentK.parentElement;
const student = studentList2.children[8];

// Downwards-QuerySelector / querySelectorAll 2nd Rule

const studentsList = document.querySelector(".students-list");
const studentB = studentsList.querySelector(".student-b");

// Image Slider by javascript function

// image Array

var photos = ["img/me.png","img/me1.png","img/car.jpg"];
var imgTag = document.querySelector("img");

// image button function create

var count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src= photos[count];
    }
   
}

function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src= photos[count];
    }
}

// Changing Css Style dynamically 




