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
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
    } else {
      var postImg = posts[i].media;
    }

    usersPost.innerHTML += `
                            <div class="card mb-3">
                              <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                  <h5 class="card-title">${title}</h5>
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                <img src="${postImg}" class="card-img" />
                                <div class="d-flex justify-content-between">
                                  <div class="d-flex">
                                    <i class="bi bi-chat-left-text me-1"></i>
                                    <p class="me-4">${comments}</p>
                                    <i class="bi bi-suit-heart me-1"></i>
                                    <p class="">${reactions}</p>
                                  </div>
                                </div>
                                <a class="btn btn-primary rounded-pill" href="/home/post/?id=${id}">
                                  View post
                                </a>
                              </div>
                            </div>
                            `;
  }
}
