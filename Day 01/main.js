//................Day 01..........
//Js Form Validation
function validateForm(){
    var in_text=document.forms["myform"]["fname"].value;
    if(in_text==null || in_text==""){
        alert("Name must be Filled ");
        return false;
    }
}
//this can be done automatically by indicating required on field on html input 

/*Data Validation
Data validation is the process of ensuring that computer input is clean, correct, and useful.

Typical validation tasks are:
has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?

Server side validation is performed by a web server, after input has been sent to the server.
Client side validation is performed by a web browser, before input is sent to a web server.

JavaScript Validation API
Constraint Validation DOM Methods:
. checkValidity()	- Returns true if an input element contains valid data.
. setCustomValidity()	- Sets the validationMessage property of an input element.
*/
//using checkValidity()
function validCheck(){
    var input01=document.getElementById("id01");
    document.getElementById("demo").innerHTML="";

    if(input01.checkValidity()==false){
        document.getElementById("demo").innerHTML=
        input01.validationmessage;
    }
}

//using setCustomValidity()

/*
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If y is an object, the following statement will not create a copy of y:

var x = y;  // This will not create a copy of y.
The object x is not a copy of y. It is y. Both x and y points to the same object.

Any changes to y will also change x, because x and y are the same object.

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;           // This will change both x.age and person.age
*/

//Javasript for...in loop
var car={speed:50,braking:"emergent",type:"Audi"};
var i;
var txt="";
for(i in car){
    txt +=car[i]+" ";
}
document.write("<br>"+txt);

//Add new properties to an object
car.wheels="four";
for(i in car){
document.write("<br>"+car[i]);}

//deleting a property in the object--use delete keyword
delete car.speed;
for(i in car){
    document.write("<br>"+car[i]);}
    

