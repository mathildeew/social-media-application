import { fetchOptions } from "../api/fetchOptions.mjs";
import { singlePostUrl } from "../api/apiUrls.mjs";

/**
 * Lets the user edit the post.
 * @example
 * ```
 * // The new content (title, image and bodytext) is sent to the server by a PUT request.
 * // If the request is successfull the page is reloaded and displays the updated post.
 * editPost();
 * ```
 */
export function editPost() {
  const updateForm = document.querySelector("#updatePostForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    async function editPostAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      putData["body"] = JSON.stringify(putContent);
      const response = await fetch(url, putData);
      const json = await response.json();
      location.reload();
    }
    editPostAPI(singlePostUrl, putContent);
  });
}
