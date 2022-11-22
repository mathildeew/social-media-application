import * as storage from "../storage/localStorage.mjs";

/**
 * API call to login user
 * @param {string} url
 * @param {any} userData
 * ``` js
 * loginUser(loginUrl, userLogin);
 * ```
 */

export async function loginUserAPI(url, userData) {
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

    const accessToken = json.accessToken;
    storage.set("token", accessToken);
    const name = json.name;
    storage.set("name", name);
    const avatar = json.avatar;
    storage.set("avatar", avatar);
    const banner = json.banner;
    storage.set("banner", banner);
  } catch (error) {
    console.log(error);
  }
}
