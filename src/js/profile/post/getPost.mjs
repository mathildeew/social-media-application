import { fetchOptions } from "../../api/fetchOptions.mjs";
import { displayPost } from "./displayPost.mjs";

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
