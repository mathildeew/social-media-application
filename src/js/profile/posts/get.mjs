import * as storage from "../../storage/localStorage.mjs";
import { displayUserPosts } from "../displayProfile/displayUserPosts.mjs";

export async function getUserPostsAPI(url) {
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
    const usersPosts = await response.json();

    console.log(usersPosts);
    displayUserPosts(usersPosts);
  } catch (error) {
    console.log(error);
  }
}
