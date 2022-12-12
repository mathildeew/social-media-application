import * as storage from "../../storage/localStorage.mjs";

export function displayUserPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    const usersPost = document.querySelector("#userPost");

    const id = posts[i].id;
    const title = posts[i].title;
    const date = new Date(posts[i].created).toLocaleDateString();
    const postContent = posts[i].body;
    const comments = posts[i]._count.comments;
    const reactions = posts[i]._count.reactions;

    // Set placeholder if post is missing image
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
                                <div class="d-flex justify-content-end">
                                  <a href="/users/post/?id=${id}">
                                    <i class="bi bi-box-arrow-up-right" class="text-align-right"></i>
                                  </a>
                                </div>
                                <p class="card-title fs-5 fw-semibold">${title}</p>
                                <p class="card-subtitle fs-6 text-muted">${date}</p>
                                <img src="${postImg}" class="card-img" />
                                <div class="d-flex">
                                  <i class="bi bi-chat-left-text me-1"></i>
                                  <p class="me-4">${comments}</p>
                                  <i class="bi bi-suit-heart me-1"></i>
                                  <p class="">${reactions}</p>
                                </div>
                              </div>
                            </div>                         
                           `;
  }
}
