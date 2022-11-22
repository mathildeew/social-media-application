import { singlePostUrl } from "../../api/apiUrls.mjs";
import { updatePostAPI } from "../../posts/update.mjs";

export function editPost() {
  const updateForm = document.querySelector("#updatePostForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const postContent = {
      title: updateForm.title.value,
      body: updateForm.body.value,
      media: updateForm.media.value,
    };
    updatePostAPI(singlePostUrl, postContent);
  });
}
