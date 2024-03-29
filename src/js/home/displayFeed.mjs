/**
 * Displays feed at home page with 100 posts
 * @param {*} post API content with the posts
 * @example
 * ```
 * // Displays 100 of the latest posts.
 * // Placeholder if image is missing.
 * displayFeed(post);
 * ```
 */
export function displayFeed(post) {
  const feedContainer = document.querySelector("#feedContainer");
  feedContainer.innerHTML = "";

  for (let i = 0; i < post.length; i++) {
    const author = post[i].author.name;
    const id = post[i].id;
    const title = post[i].title;
    const date = new Date(post[i].created).toLocaleDateString();
    const text = post[i].body;
    const comments = post[i]._count.comments;
    const reactions = post[i]._count.reactions;

    // Set placeholder if avatar is missing
    let avatar;
    if (post[i].author.avatar === null || post[i].author.avatar === "") {
      avatar =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    } else {
      avatar = post[i].author.avatar;
    }

    // Set placeholder if post is missing image
    let postImg;
    if (post[i].media === null || post[i].media === "") {
      postImg =
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
    } else {
      postImg = post[i].media;
    }

    feedContainer.innerHTML += `
                                <div class="card m-1 col-md-5 col-lg-3 mb-3">
                                  <div class="card-body">
                                    <div class="d-flex flex-row align-items-center justify-content-between mb-3">
                                      <div id="userDetails" class="d-flex align-items-center">
                                        <img id="avatar" src="${avatar}" class="me-1 rounded-circle border border-primary" />
                                        <a href="/users/profile/?name=${author}">${author}</a>
                                      </div>
                                      <a href="/users/post/?id=${id}">
                                        <i class="bi bi-box-arrow-up-right"></i>
                                      </a>
                                    </div>
                                    <p class="card-title fs-5 fw-semibold">${title}</p>
                                    <img src="${postImg}" class="card-img border-dark missingImg mb-2" />
                                    <p class="card-text">${text}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <i class="bi bi-chat-left-text me-1"></i>
                                        <p class="me-4">${comments}</p>
                                        <i class="bi bi-suit-heart me-1"></i>
                                        <p class="">${reactions}</p>
                                      </div>
                                      <p class="card-subtitle fs-6 text-muted mb-2">${date}</p>
                                    </div>
                                  </div>
                                </div>
                              `;
  }
}
