import * as storage from "../../storage/localStorage.mjs";
const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");

export function displayUser() {
  const username = storage.get("name");
  const banner = storage.get("banner");
  const avatar = storage.get("avatar");

  userNameContainer.innerHTML = `@${username}`;
  bannerContainer.src = `${banner}`;
  avatarContainer.src = `${avatar}`;
}
