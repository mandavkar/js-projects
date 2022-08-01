//Variables
//for ways to decler variables Var, Let, Const.


//Assignment Operators
// x += y (x = x + y)
/*var a = 4;
var b = 6;
a += b;
console.log(a)

// x -= y (x = x - y)
var a = 4;
var b = 6;
a -= b;
console.log(a)

// x *= y (x = x * y)
var a = 4;
var b = 6;
a *= b;
console.log(a)

// x /= y (x = x / y)
var a = 8;
var b = 4;
a /= b;
console.log(a)

// x **= y (x = x ** y)
var a = 4;
var b = 6;
a **= b;
console.log(a)



//String
let text = "akshatamandavkar"
//console.log(text.length)//to know the lenght of string

let ab = "we are the so-called \"Vikings\" from the north"*/

//Sets
// in javascript set is a collection of unique values
//making set
const ordersSet = new Set([
    "hide&sick", "good day", "oreo", "little heart", "dark fantasy"
]);
console.log(ordersSet);

//size of the sets
console.log(ordersSet.size);

//HAS tell elements are inculde or not
console.log(ordersSet.has("dark fantasy"));
console.log(ordersSet.has("dairy milk"));

//ADD (adding the element)
ordersSet.add("black bourbon");
console.log(ordersSet);

//DELETE 
ordersSet.delete("good day");
console.log(ordersSet);

//Looping
for (const order of ordersSet) console.log(order);

//using Sets (sets are use remove duplicate value of arrays)
const staff = ["workers", "manger", "superviser", "workers", "accountant", "chef"];
const factorystaff = [...new Set(staff)];
console.log(factorystaff);

//to know  unique positions in set
console.log(
    new Set(["workers", "manger", "superviser", "workers", "accountant", "chef"]).size
)


