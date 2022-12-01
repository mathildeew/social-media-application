import * as storage from "../../storage/localStorage.mjs";
const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");
const followingContainer = document.querySelector("#following");
const followersContainer = document.querySelector("#followers");

export function displaySingleUserProfile(user) {
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

  console.log(user);

  userNameContainer.innerHTML += `${user.name}`;
  bannerContainer.src = `${usersBanner}`;
  avatarContainer.src = `${usersAvatar}`;
  followersContainer.innerHTML = user._count.followers;
  followingContainer.innerHTML = user._count.following;
}
