/**
 * API call to register user
 * @param {string} url
 * @param {any} userData
 * ``` js
 *  registerUser(registerUrl, userRegister);
 * ```
 */
export async function registerUserAPI(url, userData) {
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
