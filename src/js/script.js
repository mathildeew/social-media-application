import { loginUser } from "./login/login.mjs";
import { registerUser } from "./register/register.mjs";
import { getAllPosts } from "./home/home.mjs";
import { allPostsUrl } from "./api/apiUrl.mjs";
import { createPost } from "./profile/createPost.mjs";
import { logoutUser } from "./profile/logout.mjs";

const path = location.pathname;

if (path === "/") {
  loginUser();
} else if (path === "/profile/register/") {
  registerUser();
}

createPost();

logoutUser();
// getAllPosts(allPostsUrl);
