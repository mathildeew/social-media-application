import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayPosts } from "./displayPosts.mjs";

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
