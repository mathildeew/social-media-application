import * as storage from "../storage/localStorage.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { loginUrl } from "../api/apiUrls.mjs";

export function loginUser() {
  const loginForm = document.querySelector("#loginForm");
  const errorMessage = document.querySelector(".formError");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function loginAPI(url, postContent) {
      try {
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
          errorMessage.style.display = "none";
          window.location.href = "/profile/";
        } else {
          errorMessage.style.display = "block";
        }
      } catch (error) {
        console.log(error);
      }
    }
    loginAPI(loginUrl, postContent);
  });
}
