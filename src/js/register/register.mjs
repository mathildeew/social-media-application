import * as storage from "../storage/localStorage.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { registerUrl } from "../api/apiUrls.mjs";

export function registerUser() {
  const registerForm = document.querySelector("#registerForm");
  const errorMessage = document.querySelector(".formError");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function registerUserAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();

      const name = json.name;
      storage.set("name", name);
      const avatar = json.avatar;
      storage.set("avatar", avatar);
      const banner = json.banner;
      storage.set("banner", banner);
      const accessToken = json.accessToken;
      storage.set("token", accessToken);

      if (response.ok) {
        window.location.href = "/";
        errorMessage.style.display = "none";
      } else {
        errorMessage.style.display = "block";
      }
    }
    registerUserAPI(registerUrl, postContent);
  });
}
