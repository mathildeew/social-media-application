import * as storage from "../../storage/localStorage.mjs";
import { displayPosts } from "../../profile/displayProfile/displayPosts.mjs";
import { displayFeed } from "../../home/displayFeed.mjs";
import { searchPosts } from "../../posts/search.mjs";
import { displayPost } from "../../profile/post/displayPost.mjs";
import { displayPostID } from "../../home/singlePost/displayPost.mjs";
import { filterPosts } from "../../posts/filter.mjs";
import { displayUsers } from "../../users/displayUsers.mjs";
import { displayUsersProfile } from "../../users/profile/displayUsersProfile.mjs";

const path = location.pathname;

export async function getAPI(url) {
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

    if (path === "/profile/") {
      displayPosts(json);
    }
    if (path === "/profile/post/") {
      displayPost(json);
    }
    if (path === "/home/") {
      searchPosts(json);
      displayFeed(json);
      filterPosts(json);
    }
    if (path === "/home/post/") {
      displayPostID(json);
    }

    if (path === "/users/") {
      displayUsers(json);
    }
    if (path === "/users/profile/") {
      displayUsersProfile(json);
    }
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
