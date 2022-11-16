import { registerUrl } from "../api/apiUrl.mjs";
import { registerUserAPI } from "./registerAPi.mjs";

const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const userToRegister = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  registerUserAPI(registerUrl, userToRegister);
}
