export function displayPosts(post) {
  const usersPost = document.querySelector("#userPost");

  for (let i = 0; i < post.length; i++) {
    const id = post[i].id;
    const title = post[i].title;
    const date = new Date(post[i].created).toLocaleDateString();
    const postContent = post[i].body;
    const comments = post[i]._count.comments;
    const reactions = post[i]._count.reactions;
    var postImg;
    if (post[i].media === null) {
      var postImg = "";
    } else {
      var postImg = post[i].media;
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
