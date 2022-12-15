import * as storage from "../../storage/localStorage.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { unfollowUserUrl } from "../../api/apiUrls.mjs";

/**
 * Lets the logged in user unfollow another user if already following.
 * @example
 * ```
 * // When the unfollow button is clicked a PUT request is sent to the server.
 * // The page is reloaded and removes the logged in user under following section.
 * // The button changes to "Follow".
 * followUser();
 * ```
 */
export function unfollowUser() {
  const unfollowUserBtn = document.querySelector(".unfollowUser");

  unfollowUserBtn.addEventListener("click", (event) => {
    async function unfollowUserAPI(url) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      window.location.reload();
    }
    unfollowUserAPI(unfollowUserUrl);
  });
}
