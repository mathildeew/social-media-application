import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayUsers } from "../displayUsers.mjs";

export async function getUsersAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displayUsers(json);
  } catch (error) {
    console.log(error);
  }
}