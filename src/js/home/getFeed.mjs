import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayFeed } from "./displayFeed.mjs";
import { searchPosts } from "./search.mjs";
import { filterPosts } from "./filter.mjs";

/**
 * Retrieves all posts from the API. The json is used to display the feed, search in posts and filter the posts.
 * @param {string} url All posts API url
 * @example
```
const url = "https://api.noroff.dev/api/v1/social/posts/?_author=true&_comments=true&_reactions=true"
getFeed(url)
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
