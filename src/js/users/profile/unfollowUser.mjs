import { fetchOptions } from "../../api/fetchOptions.mjs";
import { unfollowUserUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

export function unfollowUser() {
  const unfollowUserBtn = document.querySelector("#unfollowUser");

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
