import * as storage from "../storage/localStorage.mjs";

export function displayPost(post) {
  const postContainer = document.querySelector("#postContainer");

  const postDate = new Date(post.created).toLocaleDateString();
  const commentsContainer = document.querySelector("#comments");

  const reactionsContainer = document.querySelector("#reactions");
  const commentsH2 = document.querySelector("#commentsh2");

  // Set placeholder if image is missing
  var cardImg;
  if (post.media === null || post.media === "") {
    var cardImg =
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
  } else {
    var cardImg = post.media;
  }

  // Set placeholder if avatar is missing
  var postAvatar;
  if (post.author.avatar === null || post.author.avatar === "") {
    var postAvatar =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  } else {
    var postAvatar = post.author.avatar;
  }

  console.log(post);

  // Display post
  postContainer.innerHTML = `
                            <div class="d-flex flex-row align-items-center justify-content-between mb-3">
                              <div id="userDetails" class="d-flex align-items-center">
                                <img id="avatar" src="${postAvatar}" class="me-1 rounded-circle border border-primary" />
                                  <a href="/users/profile/?name=${post.author.name}">${post.author.name}</a>
                              </div>
                            </div>
                            <p class="card-title fs-5 fw-semibold">${post.title}</p>
                            <img src="${cardImg}" class="card-img border-dark missingImg mb-2" />
                            <p class="card-text">${post.body}</p>
                            <div class="d-flex justify-content-between align-items-center">
                              <p class="card-subtitle fs-6 text-muted mb-2">${postDate}</p>
                            </div>
                            `;

  // Display comments
  commentsH2.innerHTML += ` (${post._count.comments})`;

  const comments = post.comments;

  if (comments.length !== 0) {
    for (let i = 0; i < comments.length; i++) {
      const date = new Date(comments[i].created).toLocaleDateString();
      commentsContainer.innerHTML += `
                                      <div class="d-flex flex-column rounded form-control mb-3">
                                        <div class="d-flex justify-content-between">
                                          <a href="/users/profile/?name=${comments[i].owner}">
                                            <h5>${comments[i].owner}</h5>
                                          </a>
                                          <p class="text-muted">${date}</p>
                                        </div>
                                        <p>${comments[i].body}</p>
                                      </div>
                                      `;
    }
  } else {
    commentsContainer.innerHTML = `
                                  <div class="rounded form-control d-flex align-items-center">
                                    <p>No comments yet. Be the first one!</p>
                                  </div>
                                  `;
  }

  // Display reactions
  const reactions = post.reactions;
  for (let i = 0; i < reactions.length; i++) {
    reactionsContainer.innerHTML += `
                                    <div class="d-flex col-2 col-sm-1 col-lg-2">
                                      <p class="reactEmoji">${reactions[i].symbol}</p>
                                      <p>(${reactions[i].count})</p>
                                    </div>
                                   `;
  }
}
