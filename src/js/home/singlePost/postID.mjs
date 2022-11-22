import { baseUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

// Get blogpost by ID
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postUrl = `${baseUrl}/api/v1/social/posts/${id}`;

async function getPost(url) {
  try {
    const token = storage.get("token");

    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, getData);
    const posts = await response.json();

    console.log(posts);
    displayPosts(posts);
  } catch (error) {
    console.log(error);
  }
}

getPost(postUrl);

function displayPosts(post) {
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
