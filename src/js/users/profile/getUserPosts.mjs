import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayUserPosts } from "../../users/profile/displayUserPosts.mjs";

export async function getUserPostsAPI(url) {
  try {
    const [getData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();
    displayUserPosts(json);
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
