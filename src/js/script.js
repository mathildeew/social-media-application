import * as urlLinks from "./api/apiUrls.mjs";

// Log in, log out & register
import { registerUser } from "./register/register.mjs";
import { loginUser } from "./login/login.mjs";
import { logoutUser } from "./profile/logout.mjs";
import { automaticLogout } from "./profile/logout.mjs";

// Home
import { getFeed } from "./home/getFeed.mjs";

// User profile
import { getUserAPI } from "./profile/displayProfile/getProfile.mjs";
import { displayUser } from "./profile/displayProfile/displayUser.mjs";
import { getPostsAPI } from "./profile/displayProfile/getPosts.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Post
import { getPostAPI } from "./post/getPost.mjs";
import { createPost } from "./post/create.mjs";
import { commentPost } from "./post/comment.mjs";
import { deletePost } from "./post/delete.mjs";

// Users
import { getUsersAPI } from "./users/profile/getUsers.mjs";
import { getSingleUserAPI } from "./users/profile/getSingleUser.mjs";
import { getSingleUserPostsAPI } from "./users/profile/getSingleUserPosts.mjs";
import { followUser } from "./users/profile/followUser.mjs";

// Run function based on pathname
const path = location.pathname;

if (path === "/") {
  loginUser();
}

if (path === "/profile/register/") {
  registerUser();
}

if (path === "/profile/") {
  getUserAPI(urlLinks.userProfileUrl);
  createPost();
  getPostsAPI(urlLinks.usersPostsUrl);
  logoutUser();
  automaticLogout();
}

if (path === "/profile/post/") {
  getPostAPI(urlLinks.singlePostUrl);
  editPost();
  deletePost();
  logoutUser();
  automaticLogout();
}

if (path === "/profile/edit/") {
  displayUser();
  editMedia();
  logoutUser();
  automaticLogout();
}

if (path === "/home/") {
  getFeed(urlLinks.allPostsUrl);
  logoutUser();
  logoutUser();
  automaticLogout();
}

if (path === "/home/post/") {
  getPostAPI(urlLinks.singlePostUrl);
  //   reactToPost();
  commentPost();
  logoutUser();
  automaticLogout();
}

if (path === "/users/") {
  getUsersAPI(urlLinks.allUsersUrl);
  logoutUser();
  automaticLogout();
}

if (path === "/users/profile/") {
  getSingleUserAPI(urlLinks.singleUserUrl);
  getSingleUserPostsAPI(urlLinks.singleUserPostsUrl);
  followUser();
  logoutUser();
  automaticLogout();
}
