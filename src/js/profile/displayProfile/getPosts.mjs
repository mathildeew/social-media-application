import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayPosts } from "./displayPosts.mjs";

export async function getPosts(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);
    displayPosts(json);
  } catch (error) {
    console.log(error);
  }
}
