import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayPost } from "./displayPost.mjs";

/**
 * 
 * @param {string} url Single post url
 * @example
 * ```js
 * // Get single posts from API with ID from params.get
const url = "https://api.noroff.dev/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true"
// The response is a posts from the API called json and sent to displayPost
displayPost(json)
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
