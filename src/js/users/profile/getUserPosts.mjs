import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayUserPosts } from "../../users/profile/displayUserPosts.mjs";

/**
 * Gets all of a single users posts with a GET request.
 * @param {*} url The API url to retrieve the posts
 * @example
 * ```
 * // Gets all of the users posts.
 * getUserPostsAPI(url);
 * ```
 */
export async function getUserPostsAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();
    displayUserPosts(json);
  } catch (error) {
    console.log(error);
  }
}
