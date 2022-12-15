import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayPost } from "./displayPost.mjs";

/**
 * Retreives a single post from the server with a GET request.
 * @param {string} url Single post url
 * @example
 * ```
 * // The response is a single posts from the server.
 * getPostAPI(url)
 * ```
 */
export async function getPostAPI(url) {
  try {
    const [getData, postData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displayPost(json);
  } catch (error) {
    console.log(error);
  }
}
