import * as storage from "../storage/localStorage.mjs";

// Get params to links
const name = storage.get("name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const baseUrl = "https://api.noroff.dev";
// Log in, log out & register
export const registerUrl = `${baseUrl}/api/v1/social/auth/register`;
export const loginUrl = `${baseUrl}/api/v1/social/auth/login`;

// User profile
export const editMediaUrl = `${baseUrl}/api/v1/social/profiles/${name}/media`;
// export const userProfilesUrl = `${baseUrl}/api/v1/social/profiles/`;

// Get, create, edit, comment & react to posts
export const allPostsUrl = `${baseUrl}/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;
export const singlePostUrl = `${baseUrl}/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`;
export const usersPostsUrl = `${baseUrl}/api/v1/social/profiles/${name}/posts`;
// export const createPostUrl = `${baseUrl}/api/v1/social/posts`;
export const commentPostUrl = `${baseUrl}/api/v1/social/posts/${id}/comment`;
