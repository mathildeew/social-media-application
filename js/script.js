const baseUrl = 'https://api.noroff.dev';

const loginUrl = '/api/v1/social/auth/login';

const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', loginUser);

function sendForm() {}

const userLogin = {
  username: 'my_username',
  //   email: email.value,
  //   password: password.value,
};

console.log(email.value);

async function loginUser(url, data) {
  event.preventDefault();
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem('accessToken', accessToken);
    console.log(json);
    // Logs:
    // accessToken: "eyJhbGciOiJIuzI1NiIsInR...
    // avatar: ""
    // email: "test-account-a@noroff.no
    // name: "test_account_a"
    return json;
  } catch (error) {
    console.log(error);
  }
}

// loginUser(`${baseUrl}${loginUrl}`, userLogin);
