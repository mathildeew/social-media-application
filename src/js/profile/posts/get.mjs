import * as storage from "../../storage/localStorage.mjs";
import { displayPosts } from "../displayProfile/displayPosts.mjs";

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
    const userPosts = await response.json();

    console.log(userPosts);
    displayPosts(userPosts);
  } catch (error) {
    console.log(error);
  }
}
