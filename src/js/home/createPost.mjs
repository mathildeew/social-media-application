import { allPostsUrl } from "../api/apiUrl.mjs";

async function createPost(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}
