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

    const formError = document.querySelector(".formError");
    if (json.errors[0].message === "Invalid email or password") {
      formError.innerHTML = `<p>${json.errors[0].message}</p>`;
    } else {
      formError.innerHTML = ``;
      location.href = `/profile.html`;
    }
  } catch (error) {
    console.log(error);
  }
}
