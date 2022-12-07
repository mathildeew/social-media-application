import * as storage from "../storage/localStorage.mjs";

// Get params to links
const name = storage.get("name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const userName = params.get("name");

export const baseUrl = "https://api.noroff.dev/api/v1/social/";
// Log in & register
export const registerUrl = `${baseUrl}auth/register`;
export const loginUrl = `${baseUrl}auth/login`;

// Profile
export const userProfileUrl = `${baseUrl}profiles/${name}?_following=true&_followers=true`;
export const editMediaUrl = `${baseUrl}profiles/${name}/media`;

// Users
export const allUsersUrl = `${baseUrl}social/profiles`;

// Users profile
export const profileUrl = `${baseUrl}profiles/${userName}?_following=true&_followers=true`;
export const profilePostsUrl = `${baseUrl}profiles/${userName}/posts`;

export const singleUserUrl = `${baseUrl}profiles/${userName}`;
export const followUserUrl = `${baseUrl}profiles/${userName}/follow`;
export const unfollowUserUrl = `${baseUrl}profiles/${userName}/unfollow`;

// Single post
export const singleUserPostsUrl = `${baseUrl}profiles/${userName}/posts`;

// Get, create, edit, comment & react to posts
export const allPostsUrl = `${baseUrl}posts/?_author=true&_comments=true&_reactions=true`;
export const singlePostUrl = `${baseUrl}posts/${id}?_author=true&_comments=true&_reactions=true`;
export const usersPostsUrl = `${baseUrl}profiles/${name}/posts`;
export const commentPostUrl = `${baseUrl}posts/${id}/comment`;
export const reactUrl = `${baseUrl}posts/${id}/react/`;
