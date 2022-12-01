import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displaySingleUserProfile } from "./displaySingleUserProfile.mjs";
import { searchUsers } from "../searchUsers.mjs";

export async function getSingleUserAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displaySingleUserProfile(json);
  } catch (error) {
    console.log(error);
  }
}
