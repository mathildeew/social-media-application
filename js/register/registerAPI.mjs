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
  } catch (error) {
    console.log(error);
  }
}
