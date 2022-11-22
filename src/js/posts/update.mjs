import * as storage from "../storage/localStorage.mjs";

export async function updatePostAPI(url, postContent) {
  try {
    const token = storage.get("token");

    const putData = {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postContent),
    };
    const response = await fetch(url, putData);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}
