import { allPostsUrl } from "../api/apiUrl.mjs";
import { displayFeed } from "./displayFeed.mjs";

async function getAllPosts(url) {
  try {
    const token = localStorage.getItem("accessToken");

    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);

    displayFeed(json);
  } catch (error) {
    console.log(error);
  }
}

getAllPosts(allPostsUrl);
