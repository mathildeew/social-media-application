import * as storage from "../storage/localStorage.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { loginUrl } from "../api/apiUrls.mjs";

export function loginUser() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const errorMessage = document.querySelector(".formError");

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function loginAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();

      const name = json.name;
      storage.set("name", name);
      const avatar = json.avatar;
      storage.set("avatar", avatar);
      const accessToken = json.accessToken;
      storage.set("token", accessToken);
      console.log(json);
      // if (json.errors[0].message === "Invalid email or password") {
      //   errorMessage.style.display = "block";
      // } else {
      //   errorMessage.style.display = "none";
      // }
      window.location.href = "/profile/";
    }
    loginAPI(loginUrl, postContent);
  });
}
