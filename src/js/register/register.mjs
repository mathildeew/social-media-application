import { registerUrl } from "../api/apiUrls.mjs";
import { registerUserAPI } from "./registerAPI.mjs";

export function registerUser() {
  const registerForm = document.querySelector("#registerForm");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    console.log(form.password.value);
    registerUserAPI(registerUrl, profile);
  });
}
