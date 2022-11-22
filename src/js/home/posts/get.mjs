import { allPostsUrl } from "../../api/apiUrls.mjs";
import { displayFeed } from "../displayFeed.mjs";
import * as storage from "../../storage/localStorage.mjs";

export async function getAllPosts(url) {
  try {
    const token = storage.get("token");

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
