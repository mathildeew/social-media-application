import * as storage from "./storage/localStorage.mjs";
import * as urlLinks from "./api/apiUrls.mjs";

// API urls
import { allPostsUrl } from "./api/apiUrls.mjs";
import { usersPostsUrl } from "./api/apiUrls.mjs";

// Log in, log out & register
import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { logoutUser } from "./profile/logout.mjs";

// User profile
import { displayUser } from "./profile/displayProfile/displayUser.mjs";
import { displayPost } from "./profile/post/displayPost.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Home feed

// Single post
import { reactToPost } from "./posts/react.mjs";

// Posts
import { getPosts } from "./posts/get.mjs";
import { editPost } from "./profile/post/editPost.mjs";
import { deletePost } from "./posts/delete.mjs";
import { createPost } from "./posts/create.mjs";
import { comments } from "./home/singlePost/displayComments.mjs";

const path = location.pathname;

if (path === "/") {
  loginUser();
} else if (path === "/profile/register/") {
  registerUser();
}

if (path === "/home/") {
  getPosts(allPostsUrl);
  logoutUser();
}

if (path === "/home/post/") {
  getPosts(urlLinks.commentsUrl);
  reactToPost();
}

if (path === "/profile/") {
  displayUser();
  getPosts(usersPostsUrl);
  logoutUser();
  createPost(allPostsUrl);
}

if (path === "/profile/post/") {
  getPosts(urlLinks.singlePostUrl);
  editPost();
  deletePost();
}

if (path === "/profile/edit/") {
  displayUser();
  editMedia();
}
