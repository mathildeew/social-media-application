import { displayFeed } from "./displayFeed.mjs";

/**
 * Filters post at home page.
 * @param {*} posts API content with all the 100 posts.
 * @example
 * ```
 * // Choose between oldest > newest, newest > oldest, with image and without test.
 * filterPosts(posts)
 * ```
 */
export function filterPosts(posts) {
  const selectOne = document.querySelector("#selectOne");
  const selectTwo = document.querySelector("#selectTwo");
  const selectThree = document.querySelector("#selectThree");
  const selectFour = document.querySelector("#selectFour");

  // Shows oldest to newest posts
  selectOne.addEventListener("click", (event) => {
    const oldestToNewest = posts.sort((a, b) => {
      return a.id - b.id;
    });
    displayFeed(oldestToNewest);
  });

  // Shows newest to oldest posts (default)
  selectTwo.addEventListener("click", (event) => {
    const newestToOldest = posts.sort((a, b) => {
      return b.id - a.id;
    });
    displayFeed(newestToOldest);
  });

  // Shows posts with image
  selectThree.addEventListener("click", (event) => {
    const postsWithImage = posts.filter((post) => {
      if (post.media === null || post.media === "") {
        return false;
      } else {
        return true;
      }
    });
    displayFeed(postsWithImage);
  });

  //Excludes posts containing test in title and authorname
  selectFour.addEventListener("click", (event) => {
    const filter = "test";

    const postsWithoutTest = posts.filter((post) => {
      if (
        post.title.toLowerCase().includes(filter) ||
        post.author.name.toLowerCase().includes(filter)
      ) {
        return false;
      } else {
        return true;
      }
    });
    displayFeed(postsWithoutTest);
  });
}
