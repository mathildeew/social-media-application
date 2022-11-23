import { allPostsUrl } from "../api/apiUrls.mjs";
import * as storage from "../storage/localStorage.mjs";

export async function createPostAPI(url, postContent) {
  try {
    const token = storage.get("token");

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postContent),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

export function createPost() {
  const postForm = document.querySelector("#createPost");

  postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const postContent = {
      title: postForm.title.value,
      body: postForm.body.value,
      media: postForm.media.value,
    };

    createPostAPI(allPostsUrl, postContent);
    location.reload();
  });
}
