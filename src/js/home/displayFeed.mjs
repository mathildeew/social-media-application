export function displayFeed(post) {
  const cardPosts = document.querySelector(".userPosts");
  cardPosts.innerHTML = "";

  for (let i = 0; i < post.length; i++) {
    const author = post[i].author.name;
    const id = post[i].id;
    const title = post[i].title;
    const date = new Date(post[i].created).toLocaleDateString();
    const text = post[i].body;
    const comments = post[i]._count.comments;
    const react = post[i]._count.reactions;

    var avatar;
    if (post[i].author.avatar === null || post[i].author.avatar === "") {
      var avatar =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    } else {
      var avatar = post[i].author.avatar;
    }

    var cardImg;
    if (post[i].media === null || post[i].media === "") {
      var cardImg =
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
    } else {
      var cardImg = post[i].media;
    }

    cardPosts.innerHTML += `                   
                            <div class="card m-1 col-md-5 col-lg-3">
                              <div class="card-body">
                                <div class="d-flex flex-row align-items-center mb-3">
                                  <img src="${avatar}" class="postAvatar me-3">
                                  <h4>${author}</h4>
                                </div>
                                <div class="d-flex align-items-center">
                                  <h5 class="card-title">${title}</h5>
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                <img src="${cardImg}" class="card-img missingImg" />
                                <p class="card-text">${text}</p>
                                  <div class="d-flex justify-content-between">
                                    <div>
                                      <i class="bi bi-chat-left-text"></i>
                                      <p class="d-inline me-4">${comments}</p>
                                      <i class="bi bi-suit-heart"></i>
                                      <p class="d-inline">${react}</p>
                                    </div>
                                    <a href="/home/post/?id=${id}">View post</a>
                                  </div>
                                </div>
                              </div>
                              `;
  }
}

// ØVERTSTE LINJE `
