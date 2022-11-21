import { createPostUrl } from "../api/apiUrl.mjs";
import * as storage from "../storage/localStorage.mjs";

export async function createPost(url) {
  try {
    const postData = {
      method: "POST",
      headers: {},
      body: JSON.stringify(userData),
    };

    const response = await fetch(createPostUrl, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

export function headers() {
  const token = storage.get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function tokenFetch(url, data) {}
