import { displayFeed } from "../home/displayFeed.mjs";

export function searchPosts(posts) {
  const search = document.querySelector("#search");

  search.addEventListener("keyup", (event) => {
    let filter = event.target.value.trim().toLowerCase();

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
