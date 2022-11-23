import { singlePostUrl } from "../api/apiUrls.mjs";
import * as storage from "../storage/localStorage.mjs";

export function deletePost() {
  const deleteBtn = document.querySelector("#delete");

  deleteBtn.addEventListener("click", (event) => {
    deletePostAPI(singlePostUrl);
    console.log("hei");
  });

  async function deletePostAPI(url) {
    try {
      const token = storage.get("token");

      const postData = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
}
