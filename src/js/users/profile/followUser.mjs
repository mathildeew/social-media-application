import { fetchOptions } from "../../api/fetchOptions.mjs";
import { followUserUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

/**
 * Lets the logged in user follow another user
 * @example
 * ```
 * // When the follow button is clicked a PUT request is sent to the server.
 * // The page is reloaded and displays the logged in user under followers.
 * // The button changes to "Unfollow".
 * followUser();
 * ```
 */
export function followUser() {
  const followUserBtn = document.querySelector(".followUser");

  followUserBtn.addEventListener("click", (event) => {
    async function followUserAPI(url) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      window.location.reload();
    }
    followUserAPI(followUserUrl);
  });
}
