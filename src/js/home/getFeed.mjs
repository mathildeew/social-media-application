import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayFeed } from "./displayFeed.mjs";
import { searchPosts } from "./search.mjs";
import { filterPosts } from "./filter.mjs";

/**
 * 
 * @param {string} url All posts url
 * @example
``` js
// Get posts from API
const url = "https://api.noroff.dev/api/v1/social/posts/?_author=true&_comments=true&_reactions=true"
// The response is all the posts from the API called json and sent to display feed, search and filter functions
displayFeed(json)
searchPosts(json);
filterPosts(json);
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
  }
}
