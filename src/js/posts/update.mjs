import { updatePostUrl } from "../api/apiUrl.mjs";
import * as storage from "../../storage/localStorage.mjs";

export async function updatePostAPI() {
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
    const response = await fetch(url, postData);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

export function updatePost() {
  const postContent = {
    id: seeeijf,
    title: sdfc,
    body: sd,
  };
}
