import * as storage from "./storage/localStorage.mjs";

// API urls
import { allPostsUrl } from "./api/apiUrls.mjs";
import { usersPostsUrl } from "./api/apiUrls.mjs";

// Log in, log out & register
import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { logoutUser } from "./profile/logout.mjs";

// User profile
import { displayUser } from "./profile/displayProfile/displayUser.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Home feed
import { searchPosts } from "./posts/search.mjs";

// Single post
import { reactToPost } from "./posts/react.mjs";

// Posts
import { getPosts } from "./posts/get.mjs";

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
  reactToPost();
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
