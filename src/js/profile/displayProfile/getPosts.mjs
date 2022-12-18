import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayPosts } from "./displayPosts.mjs";

/**
 * Gets all of the logged in users posts with a GET request.
 * @param {*} url The API url to retrieve the posts
 * @example
 * ```
 * // Gets all of the users posts.
 * getPostsAPI(url);
 * ```
 */
export async function getPostsAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();
    displayPosts(json);
  } catch (error) {
    console.log(error);
  }
}
