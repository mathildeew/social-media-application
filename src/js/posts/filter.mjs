import { displayFeed } from "../home/displayFeed.mjs";
import { displayPost } from "../profile/post/displayPost.mjs";

export function filterPosts(posts) {
  const selectOne = document.querySelector("#selectOne");
  const selectTwo = document.querySelector("#selectTwo");
  const selectThree = document.querySelector("#selectThree");
  const selectFour = document.querySelector("#selectFour");

  selectOne.addEventListener("click", (event) => {
    const oldestToNewest = posts.sort(function (a, b) {
      return a.id - b.id;
    });
    displayFeed(oldestToNewest);
  });
  selectTwo.addEventListener("click", (event) => {
    const newestToOldest = posts.sort(function (a, b) {
      return b.id - a.id;
    });
    displayFeed(newestToOldest);
  });
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

  selectFour.addEventListener("click", (event) => {
    const filter = "test".toLowerCase().trim();

    const postsWithoutTest = posts.filter(function (post) {
      if (
        post.title.toLowerCase().includes(filter) ||
        post.body.toLowerCase().includes(filter)
      ) {
        return false;
      } else {
        return true;
      }
    });
    displayFeed(postsWithoutTest);
  });
}
