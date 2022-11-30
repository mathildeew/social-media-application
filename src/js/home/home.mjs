import * as storage from "../storage/localStorage.mjs";
import { displayFeed } from "./displayFeed.mjs";
import { searchPosts } from "../posts/search.mjs";
import { filterPosts } from "../posts/filter.mjs";

export const baseUrl = "https://api.noroff.dev";
export const allPostsUrl = `${baseUrl}/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;

export async function getAPI() {
  try {
    const token = storage.get("token");

    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(allPostsUrl, getData);
    const json = await response.json();

    displayFeed(json);
    searchPosts(json);
    filterPosts(json);
  } catch (error) {
    console.log(error);
  }
}

getAPI();
