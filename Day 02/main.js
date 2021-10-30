//forEach() calls the function once for each array element
const number=[40,5,8,9,24];
let txt="";
number.forEach(myFunction);

document.getElementById("demo").innerHTML=txt;
//the forEach function takes 3 arguements.
//but you can use one eg value only

function myFunction(value,index,array){
	txt+=value+"<br>";
}

/*The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
*/ 
 const arr1=[34,56,6,77,8];
 const arr2=arr1.map(myFunction1);
 function myFunction1( value){
return value**2;
 }
 document.write(arr2);


 /*Array.filter()
The filter() method creates a new array with array elements that passes a test.
*/
const arr3=arr1.filter(myFunction2);
function myFunction2(value){
	return value%2==0;
}
 document.write("<br>"+arr3);

 /*
 Array.reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value
*/
//this example reduce an array into the total sum of its values
