import { displayUsers } from "./displayUsers.mjs";

export function searchUsers(users) {
  const search = document.querySelector("#search");
  console.log(users);

  search.addEventListener("keyup", (event) => {
    let filter = event.target.value.trim().toLowerCase();

    const filteredUsers = users.filter((user) => {
      if (user.name.includes(filter)) {
        return true;
      }
    });
    displayUsers(filteredUsers);
  });
}
