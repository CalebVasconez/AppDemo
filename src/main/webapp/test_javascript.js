// Comment. The computer ignores this
/*
all
the
lines
ignored
 */
console.log("Hello there World!");

// ES 5
var x1 = 1;

// ES 6
let x2 = 1;
const x3 = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variableOne + " - variableTwo: " + variableTwo);

let variableThree = variableOne + variableTwo;
variableThree++;
console.log(variableThree);

function addNumbers(a, b) {
    return a + b;
}

console.log("Add numbers: " + addNumbers(22, 32));

x = addNumbers(5, 6)

let otherFunction = addNumbers;
x = otherFunction(22,56);
console.log("x: " + x);

// JSON
let personA = {
                name: "Caleb",
                email: "caleb.vasconez@my.simpson.edu"
              };

console.log(personA);
console.log(personA.name)
console.log(personA['name']);

// ES6 class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullName() {
        return this.name + " " + this.email;
    }
}
let personB = new PersonB();
personB.name = "Mary";
personB.email = "mary.mary@simpson.edu";
console.log(personB);

// ES5 class
var personD = {
    firstName: "Caleb",
    lastName: "Vasconez",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
}
console.log(personD.fullName());

// Loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

var colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

var personF = {name: "Caleb", email: "caleb.vasconez@my.simpson.edu"};

for (let field in personF){
    console.log(field + " = " + personF[field]);
}

let a = 5;
let b = 6;
if(a == b) {
    console.log("a = b");
}

a = "Caleb";
b = "Caleb";

if(a === b){
    console.log("a = b");
}

a = 5;
b = 6;
let c = a + b;

console.log(c);

c = a.toString() + b.toString();
console.log(c);

a = "5";
b = "6";
c = Number(a) + Number(b);
console.log(c);

