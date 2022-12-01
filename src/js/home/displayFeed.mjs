// Display feed at home page
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
    const react = post[i]._count.reactions;

    // Set placeholder if avatar is missing
    if (post[i].author.avatar === null || post[i].author.avatar === "") {
      var avatar =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    } else {
      var avatar = post[i].author.avatar;
    }

    // Set placeholder if post is missing image
    var cardImg;
    if (post[i].media === null || post[i].media === "") {
      var cardImg =
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
    } else {
      var cardImg = post[i].media;
    }

    feedContainer.innerHTML += `                   
                                <div class="card m-1 col-md-5 col-lg-3">
                                  <div class="card-body">
                                    <div class="d-flex flex-row align-items-center mb-3">
                                      <img id="avatar" src="${avatar}" class="me-3" />
                                      <a href="/users/profile/?name=${author}"><h4>${author}</h4></a>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <h5 class="card-title">${title}</h5>
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                    <img src="${cardImg}" class="card-img missingImg" />
                                    <p class="card-text">${text}</p>
                                    <div class="d-flex justify-content-between">
                                      <div class="d-flex">
                                        <i class="bi bi-chat-left-text me-1"></i>
                                        <p class="me-4">${comments}</p>
                                        <i class="bi bi-suit-heart me-1"></i>
                                        <p class="">${react}</p>
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
