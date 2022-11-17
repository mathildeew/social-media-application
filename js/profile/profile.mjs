function displayUsername() {
  const username = document.querySelector(".username");
  const name = localStorage.getItem("name");
  console.log(name);
  username.innerHTML = `@${name}`;
}

displayUsername();
