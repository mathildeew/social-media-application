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
    localStorage.setItem("accessToken", accessToken);

    const name = json.name;
    localStorage.setItem("name", name);

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
