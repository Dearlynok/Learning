async function getUsers() {
  const response = await fetch("http://127.0.0.1:3000/users");

  const result = await response.json();

  const users = JSON.parse(result)

  var list = document.getElementById('name-list')

  for (var i = 0; i < users.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(users[i]));
    list.appendChild(li);
  }
}

async function removeUser() {
  fetch("http://127.0.0.1:3000/username", {
    method: "DELETE"
  })
}

getUsers();


