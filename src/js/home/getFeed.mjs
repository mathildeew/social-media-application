import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayFeed } from "./displayFeed.mjs";
import { searchPosts } from "./search.mjs";
import { filterPosts } from "./filter.mjs";

const errorMessage = document.querySelector(".errorMessage");
const loader = document.querySelector(".loader-grid");

/**
 * Retrieves all posts from the API. 
 * @param {string} url All posts API url
 * @example
```
// A GET request is sent to the server and recieves the posts.
// The json is used to display the feed, search in posts and filter the posts.
getFeed(url);
```
*/
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
    errorMessage.style.display = "inline";
    loader.style.display = "none";
  }
}
