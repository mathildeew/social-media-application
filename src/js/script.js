import * as urlLinks from "./api/apiUrls.mjs";

// Log in, log out & register
import { registerUser } from "./register/register.mjs";
import { loginUser } from "./login/login.mjs";
import { logoutUser } from "./profile/logout.mjs";

// User profile
import { displayUser } from "./profile/displayProfile/displayUser.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Singe post by user
import { getPostAPI } from "./profile/post/getPost.mjs";

// Single post react & comment
import { reactToPost } from "./posts/react.mjs";
import { commentPost } from "./home/singlePost/comment.mjs";

// Posts
import { editPost } from "./profile/post/editPost.mjs";
import { deletePost } from "./profile/post/delete.mjs";
import { createPost } from "./profile/post/create.mjs";
import { displayUsersProfile } from "./users/profile/displayUsersProfile.mjs";
import { followUser } from "./users/profile/followUser.mjs";
import { displayUsersPosts } from "./users/profile/displayUsersPosts.mjs";

import { getFeed } from "./home/getFeed.mjs";
import { getPosts } from "./profile/displayProfile/getPosts.mjs";

// Users
import { getUsersAPI } from "./users/profile/getUsers.mjs";

// Run function based on pathname
const path = location.pathname;

if (path === "/") {
  loginUser();
}

if (path === "/profile/register/") {
  registerUser();
}

if (path === "/profile/") {
  displayUser();
  createPost();
  getPosts(urlLinks.usersPostsUrl);
  logoutUser();
}

if (path === "/profile/post/") {
  getPostAPI(urlLinks.singlePostUrl);
  // getAPI(urlLinks.singlePostUrl);
  editPost();
  deletePost();
}

if (path === "/profile/edit/") {
  displayUser();
  editMedia();
}

if (path === "/home/") {
  getFeed(urlLinks.allPostsUrl);
  logoutUser();
}

if (path === "/home/post/") {
  getPostAPI(urlLinks.singlePostUrl);
  //   reactToPost();
  commentPost();
}

if (path === "/users/") {
  getUsersAPI(urlLinks.allUsersUrl);
}

// if (path === "/users/profile/") {
//   getAPI(urlLinks.singleUserUrl);
//   displayUsersPosts(urlLinks.otherUsersPostsUrl);
//   followUser();
// }
