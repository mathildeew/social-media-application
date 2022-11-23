import { loginUrl } from "../api/apiUrls.mjs";
import { loginUserAPI } from "./loginAPI.mjs";

export function loginUser() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    loginUserAPI(loginUrl, profile);
    // window.location.href = "/profile/";
  });
}
