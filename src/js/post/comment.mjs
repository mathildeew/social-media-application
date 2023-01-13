import { fetchOptions } from "../api/fetchOptions.mjs";
import { commentPostUrl } from "../api/apiUrls.mjs";

/**
 * Lets user comment on posts.
 * @example
 * ```
 * // The comments contents is sent to the server by a POST request.
 * // If the request is successfull the page reloads and displays the comment.
 * commentPost()
 * ```
 */
export function commentPost() {
  const commentForm = document.querySelector("#makeCommentForm");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function commentPostAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();
      location.reload();
    }
    commentPostAPI(commentPostUrl, postContent);
  });
}
