import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displaySingleUserPosts } from "./displaySingleUserPosts.mjs";

export async function getSingleUserPostsAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();
    displaySingleUserPosts(json);
  } catch (error) {
    console.log(error);
  }
}
