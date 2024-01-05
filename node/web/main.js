var name_list = [];

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
