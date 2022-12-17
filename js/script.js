alert('Hello! Javascript Learner!!');

//Variables programming functions
 var names ='javascript programming Languages which is using Machine Learning Testing';
document.write(names +'<br/>');
names = 'Python programming Languages which is using AI testing';
document.write(names);

var School_name;
var University_name;

School_name = 'CPA Boys High School';
University_name = 'Southern University Bangladesh';

document.write('<br/>Your School name is ' +School_name + ' Also Your university name ' + University_name);

//Number Method| to fixed|to precision|typeof| 
//typeof Method

var num1 = "20";
console.log(typeof(num1));
var num2 = 20;
console.log(typeof(num2));

//tostring Method

num3 = 50;
num4 = toString(num3);
console.log(typeof(num4));

//parseInteger Method

num5 = "50";
num6 = parseInt(num5);
console.log(typeof(num6));

//parseFloat Method

num7 = "50.50";
num8 = parseFloat(num7);
console.log(typeof(num8));

//to fixed Method

var num10 = 2.5986;
console.log(num10.toFixed(2));

//to precision Method

var num11 = 5.693;
console.log(num11.toPrecision(1));

//Number Method 

console.log(Number("50.50"));
console.log(typeof(Number("12")));
console.log(Number(true));
console.log(Number(false));

//How to add or concatenate string 

var FirstName = "A T M Mustafa Masud";
var LastName = "Chowdhury";

document.write("<br/>My name is " + FirstName + " "+ LastName);

var num11 = 30;
var num12 = 40;
document.write("<br/>smallest Number is " +num11 + " Biggest Number is " + num12);

//Library function for string  

var text = "Chittagong";
var len = text.length;
document.write("<br/> Chittagong word Number of character is : " + len);

var text1 = prompt("Enter your text here :");
var len1 = text1.length;
document.write("<br/> Number of character is : " + len1);

var country = "Germany";
document.write("<br/>" + country.charAt(0));

var country1 = "Finland";
country_name = country1.toUpperCase();
document.write("<br/> The country Name is : " + country_name);

var country2 = "India";
country_name = country2.toLowerCase();
document.write("<br/> The Country name is : " + country_name);

var country3 = "United State America";
var text2 = "  is Diplomatic friends of  Bangladesh.";
document.write("<br/>" + country3.concat(text2));

var country4 = "Germany";
text3 = country4.slice(0, 3);
document.write("<br/> You are slices word is : " + text3);

// task2 : Library function for string

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + lastName;
document.write("<br/> My Full name is : " +fullName);

document.write("<br/> Length of fullName: " +fullName.length);
document.write("<br/> My name is Upper case : "+fullName.toUpperCase());
document.write("<br/> print 2nd position from the full name :" +fullName.charAt(2));

//Arithmetic operator -> +(Addition), -(Subtract), *(Multiplication), /(Division), %(Modulus) , ** (Exponent) , ++(increment) ,--(decrement),

var x1 = 50;
var y1 = 60;
z1 = x1 + y1;

document.write("<br/> The addition operator is :" + z1);

var x2 = 60;
var y2 = 50;
z2 =x2 - y2;

document.write("<br/> The Subtract operator is :" + z2);

var x3 = 60;
var y3 = 50;
z3 = x3 * y3;

document.write("<br/> The Multiplication operator is :" + z3);

var x4 = 60;
var y4 = 6;
z4 = x4 / y4;

document.write("<br/> The Division operator is :" + z4);

var x5 = 70;
var y5 = 50;
z5 = x5 % y5;

document.write("<br/> The Modulus operator is :" + z5);

var x6 = 10;
var y6 = 4;
z6 = x6 ** y6;

document.write("<br/> The Exponent operator is :" + z6);

var x7 = 10;

z7 = ++x7;

document.write("<br/> The pre-increment operator is :" + z7);

var x8 = 10;

z8 = x8++;

document.write("<br/> The post-increment operator is :" + z8);

var x9 = 15;

z9 = --x9;

document.write("<br/> The pre- decrement operator is :" + z9);

var x10 = 18;

z10 = x10--;

document.write("<br/> The post-decrement operator is :" + z10);

//Assignment operator is - > += , -= , *= , /= , %= , ++=, --=,

var b1 = 20;

b1 += 20;

document.write("<br/> The Assignment operator += is :" + b1);

var b2 = 20;

b2 -= 10;

document.write("<br/> The Assignment operator -= is :" + b2);

var b3 = 25;

b3 *= 2;

document.write("<br/> The Assignment operator *= is :" + b3);

var b4 = 30;

b4 /= 10;

document.write("<br/> The Assignment operator /= is :" + b4);

var b5 = 40;

b5 %= 4;

document.write("<br/> The Assignment operator %= is :" + b5);

var b6 = 50;

b6 **= 5;

document.write("<br/> The Assignment operator **= is :" + b6);

//Arithmetic operator using for Make a Calculator  

document.write("<br/> The Arithmetic operator using for make a calculator !<br/>");

var num11 = prompt(" Enter Your First Number : ");

document.write("<br/> You Enter First Number is :" + num11);

var num12 = prompt(" Enter Your Second Number : ");

document.write("<br/> You Enter Second Number is :" + num12 +"<br/>");

num11 = parseInt(num11, 10);
num12 = parseInt(num12, 10);

var sum, sub;

sum = num11 + num12;

document.write(" The Addition result is :" + sum + "<br/>");

sub = num11 - num12;

document.write(" The Subtraction result is :" + sub + "<br/>");

document.write(" Anisul Islam Task no - 3 : <br/>");

var num13 = prompt(" Enter Your First number for task 3 :");
document.write("<br/> You Enter first Number is :" + num13 + "<br/>");

var num14 = prompt("Enter Your Second number for task 3 :");
document.write("<br/> You Enter Second Number is :" + num14 + "<br/>");

num13 = parseInt(num13, 10);
num14 = parseInt(num14, 10);
var sum, sub, mul, div, rem;

sum = num13 + num14;
document.write( num14 + "+" + num14 + "=" + sum + "<br/>");

sub = num13 - num14;
document.write(num13 + "-" + num14 + "=" + sub + "<br/>");

mul = num13 * num14;
document.write(num13 + "*" + num14 + "=" + mul + "<br/>");

div = num13 / num14;
document.write(num13 + "/" + num14 + "=" + div + "<br/>");

rem = num13 % num14;
document.write(num13 + "%" + num14 + "=" + rem + "<br/>");

document.write(" Area of version shapes <br/>");

var base = prompt("Enter the base number :");
document.write(" The Rectangle base number is :" + base +"<br/>");

var height = prompt(" Enter the Height number :");
document.write(" The Rectangle Height number is :" + height +"<br/>");

base = parseInt(base, 10);
height = parseInt(height, 10);

var area = base * height;

document.write(" The Rectangle Area is :" + area + "<br/>");

//To make temperature converter.

document.write("<br/> Temperature Converter : <br/>");

var fahrenheit=parseInt(prompt("Please Enter your Fahrenheit!"),10);
document.write("Your Enter Fahrenheit Temperature is : " + fahrenheit + "<br/>");

 var formula=(fahrenheit-32) *5/9;
 document.write("celsius :" + formula);

var Celsius=parseInt(prompt("Please Enter  your celsius!"),10);
document.write("<br/> Your Enter Celsius Temperature is: " + Celsius +"<br/>" );

var formula=(Celsius*9/5) +32;
document.write("Fahrenheit :" + formula);

//Relational and Logical Operators 
//Relational operator is : ->, >, >=, <=, ==, ===, !=, !==,
//logical operator is : ->, &&, ||, ! 

document.write("<br/>Relational operator is : ->, >, >=, <=, ==, ===, !=, !== <br/>.");

var num15 = parseInt(prompt(" Enter your first number for relational operators :"),10);
document.write(" You enter first number is : " + num15 + "<br/>");

var num16 = parseInt(prompt(" Enter your second number for relational operators :"),10);
document.write(" You enter second number is :" + num16 +"<br/>");

var result1 = num15<num16;
var result2 = num15>num16;
var result3 = num15<=num16;
var result4 = num15>=num16;
var result5 = num15==num16;
var result6 = num15===num16;
var result7 = num15!=num16;
var result8 = num15!==num16;

document.write(num15 + "<" + num16 + "=" + result1 +"<br/>");
document.write(num15 + ">" + num16 + "=" + result2 +"<br/>");
document.write(num15 + "<=" + num16 + "=" + result3 + "<br/>");
document.write(num15 + ">=" + num16 + "=" + result4 + "<br/>");
document.write(num15 + "==" + num16 + "=" + result5 + "<br/>");
document.write(num15 + "===" + num16 + "=" + result6 + "<br/>");
document.write(num15 + "!=" + num16 + "=" + result7 + "<br/>");
document.write(num15 + "!==" + num16 + "=" + result8 + "<br/>");

console.log(num15<num16 && num16< num15);
console.log(num15<num16 || num15>num16);

//Control Statements (if,else if,else,switch,) Loop Statements(for,while,do while)

//program are odd and even numbers findings 

var numbers = parseInt(prompt(" Enter your numbers i will help you Find this numbers are odd or even :"),10);
document.write("<br/> You enter this number: " + numbers + "<br/>");

if (numbers % 2 == 0){
    document.write("<br/> Your number is Even! <br/>");
}else{
    document.write(" Your number is odd! <br/>");
};

// Task 4 Anisul Islam  

document.write(" Finding Your Grade program... Task Number -4 <br/>");

var Grade = parseInt(prompt("Enter Your Mark : "),10);
document.write(" You Enter Your Marks are : " + Grade +"<br/>");

if(Grade >= 80 && Grade <= 100){
    document.write(" <br/> Congratulations! You Got A+!! Good luck in this and all future endeavors. <br/>");
}else if(Grade >= 70 && Grade <= 79){
    document.write(" <br/> Congratulations! You Got A !! Good luck in this and all future endeavors.Try to More Hardworking for get A+!! <br/>");
}else if(Grade >= 60 && Grade <= 69){
    document.write(" <br/> Congratulations! You Got A- !! Good luck in this and all future endeavors.Try to More Hardworking for get A+!!<br/>");
}else if(Grade >= 50 && Grade <= 59){
    document.write(" <br/> Congratulations! You Got A- !! Good luck in this and all future endeavors.Try to More Hardworking for get A+!!<br/>");
}else if(Grade >= 40 && Grade <= 49){
    document.write(" <br/> Congratulations! You Got C !! Good luck in this and all future endeavors.Try to More Hardworking for get A+!!<br/>");
}else if(Grade >= 33 && Grade <= 39){
    document.write(" <br/> Congratulations! You Got D !! Good luck in this and all future endeavors.Try to More Hardworking for get A+!!<br/>");
}else{
    document.write("<br/> I am extremely sorry !! You are Failed This Exam!! Try more Hardworking never give up!!<br/> Always Remember '[Success represents the 1% of your work which results from the 99% that called failure !!...].<br/>'");
};

//programs using logical operators 
// Vowel and consonant operators   

document.write("<br/> Find the Vowel and Consonant from letters by using logical operators </br>");

var letter = prompt(" Enter a letter :");
document.write("<br/> Your enter latter is: " + letter + "<br/>");

letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    document.write("<br/> This letter is Vowel!!");
}else{
    document.write("<br/> This letter is Consonant!! <br/>");
};

//Digit Spelling by using Switch
//0- Zero, 1 - One, ..... 9 - Nine, 10 - Not a Valid Digit  
// Switch, Case,break,default.

document.write("<br/> Using Switch for Solving Digit Spelling problem !! <br/>");

var Digit = prompt(" Enter Any Digit Number : ");
document.write("<br/> Your Enter Digit Number is : " + Digit + "<br/>");

switch(Digit){
    case "0":
        document.write("Zero <br/>");
        break;
    case "1":
        document.write("One <br/>");
        break;
    case "2":
        document.write("Two <br/>");
        break;
    case "3":
        document.write("Three <br/>");
        break;
    case "4":
        document.write("Four <br/>");
        break;
    case "5":
        document.write("Five <br/>");
        break;
    case "6":
        document.write("Six <br/>");
        break;
    case "7":
        document.write("Seven <br/>");
        break;
    case "8":
        document.write("Eight <br/>");
        break;
    case "9":
        document.write("Night <br/>");
        break;
    default:
        document.write(" Not a Valid Digit <br/>");

};

// Task - 5 Input a Latter and Check Vowel and Consonant by using Switch.

document.write("<br/> The Task-5 : Input a Latter and Check Vowel and Consonant by using Switch.<br/>");

var Letter = prompt('enter any Latter :');
Letter = Letter.toLowerCase();
document.write(" Your Enter Latter is :" + Letter + "<br/>");

switch(Letter){
    case "a":
        document.write("<br/> Your latter is Vowel !! <br/>");
        break;
        case "e":
        document.write("<br/> Your latter is Vowel !! <br/>");
        break;
        case "i":
        document.write("<br/> Your latter is Vowel !! <br/>");
        break;
        case "o":
        document.write("<br/> Your latter is Vowel !! <br/>");
        break;
        case "u":
        document.write("<br/> Your latter is Vowel !! <br/>");
        break;
    default:
        document.write("<br/> Your latter is Consonant ! <br/>");
};

// End 1st part javascript Code and 2nd part javascript code find the file name script1.js
 












