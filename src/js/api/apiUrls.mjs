export const baseUrl = "https://api.noroff.dev";
export const registerUrl = `${baseUrl}/api/v1/social/auth/register`;
export const loginUrl = `${baseUrl}/api/v1/social/auth/login`;
export const allPostsUrl = `${baseUrl}/api/v1/social/posts`;
export const createPostUrl = `${baseUrl}/api/v1/social/posts`;
export const updatePostUrl = `${baseUrl}/api/v1/social/posts/<id>`;

const name = localStorage.getItem("name");

const usersPostsUrl = `${baseUrl}/api/v1/social/profiles/${name}/posts`;
export const userProfilesUrl = `${baseUrl}/api/v1/social/profiles/`;
