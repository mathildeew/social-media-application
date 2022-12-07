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
import { getPostsAPI } from "./profile/displayProfile/getPosts.mjs";
import { editPost } from "./post/editPost.mjs";

// Edit profile
import { editMedia } from "./profile/edit/editProfile.mjs";

// Post
import { getPostAPI } from "./post/getPost.mjs";
import { createPost } from "./post/create.mjs";
import { commentPost } from "./post/comment.mjs";
import { deletePost } from "./post/delete.mjs";
import { reactPost } from "./post/react.mjs";

// Users
import { getUsersAPI } from "./users/getUsers.mjs";
import { getUserPostsAPI } from "./users/profile/getUserPosts.mjs";
import { followUser } from "./users/profile/followUser.mjs";
import { unfollowUser } from "./users/profile/unfollowUser.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    loginUser();
    break;

  case "/profile/register/":
    registerUser();
    break;

  case "/profile/":
    getUserAPI(urlLinks.userProfileUrl);
    createPost();
    getPostsAPI(urlLinks.usersPostsUrl);
    logoutUser();
    automaticLogout();
    break;

  case "/profile/post/":
    getPostAPI(urlLinks.singlePostUrl);
    editPost();
    deletePost();
    logoutUser();
    automaticLogout();
    break;

  case "/profile/edit/":
    getUserAPI(urlLinks.userProfileUrl);
    editMedia();
    logoutUser();
    automaticLogout();
    break;

  case "/home/":
    getFeed(urlLinks.allPostsUrl);
    logoutUser();
    logoutUser();
    automaticLogout();
    break;

  case "/home/post/":
    getPostAPI(urlLinks.singlePostUrl);
    commentPost();
    reactPost();
    logoutUser();
    automaticLogout();
    break;

  case "/users/":
    getUsersAPI(urlLinks.allUsersUrl);
    logoutUser();
    automaticLogout();

    break;

  case "/users/profile/":
    getUserAPI(urlLinks.profileUrl);
    getUserPostsAPI(urlLinks.profilePostsUrl);
    followUser();
    unfollowUser();
    logoutUser();
    automaticLogout();
    break;
}
