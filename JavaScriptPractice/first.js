console.log("Hi, I am Adnan !!!!!");

let myName = "Adnan";
console.log(myName);

let age = 22;
let radius = 55.1;
let isFollow = true;

let x = null;
let y = undefined;

console.log(age);
console.log(radius);
console.log(isFollow);
console.log(x);
console.log(y);
console.log(age+1);


const pi = 3.14;
console.log(pi);

let num;
console.log(num);
num = 18;
console.log(num);

const student = {
    stuName : "Adnan",
    ageOfStu : 21,
    cgpa : 8.1,
    isPass : true
};

console.log(student);

console.log(student["stuName"]);
console.log(student["ageOfStu"]);
console.log(student["cgpa"]);
console.log(student["isPass"]);

console.log(student.stuName);
console.log(student.ageOfStu);
console.log(student.cgpa);
console.log(student.isPass);

student["ageOfStu"] = student["ageOfStu"] + 1;
console.log(student["ageOfStu"]);



const product = {
    productName : "Pen",
    rating : 4,
    offer : 15,
    price : 250,
    isDealActive : true
};

console.log(product);

let num1 = 20;
let num2 = 10;

console.log("Number1 = ", num1, " and Number2 = ", num2);
console.log("Num1 + Num2 = " , num1+num2);
console.log("Num1 - Num2 = " , num1-num2);
console.log("Num1 * Num2 = " , num1*num2);
console.log("Num1 / Num2 = " , num1/num2);
console.log("Num1 % Num2 = " , num1%num2);


console.log("number1 == number1 : ", num1 == num1);
console.log("number1 == number2 : ", num1 == num2);
console.log("number1 != number2 : ", num1 != num2);

// conditional statement

let myAge = 21;

if (myAge >= 18){
    console.log("You can vote");
}
if (myAge < 18){
    console.log("You can not vote");
}

if (myAge >= 18){
    console.log("You can vote");
}else{
    console.log("You can not vote");
}



let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

if(mode === "dark"){
    color = "black";
}else{
    color = "white";
}

console.log(color);


// one time popup

// alert("Hi guys !"); 



// this will take input also

// let toPrint = prompt("Hi adnan input what you want to print");
// console.log(toPrint);



// to check multiple of 5 using prompt

// let inputNumber = prompt("enter an number");
// if(inputNumber % 5 === 0){
//     console.log(inputNumber, "is a multiple of 5")
// }else{
//     console.log(inputNumber, "is not a multiple of 5")
// }


// loop

for(let i=0; i<=5; i++){
    console.log("Hi my name is Adnan");
}