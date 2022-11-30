import * as storage from "../../storage/localStorage.mjs";
const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");

export function displayUsersProfile(user) {
  const usersAvatar = user.avatar;
  const usersBanner = user.banner;

  userNameContainer.innerHTML += `${user.name}`;
  bannerContainer.src = `${usersBanner}`;
  avatarContainer.src = `${usersAvatar}`;
}
