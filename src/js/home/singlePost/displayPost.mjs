import { baseUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

export function displayPostID(post) {
  const titleContainer = document.querySelector("#postTitle");
  const textContainer = document.querySelector("#postText");
  const imgContainer = document.querySelector("#postImg");
  const dateContainer = document.querySelector("#postDate");
  const commentContainer = document.querySelector("#postComment");
  const reactContainer = document.querySelector("#postReact");

  titleContainer.innerHTML += post.title;
  dateContainer.innerHTML += new Date(post.created).toLocaleDateString();
  imgContainer.src = post.media;
  textContainer.innerHTML += post.body;
  commentContainer.innerHTML = post._count.comments;
  reactContainer.innerHTML = post._count.reactions;
}
