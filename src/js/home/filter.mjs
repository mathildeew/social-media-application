import { displayFeed } from "./displayFeed.mjs";

export function filterPosts(posts) {
  const selectOne = document.querySelector("#selectOne");
  const selectTwo = document.querySelector("#selectTwo");
  const selectThree = document.querySelector("#selectThree");
  const selectFour = document.querySelector("#selectFour");

  // Shows oldest to newest posts
  selectOne.addEventListener("click", (event) => {
    const oldestToNewest = posts.sort(function (a, b) {
      return a.id - b.id;
    });
    displayFeed(oldestToNewest);
  });

  // Shows newest to oldest posts (default)
  selectTwo.addEventListener("click", (event) => {
    const newestToOldest = posts.sort(function (a, b) {
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

  console.log(posts);

  //Excludes posts containing test in title, authorname and content
  selectFour.addEventListener("click", (event) => {
    const filter = "test";

    const postsWithoutTest = posts.filter(function (post) {
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
