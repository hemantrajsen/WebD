console.log("This is my first javascript program!")


/* var h = "Hemant";
   console.log(h)
   console.log(typeof h, " & " ,h+" Raj Sen ")
*/

/* 'var' is a global variable so it is not preffered to use it often
instead we use 'let' and 'const' to assign. Because let and const are block level variables!
they can store any type of variables without specifying the type!
*/

// ';' is optional in javascript

// let a = 21
// console.log(a)

// const p = true
// console.log(p)


/*
PRIMITIVE DATA TYPES AND OBJECTS ->

'String' , 'Number' , 'Boolean' , 'BigInt' , 'Symbol' , 'Undefined' , 'Null'  are all the primitive type data type 

there are objects in javascript 
objects are like structure in c/c++ on drugs!
 let obj = {
     "name" : "hemant",
     "age": 21
 }
 console.log(obj)
 obj.clg = "juet"
 console.log(obj)
 obj.age = 20
 console.log(obj)

 let obj = 5;
 console.log(obj) // cannot update the object after creation and assigned!

*/

/*
LOOPS->

for-in loop
 let e = {
      name:"Hemant",
      role: "CEO"
 }
 for (const f in e) {
     console.log(f)
 }

 //for-of loop
 for (const element of "Hemant") {
     console.log(element)
 }

 else for , do-while , while are the default loops in Javascript!
*/


//Functions-->

/* function for Calculator->
 function calculator(a,b,op) {

     if(op == 'sum' || op =='+')
      return a+b;


     else if(op == 'sub' || op =='-')
     return a-b;


     else if(op == 'multi' || op =='*')
     return a*b;

     else if(op == 'div' || op =='/')
     return a/b;

     else if(op == 'expo' || op == '**')
     return a**b;

   return null;
 }

 const prompt = require('prompt-sync')();
 const a = Number(prompt("Enter the value of a: "));
 const b = Number(prompt("Enter the value of b: "));
 const op = prompt("Enter the operator: ");

 console.log(a ,op, b);

 result = calculator(a,b,op);

 console.log(result);
*/

/*
Function for Faulty Calculator which gives wrong output only 10% of the time-->

let a = Number(prompt("Enter the value of a: "));
let op = prompt("Enter the operator: ");
let b = Number(prompt("Enter the value of b: "));


let random = Math.random();
console.log(random);

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random > 0.1){
    console.log("The result is :", a , op , b);
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
} 
else{
    op = obj[op]
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}
    //This will work only on browser not in Node.js
*/



