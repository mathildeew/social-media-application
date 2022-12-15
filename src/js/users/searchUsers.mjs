import { displayUsers } from "./displayUsers.mjs";

/**
 * Seach in users at users page.
 * @param {*} users The json with all of the users.
 * @example
 * ```
 * // Search in users by username. If there is a match, the result is displayed.
 * searchUsers(users);
 * ```
 */
export function searchUsers(users) {
  const search = document.querySelector("#search");

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
