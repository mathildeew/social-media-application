import { fetchOptions } from "../../api/fetchOptions.mjs";
import { singlePostUrl } from "../../api/apiUrls.mjs";

export function deletePost() {
  const deleteBtn = document.querySelector("#delete");

  deleteBtn.addEventListener("click", (event) => {
    async function deletePostAPI(url) {
      event.preventDefault();
      const [getData, postData, putData, deleteData] = fetchOptions;

      const response = await fetch(url, deleteData);
      const json = await response.json();
      window.location.href = "/profile/";
    }
    deletePostAPI(singlePostUrl);
  });
}
