import * as storage from "../storage/localStorage.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { loginUrl } from "../api/apiUrls.mjs";

/**
 * Logs in a registered user if the required field are filled in correctly.
 * @example
 * ```
 * // Sends a POST request to the server.
 * // The profile information, media content and the retrieved access token is stored in local storage.
 * // If the login is successful, the user is sent to the right profile page.
 * loginUser()
 * ```
 */
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
          console.log(json);
        } else {
          errorMessage.style.display = "block";
          console.log(json);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loginAPI(loginUrl, postContent);
  });
}
