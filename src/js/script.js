import * as urlLinks from "./api/apiUrls.mjs";

// Log in, log out & register
import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { logoutUser } from "./profile/logout.mjs";

// User profile
import { displayUser } from "./profile/displayProfile/displayUser.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Single post react & comment
import { reactToPost } from "./posts/react.mjs";
import { commentPost } from "./home/singlePost/commentPost.mjs";

// Posts
import { getAPI } from "./api/APIcalls/getAPI.mjs";
import { editPost } from "./profile/post/editPost.mjs";
import { deletePost } from "./posts/delete.mjs";
import { createPost } from "./posts/create.mjs";
import { displayUsersProfile } from "./users/profile/displayUsersProfile.mjs";
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
  displayUser();
  getAPI(urlLinks.usersPostsUrl);
  createPost(urlLinks.allPostsUrl);
  logoutUser();
}

if (path === "/profile/post/") {
  getAPI(urlLinks.singlePostUrl);
  editPost();
  deletePost();
}

if (path === "/profile/edit/") {
  displayUser();
  editMedia();
}

if (path === "/home/") {
  getAPI(urlLinks.allPostsUrl);
  logoutUser();
}

if (path === "/home/post/") {
  getAPI(urlLinks.singlePostUrl);
  reactToPost();
  commentPost();
}

if (path === "/users/") {
  getAPI(urlLinks.allUsersUrl);
}

if (path === "/users/profile/") {
  getAPI(urlLinks.singleUserUrl);
  followUser();
}
