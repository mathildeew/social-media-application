import { fetchOptions } from "../api/fetchOptions.mjs";
import { allPostsUrl } from "../api/apiUrls.mjs";

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
