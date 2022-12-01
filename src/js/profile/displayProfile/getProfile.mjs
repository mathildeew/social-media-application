import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayUser } from "./displayUser.mjs";

/**
 * 
 * @param {string} url Profile url API
 * @example
 * ```js
 * // Get whole user profile
const url = "https://api.noroff.dev/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true"
// The response is all the user details from the API called json and sent to displayUser
displayUser(json)
 * ```
 */
export async function getUserAPI(url) {
  try {
    const [getData, postData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displayUser(json);
  } catch (error) {
    console.log(error);
  }
}
