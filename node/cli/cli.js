var name = "Dearly";

var age = 28;

var man = true;

var list = [];

function addUser(name) {
  list.push(name);
}

// Print name to screen
function printName() {
  message = name + " is " + age + " years old";
  msgEl = document.getElementById("user-message");
  msgEl.innerHTML = message;
}

printName();

function ChangeName(newName) {
 let name = newName;
  console.log(name);
};

function birthday() {
  age = age + 1;

  printName();
}





