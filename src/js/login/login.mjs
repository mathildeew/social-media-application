import { loginUrl } from "../api/apiUrls.mjs";
import { postAPI } from "../api/APIcalls/postAPI.mjs";

export function loginUser() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    postAPI(loginUrl, profile);
  });
}
