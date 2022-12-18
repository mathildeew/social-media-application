import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";
import { reactionsUrl } from "../api/apiUrls.mjs";
const [reactOne, reactTwo, reactThree, reactFour, reactFive] = reactionsUrl;

/**
 * Lets the user send reactions to a post with a PUT request.
 * @example
 * ```
 * // Five different reactions.
 * // The page is reloaded when the reaction is sent.
 * reactPosts()
 * ```
 */
export function reactPost() {
  const reactionOne = document.querySelector("#reactionOne");
  const reactionTwo = document.querySelector("#reactionTwo");
  const reactionThree = document.querySelector("#reactionThree");
  const reactionFour = document.querySelector("#reactionFour");
  const reactionFive = document.querySelector("#reactionFive");

  // Base react to posts function
  async function reactToPost(url) {
    const [getData, postData, putData] = fetchOptions;
    const token = storage.get("token");
    putData["headers"] = { Authorization: `Bearer ${token}` };

    const response = await fetch(url, putData);
    const json = await response.json();

    location.reload();
  }

  reactionOne.addEventListener("submit", (event) => {
    event.preventDefault();
    reactToPost(reactOne);
  });

  reactionTwo.addEventListener("submit", (event) => {
    event.preventDefault();
    reactToPost(reactTwo);
  });

  reactionThree.addEventListener("submit", (event) => {
    event.preventDefault();
    reactToPost(reactThree);
  });

  reactionFour.addEventListener("submit", (event) => {
    event.preventDefault();
    reactToPost(reactFour);
  });

  reactionFive.addEventListener("submit", (event) => {
    event.preventDefault();
    reactToPost(reactFive);
  });
}
