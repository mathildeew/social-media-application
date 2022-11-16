// - - - - - - - - - - - - - - - - - - - - - - - - - - REGISTER USER

// End-points register: /api/v1/social/auth/register

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
