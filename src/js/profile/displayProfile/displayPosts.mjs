export function displayPosts(post) {
  const usersPost = document.querySelector("#userPost");

  for (let i = 0; i < post.length; i++) {
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
                              <div class="d-flex align-items-center mb-3">
                                <h5 class="card-title">${title}</h5>
                              </div>
                              <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                              <img src="${postImg}" />
                              <p class="card-text">${postContent}</p>
                              <div class="d-flex justify-content-between">
                                <div>
                                  <i class="bi bi-chat-left-text"></i>
                                  <p class="d-inline me-4">${comments}</p>
                                  <i class="bi bi-suit-heart"></i>
                                  <p class="d-inline me-4">${reactions}</p>
                                </div>
                                <div>
                                  <a href="" class="me-4"
                                    ><i class="bi bi-pencil-square"></i
                                  ></a>
                                  <a href=""><i class="bi bi-trash3"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                            `;
  }
}
