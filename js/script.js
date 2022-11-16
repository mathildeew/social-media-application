const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const h1 = document.querySelector("h1");

// - - - - - - - - - - - - - - - - - - - - - - - - - - REGISTER USER
// End-points register: /api/v1/social/auth/register
/**
 * API call to register user
 * @param {string} url
 * @param {any} userData
 * ``` js
 *  registerUser(registerUrl, userRegister);
 * ```
 */
async function registerUser(url, userData) {
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
    console.log(json);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const userRegister = {
  name: "mathilde_elinor",
  email: "matwii65981@stud.noroff.no",
  password: "Gurkemeie69",
};

const registerUrl = `${baseUrl}/api/v1/social/auth/register`;

// registerUser(registerUrl, userRegister);

// - - - - - - - - - - - - - - - - - - - - - - - - - - REQUEST WITH TOKEN
//End-point: /api/v1/social/posts
async function getWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
const postsUrl = `${baseUrl}/api/v1/social/posts`;

// getWithToken(postsUrl);
