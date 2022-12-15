import * as storage from "../storage/localStorage.mjs";

/**
 * Redirects the user to hers/his profile page if they clicks on their own profile links.
 */
export function redirectUser() {
  const name = storage.get("name");

  if (location.search === `?name=${name}`) {
    window.location = "/profile/";
  }
}
