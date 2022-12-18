import * as storage from "../../storage/localStorage.mjs";

const name = storage.get("name");
const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");
const followUserBtn = document.querySelector(".followUser");

/**
 * Displays the user information at profile page.
 * @param {*} user The API content from the server containing user information.
 * @example
 * ```
 * // Displays info thats stored in localstorage, followers and followed.
 * // Followers and following is retrieved from the server.
 * displayUser(user);
 * ```
 */
export function displayUser(user) {
  document.title += ` ${user.name}`;
  userNameContainer.textContent = user.name;

  // Keep value of avatar and banner at edit profile
  if (location.pathname === "/profile/edit/") {
    const currentAvatar = document.querySelector("#newAvatar");
    const currentBanner = document.querySelector("#newBanner");
    currentAvatar.value = user.avatar;
    currentBanner.value = user.banner;
  }

  // Set placeholder if banner is missing
  if (user.banner === null || user.banner === "") {
    var banner =
      "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  } else {
    banner = user.banner;
  }
  bannerContainer.src = banner;

  // Set placeholder if avatar is missing
  if (user.avatar === null || user.avatar === "") {
    var avatar =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  } else {
    var avatar = user.avatar;
  }
  avatarContainer.src = avatar;
  avatarContainer.classList.add("rounded-circle", "border", "border-primary");

  const followingContainer = document.querySelector("#followingContainer");
  const followersContainer = document.querySelector("#followersContainer");
  const following = user.following;
  const followers = user.followers;
  let followingAvatar;
  let followersAvatar;

  // Display following
  if (!following.length) {
    followingContainer.innerHTML = `
                                  <div class="col-12">
                                    <p>Following no one</p>
                                  </div>
                                  `;
  } else {
    for (let i = 0; i < following.length; i++) {
      // Set placeholder if following avatar is missing
      if (following[i].avatar === null || following[i].avatar === "") {
        followingAvatar =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      } else {
        followingAvatar = following[i].avatar;
      }

      // Display following
      const followingContent = document.createElement("div");
      followingContent.classList.add(
        "col-4",
        "d-flex",
        "flex-column",
        "align-items-center",
        "mb-4"
      );
      followingContainer.append(followingContent);
      const followingImg = document.createElement("img");
      followingImg.src = followingAvatar;
      followingImg.classList.add(
        "rounded-circle",
        "img-fluid",
        "friendPic",
        "border",
        "border-primary"
      );
      const followingLink = document.createElement("a");
      followingLink.classList.add("text-decoration-none", "text-dark");
      followingLink.href = `/users/profile/?name=${following[i].name}`;
      followingLink.textContent = following[i].name;
      followingContent.append(followingImg, followingLink);
    }
  }

  if (!followers.length) {
    followersContainer.innerHTML = `
                                    <div class="col-12">
                                      <p>No followers</p>
                                    </div>  
                                    `;
  } else {
    for (let i = 0; i < followers.length; i++) {
      // Follow & unfollow button
      if (followers[i].name === name) {
        followUserBtn.innerHTML = "Unfollow";
      }

      // Set placeholder if followers avatar is missing
      if (followers[i].avatar === null || followers[i].avatar === "") {
        followersAvatar =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      } else {
        followersAvatar = followers[i].avatar;
      }

      // Display followers
      const followersContent = document.createElement("div");
      followersContent.classList.add(
        "col-4",
        "d-flex",
        "flex-column",
        "align-items-center",
        "mb-4"
      );
      followersContainer.append(followersContent);
      const followersImg = document.createElement("img");
      followersImg.src = followersAvatar;
      followersImg.classList.add(
        "rounded-circle",
        "img-fluid",
        "friendPic",
        "border",
        "border-primary"
      );
      const followersLink = document.createElement("a");
      followersLink.classList.add("text-decoration-none", "text-dark");
      followersLink.href = `/users/profile/?name=${followers[i].name}`;
      followersLink.textContent = followers[i].name;
      followersContent.append(followersImg, followersLink);
    }
  }
}
