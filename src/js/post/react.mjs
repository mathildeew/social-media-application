import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";
import { reactionsUrl } from "../api/apiUrls.mjs";
const [reactOne, reactTwo, reactThree, reactFour, reactFive] = reactionsUrl;

// Get params to link
const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

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

  reactionOne.addEventListener("submit", (event) => {
    event.preventDefault();

    async function reactionOneAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      location.reload();
    }

    reactionOneAPI(reactOne);
  });

  reactionTwo.addEventListener("submit", (event) => {
    event.preventDefault();

    async function reactionTwoAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      console.log(json);
      window.location.reload();
    }

    reactionTwoAPI(reactTwo);
  });

  reactionThree.addEventListener("submit", (event) => {
    event.preventDefault();

    async function reactionThreeAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      console.log(json);
      window.location.reload();
    }

    reactionThreeAPI(reactThree);
  });

  reactionFour.addEventListener("submit", (event) => {
    event.preventDefault();

    async function reactionFourAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      console.log(json);
      window.location.reload();
    }

    reactionFourAPI(reactFour);
  });

  reactionFive.addEventListener("submit", (event) => {
    event.preventDefault();

    async function reactionFiveAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      const token = storage.get("token");
      putData["headers"] = { Authorization: `Bearer ${token}` };

      const response = await fetch(url, putData);
      const json = await response.json();

      console.log(json);
      window.location.reload();
    }

    reactionFiveAPI(reactFive);
  });
}
