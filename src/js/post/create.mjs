import { fetchOptions } from "../api/fetchOptions.mjs";
import { allPostsUrl } from "../api/apiUrls.mjs";

/**
 * Creates a new post
 * @example
 * ```
 * // The content from the create post form is sent to the server by a POST request.
 * createPost()
 * // If the request is successfull, the page reloads and displays the new post.
 * ```
 */
export function createPost() {
  const postForm = document.querySelector("#createPost");

  postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function createPostAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);

      const response = await fetch(url, postData);
      const json = await response.json();

      location.reload();
    }
    createPostAPI(allPostsUrl, postContent);
  });
}
