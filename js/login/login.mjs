import { loginUserAPI } from "./loginAPI.mjs";

const loginForm = document.querySelector("#loginForm");
const baseUrl = "https://api.noroff.dev";
const loginUrl = `${baseUrl}/api/v1/social/auth/login`;

loginForm.addEventListener("submit", loginUser);

function loginUser(event) {
  event.preventDefault();

  const userToLogin = {
    email: email.value,
    password: password.value,
  };

  loginUserAPI(loginUrl, userToLogin);
}
