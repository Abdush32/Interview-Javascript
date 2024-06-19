let name = "abdush";
 name = "pankaj";
const Id = 12545456;
    //  Id = 12545457;
var age = 20;
    var age = 30;

// console.log(name,Id,age);


// Scope

// Global Scope

let Gscope = "I am Global Scope";

function sayHello(){
    // console.log(Gscope);
}

sayHello();

// Function Scope

function sayFunScope(){
    var Fscope = "I am Function Scope";
    // console.log(Fscope);
}

sayFunScope();


// Block Scope


if(true){
    var Bscope = "I am Block Scope";
}
// console.log(Bscope);




function sayMe(){
    var ab = "powder";
    console.log(ab);
}
// console.log(ab,"LOG PART");
// sayMe();

if(true){
    var cd = "cream";
}
var cd = "creamming";
// console.log(cd);

// console.log(2+4+"6");

let pre = 5;
let res = pre++;
//  console.log(res);
// console.log(pre);

let cooler = "Hitachi";
let Ac = cooler;
Ac = "Blue Star";
//  console.log(cooler);
// console.log(Ac);


let city = {
    name:"Delhi",
    country:"India"
}

let newCity = city;
newCity.name = "Mumbai";
console.log(newCity.name);
console.log(city.name);