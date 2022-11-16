import { loginUrl } from "../api/apiUrl.mjs";
import { loginUserAPI } from "./loginAPI.mjs";

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", loginUser);

function loginUser(event) {
  event.preventDefault();

  const userToLogin = {
    email: email.value,
    password: password.value,
  };

  loginUserAPI(loginUrl, userToLogin);
}
