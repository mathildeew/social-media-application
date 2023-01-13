import { fetchOptions } from "../api/fetchOptions.mjs";
import { registerUrl } from "../api/apiUrls.mjs";

const registerBtn = document.querySelector("#registerBtn");
const loader = document.querySelector(".regLoader");

/**
 * Registers a new user if the required field are filled in correctly.
 * @example
 * ```
 * // Sends the form content to the server by a POST request.
 * // The profile information, media content and the retrived access token is stored in local storage.
 * // If the registration is successful, the user is sent back to log in page.
 * registerUser();
 * ```
 */
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

      if (response.ok) {
        loader.style.display = "inline-block";
        registerBtn.innerHTML = `
                                  Profile created
                                  <i class="bi bi-check-lg regCheck"></i>
                                `;
        setTimeout(registerResponse, 1500);
        console.log(json);
        errorMessage.style.display = "none";
      } else {
        errorMessage.style.display = "block";
      }
    }
    registerUserAPI(registerUrl, postContent);
  });
}

function registerResponse() {
  window.location.href = "/";
}
