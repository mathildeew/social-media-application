import { displayFeed } from "./displayFeed.mjs";

/**
 * Search in posts by the title and author. The filtered result is then displayed.
 * @param {*} posts All posts API json.
 * @example
 * ```
 * searchPosts(posts)
 * ```
 */

export function searchPosts(posts) {
  const search = document.querySelector("#search");

  search.addEventListener("keyup", (event) => {
    const filter = event.target.value.trim().toLowerCase();

    const filteredPosts = posts.filter(function (post) {
      if (
        post.title.toLowerCase().includes(filter) ||
        post.author.name.toLowerCase().includes(filter)
      ) {
        return true;
      }
    });
    displayFeed(filteredPosts);
  });
}
