var name_list = [];

function alert(message) {
  console.log(message);
}

function buildList() {
  var list = document.getElementById('name-list');

  list.innerHTML = "";

  for (var i = 0; i < name_list.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name_list[i]));
    list.appendChild(li);
  }
}

function saveName() {
  var content = document.getElementById('input-box');

  var result = document.getElementById('name-box');

  result.innerHTML = content.value;

  name_list.push(content.value);

  localStorage.setItem("users", name_list);

  content.value = 'name-box';
}

function removeName(inputBox) {

  inputBox.value = '';


}

function saveUserName() {
  let inputBox = document.getElementById("nameInput");



  let naam = inputBox.value;


  if (naam == "") {
    alert("voeg een naam toe");
  } else {
    fetch("http://localhost:3000/username", {
      method: "POST",
      body: naam,
      headers: {
        "Content-type": "text/plain; charset=UTF-8"

      }
    });

    removeName(inputBox)

    alert("klaar");
  }
}


function myFunction() {
  let popup = document.getElementById("popUp");
  

  let saveButtonClicked = true;


  if (saveButtonClicked > true) {
    console.log('Opgeslagen!');
  } else {
    console.log('');
  }

}
