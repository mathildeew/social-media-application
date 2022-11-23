import { singlePostUrl } from "../../api/apiUrls.mjs";
import { updatePostAPI } from "../../posts/update.mjs";
// const singlePostUrl = `https://api.noroff.dev/api/v1/social/posts/3845`;

const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

export function editPost() {
  const updateForm = document.querySelector("#updatePostForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const postContent = {
      id: postID,
      title: updateForm.title.value,
      body: updateForm.body.value,
      media: updateForm.media.value,
    };

    updatePostAPI(singlePostUrl, postContent);
  });
}
