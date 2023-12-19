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
  name = newName;
  console.log(name);
};

function birthday() {
  age = age + 1;

  printName();
}

function saveUserName() {
  let val = document.getElementById("nameInput");

  name = val.value;

  fetch("http://127.0.0.1:3000/username", {
    method: "POST",
    body: name,
    headers: {
      "Content-type": "text/plain; charset=UTF-8"
    }
  })
}



