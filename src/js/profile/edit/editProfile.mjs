import * as storage from "../../storage/localStorage.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { editMediaUrl } from "../../api/apiUrls.mjs";

/**
 * Update avatar and banner
 */
export function editMedia() {
  const updateForm = document.querySelector("#updateMediaForm");
  const error = document.querySelector(".errorMessage");

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

      if (response.ok) {
        storage.set("avatar", json.avatar);
        storage.set("banner", json.banner);
        location.reload();
      } else {
        const error = document.querySelector(".errorMessage");
        error.style.display = "inline";
      }
    }
    editMediaAPI(editMediaUrl, putContent);
  });
}
