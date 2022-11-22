import * as storage from "./storage/localStorage.mjs";

// API urls
import { baseUrl } from "./api/apiUrls.mjs";
import { allPostsUrl } from "./api/apiUrls.mjs";
import { usersPostsUrl } from "./api/apiUrls.mjs";

// Log in, log out & register
import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { logoutUser } from "./profile/logout.mjs";

// User profile & posts
import { displayUser } from "./profile/displayProfile/displayUser.mjs";
import { getPosts } from "./profile/posts/get.mjs";
import { createPost } from "./profile/posts/create.mjs";
import { displayPosts } from "./profile/displayProfile/displayPosts.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Home feed
import { getAllPosts } from "./home/posts/get.mjs";

const path = location.pathname;

if (path === "/") {
  loginUser();
} else if (path === "/profile/register/") {
  registerUser();
}

if (path === "/home/") {
  getAllPosts(allPostsUrl);
  logoutUser();
}

if (path === "/profile/") {
  displayUser();
  getPosts(usersPostsUrl);
  logoutUser();
}

if (path === "/profile/edit/") {
  displayUser();
  editMedia();
}
