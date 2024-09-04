// alert("Hi, Guys I am an alert msg written by Adnan");

// console.log("Hi my name is Adnan");

// it doesnt matter from where you call the function

printMsg();

function printMsg() {
  console.log("Hi my name is Adnan");
}

printMsg();

function outputName(name) {
  console.log("This is a parameterized method made by", name);
}

outputName("Adnan");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(2, 3);

add("Adnan", " Khan");

// DOM document object model

console.log(document);
