let name = "abdush";
name = "Abdush Samad ALi";
const nationalId = 1156456440;
// nationalId = 1156456441;
var age = 20;
age = 22;
age = 21;
photo = "photo.jpg";
// console.table([name,nationalId,age,photo]);

// SCOPE OF VARIABLES
// Global Scope
let sammy = "Sammy";

function sayHello(){
    // console.log(sammy);
}
sayHello();

// Fuction Scope


function sayMyname(){
    var keyboard = "Frontech";
    console.log(keyboard);
}
sayMyname();
console.log(keyboard);

// Block Scope

if(true){
    const mouse = "Logitech";
}
// console.log(mouse);