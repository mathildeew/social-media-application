export function displayUsers(users) {
  const usersContainer = document.querySelector("#allUsers");

  for (let i = 0; i < users.length; i++) {
    var avatar;
    if (users[i].avatar === null || users[i].avatar === "") {
      var avatar =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    } else {
      var avatar = users[i].avatar;
    }

    usersContainer.innerHTML += `
                                <div class="card m-1 col-md-3 col-lg-2">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <img src="${avatar}" class="postAvatar me-3">
                                            <a href="/users/profile/?name=${users[i].name}" class="card-title">${users[i].name}</a>
                                        </div>
                                        <p class="card-text"></p>
                                        <div class="d-flex flex-column">
                                            <div class="d-flex">
                                                <p class="me-1">Followers:</p>
                                                <p class="">${users[i]._count.followers}</p>
                                            </div>
                                            <div class="d-flex">
                                                <p class="me-1 mb-0">Following:</p>
                                                <p class="mb-0">${users[i]._count.following}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                               
                                `;
  }
}
