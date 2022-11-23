import * as storage from "../storage/localStorage.mjs";

export async function updatePostAPI(url, postContent) {
  try {
    const token = storage.get("token");

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postContent),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
