import * as storage from "../../storage/localStorage.mjs";
const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");

export function displayUsersProfile(user) {
  var usersAvatar;
  if (user.avatar === null || user.avatar === "") {
    var usersAvatar = "";
  } else {
    usersAvatar = user.avatar;
  }
  var usersBanner;
  if (user.banner === null || user.banner === "") {
    var usersBanner = "";
  } else {
    usersBanner = user.banner;
  }

  userNameContainer.innerHTML += `${user.name}`;
  bannerContainer.src = `${usersBanner}`;
  avatarContainer.src = `${usersAvatar}`;
}
