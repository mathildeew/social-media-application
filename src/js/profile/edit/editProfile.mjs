import * as storage from "../../storage/localStorage.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { editMediaUrl } from "../../api/apiUrls.mjs";

/**
 * Lets the user edit the avatar and banner
 * @example
 * ```
 * // The content from the update media form is sent to the server
 * // with a PUT request.
 * // The new avatar and banner is stored in local storage.
 * // If the request is successfull the page reloads.
 * editMedia()
 * ```
 */
export function editMedia() {
  const updateForm = document.querySelector("#updateMediaForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    async function editMediaAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      putData["body"] = JSON.stringify(putContent);
      const response = await fetch(url, putData);
      const json = await response.json();
      storage.set("avatar", json.avatar);
      storage.set("banner", json.banner);
      location.reload();
    }
    editMediaAPI(editMediaUrl, putContent);
  });
}
