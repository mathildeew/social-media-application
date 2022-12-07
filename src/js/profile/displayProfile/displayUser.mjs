import * as storage from "../../storage/localStorage.mjs";

const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");
const followUserBtn = document.querySelector(".followUser");
const unfollowUserBtn = document.querySelector(".unfollowUser");

export function displayUser(user) {
  document.title += user.name;
  userNameContainer.innerHTML = user.name;

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

  const followingContainer = document.querySelector("#followingContainer");
  const followersContainer = document.querySelector("#followersContainer");
  const following = user.following;
  const followers = user.followers;
  var followingAvatar;
  var followersAvatar;

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
      followingContainer.innerHTML += `
                                    <div class="col-4">
                                      <img src="${followingAvatar}"
                                        class="rouded img-fluid friendPic"
                                      />
                                      <p>${following[i].name}</p>
                                    </div>  
                                  `;
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
      const userName = storage.get("name");
      if (followers[i].name === userName) {
        followUserBtn.innerHTML = "Unfollow";
      }

      // Set placeholder if followers avatar is missing
      if (followers[i].avatar === null || followers[i].avatar === "") {
        followersAvatar =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      } else {
        followersAvatar = followers[i].avatar;
      }

      followersContainer.innerHTML += `
                                    <div class="col-4">
                                      <img src="${followersAvatar}"
                                        class="rouded img-fluid friendPic"
                                      />
                                      <p>${followers[i].name}</p>
                                    </div>  
                                  `;
    }
  }
}
