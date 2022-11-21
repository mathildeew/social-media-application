import * as storage from "../../storage/localStorage.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";

export async function getProfileMediaApi(url) {
  try {
    const token = storage.get("token");

    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, getData);
    const userProfile = await response.json();

    console.log(userProfile);
    displayMedia(userProfile);
  } catch (error) {
    console.log(error);
  }
}

export function displayMedia(userProfile) {
  const currentBanner = document.querySelector("#currentBanner");
  const currentAvatar = document.querySelector("#currentAvatar");

  currentAvatar.src = userProfile.avatar;
  currentBanner.src = userProfile.banner;
  console.log(userProfile.banner);
  console.log(userProfile.avatar);
}

export async function editMedia(url, postContent) {
  try {
    const token = storage.get("token");

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postContent),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

export function editProfile() {
  const updateForm = document.querySelector("#updateMediaForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mediaContent = {
      banner: updateForm.banner.value,
      avatar: updateForm.avatar.value,
    };
    const name = localStorage.getItem("name");
    const mediaProfileUrl = `${baseUrl}/api/v1/social/profiles/${name}/media`;
    editMedia(mediaProfileUrl, mediaContent);
  });
}
