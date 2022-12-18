/**
 * Displays all of the users.
 * @param {*} user The API content from the server containing all users.
 * @example
 * ```
 * // Sorts the users alphabetical.
 * // Displays all of the users with following and followers.
 * // If the avatar is missing a placeholder image is used.
 * displayUsers(usersJson);
 * ```
 */
export function displayUsers(usersJson) {
  const usersContainer = document.querySelector("#allUsers");
  usersContainer.innerHTML = "";

  for (let i = 0; i < usersJson.length; i++) {
    // Sort alphabetical by username
    const users = usersJson.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });

    // Set placeholder if avatar is missing
    let avatar;
    if (users[i].avatar === null || users[i].avatar === "") {
      avatar =
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
    } else {
      avatar = users[i].avatar;
    }

    usersContainer.innerHTML += `
                                  <div class="card m-1 col-sm-4 col-md-3 col-xl-2">
                                    <div class="card-body">
                                      <div class="d-flex">
                                        <img id="avatar" src="${avatar}" class="postAvatar me-3">
                                        <a href="/users/profile/?name=${users[i].name}" class="card-title">${users[i].name}</a>
                                      </div>
                                      <p class="card-text"></p>
                                      <div class="d-flex flex-column">
                                        <div class="d-flex">
                                          <p class="me-1">Followers:</p>
                                          <p class="">${users[i]._count.followers}</p>
                                        </div>
                                        <div class="d-flex">
                                          <p class="me-1 mb-0">Following:</p>
                                          <p class="mb-0">${users[i]._count.following}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                `;
  }
}
