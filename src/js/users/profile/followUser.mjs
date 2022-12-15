import * as storage from "../../storage/localStorage.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { followUserUrl } from "../../api/apiUrls.mjs";

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
