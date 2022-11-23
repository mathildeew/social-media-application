import * as storage from "../../storage/localStorage.mjs";
import { displayPosts } from "../../profile/displayProfile/displayPosts.mjs";

const path = location.pathname;

/**
 * API POST call to login user,
 * @param {string} url API url
 * @param {object} postContent The content thats sent to server
 * ```js
 * postAPI(baseURL, userData)
 * ```
 */
export async function postAPI(url, postContent) {
  try {
    const token = storage.get("token");

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postContent),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    if (path === "/" || path === "/profile/register/") {
      const accessToken = json.accessToken;
      storage.set("token", accessToken);
      const name = json.name;
      storage.set("name", name);
      const avatar = json.avatar;
      storage.set("avatar", avatar);
      const banner = json.banner;
      storage.set("banner", banner);
      // window.location.href = "/profile/";
    }
  } catch (error) {
    console.log(error);
  }
}
