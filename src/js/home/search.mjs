import { displayFeed } from "./displayFeed.mjs";

/**
 * Search in posts at home page.
 * @param {*} posts All posts API json.
 * @example
 * ```
 * // Filters by the title and author.
 * // If theres a matced the filtered result is displayed.
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
