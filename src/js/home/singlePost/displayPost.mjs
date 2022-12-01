import { baseUrl } from "../../api/apiUrls.mjs";
import * as storage from "../../storage/localStorage.mjs";

export function displayPostID(post) {
  const titleContainer = document.querySelector("#postTitle");
  const textContainer = document.querySelector("#postText");
  const imgContainer = document.querySelector("#postImg");
  const dateContainer = document.querySelector("#postDate");
  const commentContainer = document.querySelector("#postComment");
  const avatarContainer = document.querySelector("#postAvatar");
  const authorContainer = document.querySelector("#postAuthor");
  const reactContainer = document.querySelector("#postReact");
  const iconOne = document.querySelector("#iconOne");
  const iconTwo = document.querySelector("#iconTwo");
  const iconThree = document.querySelector("#iconThree");
  const iconFour = document.querySelector("#iconFour");
  const iconFive = document.querySelector("#iconFive");
  const commentsContainer = document.querySelector("#comments");

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
  // reactContainer.innerHTML = post._count.reactions;
  // iconOne.innerHTML = post.reactions[0].symbol + post.reactions[0].count;
  // iconTwo.innerHTML = post.reactions[1].symbol + post.reactions[1].count;
  // iconThree.innerHTML = post.reactions[2].symbol + post.reactions[2].count;
  // iconFour.innerHTML = post.reactions[3].symbol + post.reactions[3].count;
  // iconFive.innerHTML = post.reactions[4].symbol + post.reactions[4].count;

  // Display comments
  const comments = post.comments;

  if (comments.length !== 0) {
    for (let i = 0; i < comments.length; i++) {
      const date = new Date(comments[i].created).toLocaleDateString();
      commentsContainer.innerHTML += `
                                    <div class="rounded form-control d-flex flex-column ">
                                        <div class="d-flex justify-content-between">
                                            <h3>${comments[i].owner}</h3>
                                            <p class="text-muted">${date}</h4>
                                        </div>
                                        <p>${comments[i].body}</p>
                                    </div>
                                    `;
    }
  } else {
    commentsContainer.innerHTML = `
    <div class="rounded form-control d-flex align-items-center">
        <p>No comments yet. Be the first one!</p>
    </div>
   `;
  }
}
