import { allPostsUrl } from "../api/apiUrls.mjs";
import { postAPI } from "../api/APIcalls/postAPI.mjs";

export function createPost() {
  const postForm = document.querySelector("#createPost");

  postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const postContent = {
      title: postForm.title.value,
      body: postForm.body.value,
      media: postForm.media.value,
    };

    postAPI(allPostsUrl, postContent);
    location.reload();
  });
}
