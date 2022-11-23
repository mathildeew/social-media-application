export function displayFeed(post) {
  const cardPosts = document.querySelector(".userPosts");

  for (let i = 0; i < post.length; i++) {
    const id = post[i].id;
    const title = post[i].title;
    const date = new Date(post[i].created).toLocaleDateString();
    const text = post[i].body;
    const comments = post[i]._count.comments;
    const react = post[i]._count.reactions;

    var cardImg;
    if (post[i].media === null) {
      var cardImg = "";
    } else {
      var cardImg = post[i].media;
    }

    if (i <= 50) {
      cardPosts.innerHTML += `
                              
                                <div class="card m-1 col-md-5 col-lg-3">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center mb-3">
                                            <h5 class="card-title">${title}</h5>
                                        </div>
                                        <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                        <img src="${cardImg}" class ="card-img" />
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
}
