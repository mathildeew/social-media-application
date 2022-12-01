const bannerContainer = document.querySelector("#bannerContainer");
const avatarContainer = document.querySelector("#avatarContainer");
const userNameContainer = document.querySelector("#userNameContainer");

export function displayUser(user) {
  userNameContainer.innerHTML = user.name;
  bannerContainer.src = user.banner;
  avatarContainer.src = user.avatar;

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
      // Set placeholder if avatar is missing
      var followingAvatar;
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

  // Display followers
  if (!followers.length) {
    followersContainer.innerHTML = `
                                    <div class="col-12">
                                      <p>No followers</p>
                                    </div>  
                                    `;
  } else {
    for (let i = 0; i < followers.length; i++) {
      // Set placeholder if avatar is missing
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
