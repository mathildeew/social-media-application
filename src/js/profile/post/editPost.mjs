import { singlePostUrl } from "../../api/apiUrls.mjs";
import { putAPI } from "../../api/APIcalls/putAPI.mjs";

const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

export function editPost() {
  const updateForm = document.querySelector("#updatePostForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const putContent = {
      id: postID,
      title: updateForm.title.value,
      body: updateForm.body.value,
      media: updateForm.media.value,
    };

    putAPI(singlePostUrl, putContent);
  });
}
