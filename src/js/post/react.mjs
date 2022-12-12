import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

import { reactUrl } from "../api/apiUrls.mjs";

const reactionOneUrl = `${reactUrl}%E2%9D%A4`;
const reactionTwoUrl = `${reactUrl}%F0%9F%8C%B6`;
const reactionThreeUrl = `${reactUrl}%E2%98%84`;
const reactionFourUrl = `${reactUrl}%F0%9F%A4%B8`;
const reactionFiveUrl = `${reactUrl}%F0%9F%91%8A`;

// Get params to link
const IDurl = new URL(location.href);
const postID = IDurl.searchParams.get("id");

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

      console.log(json);
      //   location.reload();
    }

    reactionOneAPI(reactionOneUrl);
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

    reactionTwoAPI(reactionTwoUrl);
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

    reactionThreeAPI(reactionThreeUrl);
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

    reactionFourAPI(reactionFourUrl);
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

    reactionFiveAPI(reactionFiveUrl);
  });
}
