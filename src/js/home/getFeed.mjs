import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayFeed } from "./displayFeed.mjs";
import { searchPosts } from "../posts/search.mjs";
import { filterPosts } from "../posts/filter.mjs";

export async function getFeed(url) {
  try {
    const [getData, postData] = fetchOptions;

    const response = await fetch(url, getData);
    const json = await response.json();

    displayFeed(json);
    searchPosts(json);
    filterPosts(json);
  } catch (error) {
    console.log(error);
  }
}
