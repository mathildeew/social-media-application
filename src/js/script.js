import * as storage from "./storage/localStorage.mjs";

import { baseUrl } from "./api/apiUrls.mjs";
import { allPostsUrl } from "./api/apiUrls.mjs";

import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { logoutUser } from "./profile/logout.mjs";
import { getAllPosts } from "./home/posts/getPosts.mjs";
import { displayUser } from "./profile/displayProfile/displayUser.mjs";
import { getUserPostsAPI } from "./profile/posts/get.mjs";
import { createPost } from "./profile/posts/create.mjs";
import {
  editMedia,
  editProfile,
  getProfileMediaApi,
} from "./profile/edit/editProfile.mjs";
import { displayMedia } from "./profile/edit/displayMedia.mjs";
import { displayUserPosts } from "./profile/displayProfile/displayUserPosts.mjs";

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

  // getUserPostsAPI(usersPostsUrl);
  logoutUser();
}

if (path === "/profile/edit/") {
  displayMedia();
  const name = localStorage.getItem("name");
  const mediaProfileUrl = `${baseUrl}/api/v1/social/profiles/${name}/`;
  // getProfileMediaApi(mediaProfileUrl);
  // editProfile();
}
