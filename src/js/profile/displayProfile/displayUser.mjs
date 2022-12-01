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

  if (!following.length) {
    followingContainer.innerHTML = `
                                  <div class="col-12">
                                    <p>Following no one</p>
                                  </div>  
                                  `;
  } else {
    for (let i = 0; i < following.length; i++) {
      followingContainer.innerHTML += `
                                    <div class="col-4">
                                      <img src="${following[i].avatar}"
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
      followersContainer.innerHTML += `
                                    <div class="col-4">
                                      <img src="${followers[i].avatar}"
                                        class="rouded img-fluid friendPic"
                                      />
                                      <p>${followers[i].name}</p>
                                    </div>  
                                  `;
    }
  }
}
