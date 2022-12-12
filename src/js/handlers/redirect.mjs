import * as storage from "../storage/localStorage.mjs";

export function redirectUser() {
  //   console.log(location.search);

  const name = storage.get("name");
  if (location.search === `?name=${name}`) {
    window.location = "/profile/";
  }
}
