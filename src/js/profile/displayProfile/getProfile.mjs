import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayUser } from "./displayUser.mjs";

/**
 * Retrieve single user profile with a GET request.
 * @param {string} url Profile url API
 * @example
 * ```
// The response is all the user details from the API called json and sent to displayUser
getUserAPI(url)
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
