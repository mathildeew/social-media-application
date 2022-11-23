import { commentPostUrl } from "../../api/apiUrls.mjs";
import { postAPI } from "../../api/APIcalls/postAPI.mjs";

// Get params to link
const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

export function commentPost() {
  const commentForm = document.querySelector("#makeCommentForm");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const postContent = {
      id: postID,
      body: commentForm.body.value,
    };

    postAPI(commentPostUrl, postContent);
    // location.reload();
  });
}
