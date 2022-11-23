import * as storage from "../storage/localStorage.mjs";
import { displayPosts } from "../profile/displayProfile/displayPosts.mjs";
import { displayFeed } from "../home/displayFeed.mjs";
import { searchPosts } from "./search.mjs";
import { displayPost } from "../profile/post/displayPost.mjs";

const path = location.pathname;

export async function getPosts(url) {
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
    const posts = await response.json();

    console.log(posts);
    if (path === "/profile/") {
      displayPosts(posts);
    }
    if (path === "/profile/post/") {
      displayPost(posts);
    }
    if (path === "/home/") {
      displayFeed(posts);
      searchPosts(posts);
    }
  } catch (error) {
    console.log(error);
  }
}
