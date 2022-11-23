import { commentPostUrl } from "../../api/apiUrls.mjs";
import { commentPostAPI } from "../../posts/comment.mjs";

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

    commentPostAPI(commentPostUrl, postContent);
    location.reload();
  });
}
