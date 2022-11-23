import { singlePostUrl } from "../api/apiUrls.mjs";
import * as storage from "../storage/localStorage.mjs";
import { deleteAPI } from "../api/APIcalls/deleteAPI.mjs";

export function deletePost() {
  const deleteBtn = document.querySelector("#delete");

  deleteBtn.addEventListener("click", (event) => {
    deleteAPI(singlePostUrl);
    console.log("hei");
  });
}
