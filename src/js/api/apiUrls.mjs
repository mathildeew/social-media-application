import * as storage from "../storage/localStorage.mjs";

// Get params to links
const name = storage.get("name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const userName = params.get("name");

export const baseUrl = "https://api.noroff.dev";
// Log in & register
export const registerUrl = `${baseUrl}/api/v1/social/auth/register`;
export const loginUrl = `${baseUrl}/api/v1/social/auth/login`;

// Profile
export const userProfileUrl = `${baseUrl}/api/v1/social/profiles/${name}?_following=true&_followers=true`;
export const editMediaUrl = `${baseUrl}/api/v1/social/profiles/${name}/media`;

// Users
export const allUsersUrl = `${baseUrl}/api/v1/social/profiles`;

// Users profile
export const profileUrl = `${baseUrl}/api/v1/social/profiles/${userName}?_following=true&_followers=true`;
export const profilePostsUrl = `${baseUrl}/api/v1/social/profiles/${userName}/posts`;

export const singleUserUrl = `${baseUrl}/api/v1/social/profiles/${userName}`;
export const followUserUrl = `${baseUrl}/api/v1/social/profiles/${userName}/follow`;
export const unFollowUserUrl = `${baseUrl}/api/v1/social/profiles/${userName}/unfollow`;

// Single post
export const singleUserPostsUrl = `${baseUrl}/api/v1/social/profiles/${userName}/posts`;

// Get, create, edit, comment & react to posts
export const allPostsUrl = `${baseUrl}/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;
export const singlePostUrl = `${baseUrl}/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`;
export const usersPostsUrl = `${baseUrl}/api/v1/social/profiles/${name}/posts`;
export const commentPostUrl = `${baseUrl}/api/v1/social/posts/${id}/comment`;
