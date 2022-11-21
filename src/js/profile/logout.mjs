export function logoutUser() {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", (event) => {
    localStorage.clear();
    window.location = "/";
  });
}
