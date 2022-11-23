import { baseUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

export function displayPostID(post) {
  const titleContainer = document.querySelector("#postTitle");
  const textContainer = document.querySelector("#postText");
  const imgContainer = document.querySelector("#postImg");
  const dateContainer = document.querySelector("#postDate");
  const commentContainer = document.querySelector("#postComment");
  const reactContainer = document.querySelector("#postReact");
  const avatarContainer = document.querySelector("#postAvatar");
  const authorContainer = document.querySelector("#postAuthor");

  var postAvatar;
  if (post.author.avatar === null || post.author.avatar === "") {
    var postAvatar =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  } else {
    var postAvatar = post.author.avatar;
  }

  var cardImg;
  if (post.media === null || post.media === "") {
    var cardImg =
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  } else {
    var cardImg = post.media;
  }

  authorContainer.innerHTML += post.author.name;
  avatarContainer.src += postAvatar;
  titleContainer.innerHTML += post.title;
  dateContainer.innerHTML += new Date(post.created).toLocaleDateString();
  imgContainer.src = cardImg;
  textContainer.innerHTML += post.body;
  commentContainer.innerHTML = post._count.comments;
  reactContainer.innerHTML = post._count.reactions;
}
