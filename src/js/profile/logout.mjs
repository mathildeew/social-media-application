import * as storage from "../storage/localStorage.mjs";
const token = storage.get("token");

export function logoutUser() {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", (event) => {
    localStorage.clear();
    window.location = "/";
  });
}

export function automaticLogout() {
  if (token === undefined || token === null || token === "") {
    window.location.href = "/";
  }
}
