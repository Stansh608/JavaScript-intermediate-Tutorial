//Day 03
/*Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:
*/
hello=function(){return "Hello World";}
document.write(hello());

//with arrow fxn
hello1=()=>{
    return "Hae there";
}
document.write(hello1());
/*It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
as shown*/
hello3=()=>"Hello World";
document.write("<br>"+hello3());
//An arrow function with a value
hello4=(value)=>{
    return value;
}
document.write("<br>"+hello4(5));
//there's no binding of keyword this in arrow function
/*let see with regular function

With a regular function 'this' represents the object that calls the function
*/
hello5=function(){
    document.getElementById("demo1").innerHTML+=this;
}
window.addEventListener("load",hello5); //returns Window object

document.getElementById("btn").addEventListener("click",hello5);//returns object HTMLInputElement

/*Now with the arrow function
With an arrow function 'this' represents the owner of the function: 
*/
hello6=()=>{
    document.getElementById("demo2").innerHTML+=this;
}
window.addEventListener("load",hello6);//return object window

document.getElementById("btn1").addEventListener("click",hello6);//returns object Window
                                                                                                                                      
/*JavaScript Classes
Use the keyword class to create a class.
Always add a method named constructor():
syntax:
class ClassName {
  constructor() { ... }
*/
 class Person{
     constructor(name,age){this.name=name;this.age=age;
     }
 }
 const p1=new Person('Stan',"62");
 document.write(p1.name);
 
 //Passing the value to the function inside the class

 class Car{
     constructor(name,year){
         this.name=name;
         this.year= year;
     }
         age(g){
             return g-this.year;
         }
     
 }
let myCar=new Car("Volvo",2012);
let date=new Date();
let c_year=date.getFullYear();
document.write("<br>My car is "+ myCar.age(c_year)+" years old");

