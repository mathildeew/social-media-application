import { displayFeed } from "../home/displayFeed.mjs";

export function filterPosts(posts) {
  const selectOne = document.querySelector("#selectOne");

  selectOne.addEventListener("click", (event) => {
    const oldestToNewest = posts.sort(function (a, b) {
      return a.id - b.id;
    });
    // displayFeed(oldestToNewest);
    // console.log(oldestToNewest);
  });
}
