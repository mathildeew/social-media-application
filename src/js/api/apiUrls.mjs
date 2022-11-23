import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Log in, log out & register
export const baseUrl = "https://api.noroff.dev";
export const registerUrl = `${baseUrl}/api/v1/social/auth/register`;
export const loginUrl = `${baseUrl}/api/v1/social/auth/login`;

// User profile
export const editMediaUrl = `${baseUrl}/api/v1/social/profiles/${name}/media`;

// Get, create, edit, comment & react to posts
export const allPostsUrl = `${baseUrl}/api/v1/social/posts`;
export const createPostUrl = `${baseUrl}/api/v1/social/posts`;
// export const updatePostUrl = `${baseUrl}/api/v1/social/posts/${id}`;
export const singlePostUrl = `${baseUrl}/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`;
export const commentPostUrl = `${baseUrl}/api/v1/social/posts/${id}/comment`;

export const usersPostsUrl = `${baseUrl}/api/v1/social/profiles/${name}/posts`;
export const userProfilesUrl = `${baseUrl}/api/v1/social/profiles/`;
