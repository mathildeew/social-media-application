import { fetchOptions } from "../api/fetchOptions.mjs";
import { commentPostUrl } from "../api/apiUrls.mjs";

// Get params to link
const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

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
      console.log(json);
      // location.reload();
    }
    commentPostAPI(commentPostUrl, postContent);
  });
}