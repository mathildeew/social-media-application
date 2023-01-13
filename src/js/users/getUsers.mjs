import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayUsers } from "./displayUsers.mjs";
import { searchUsers } from "./searchUsers.mjs";

const loader = document.querySelector("#loader");
const errorMessage = document.querySelector(".errorMessage");

/**
 * Gets all of the users.
 * @param {*} url The API url to retreive the users.
 * @example
 * ```
 * // A GET request is sent to the server and retrieves all of the users.
 * getUsersAPI(url);
 * ```
 */
export async function getUsersAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displayUsers(json);
    searchUsers(json);
  } catch (error) {
    console.log(error);
    errorMessage.style.display = "inline";
    loader.style.display = "none";
  }
}
