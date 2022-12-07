export function displayPosts(posts) {
  const usersPost = document.querySelector("#userPost");

  for (let i = 0; i < posts.length; i++) {
    const id = posts[i].id;
    const title = posts[i].title;
    const date = new Date(posts[i].created).toLocaleDateString();
    const postContent = posts[i].body;
    const comments = posts[i]._count.comments;
    const reactions = posts[i]._count.reactions;
    var postImg;
    if (posts[i].media === null || posts[i].media === "") {
      var postImg =
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
    } else {
      var postImg = posts[i].media;
    }

    usersPost.innerHTML += `
                            <div class="card mb-3">
                              <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                  <h5 class="card-title">${title}</h5>
                                  <a href="/profile/post/?id=${id}"><i class="bi bi-pencil-square"></i></a>
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                <img src="${postImg}" class="card-img" />
                                <p class="card-text">${postContent}</p>
                                <i class="bi bi-chat-left-text"></i>
                                <p class="d-inline me-4">${comments}</p>
                                <i class="bi bi-suit-heart"></i>
                                <p class="d-inline me-4">${reactions}</p>
                            </div>
                          </div>
                            `;
  }
}
