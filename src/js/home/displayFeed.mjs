export function displayFeed(post) {
  const cardPosts = document.querySelector(".cardJSON");

  for (let i = 0; i < post.length; i++) {
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

    if (i <= 10) {
      cardPosts.innerHTML += `
                              <div class="card mb-3">
                                  <div class="card-body">
                                      <div class="d-flex align-items-center mb-3">
                                          <h5 class="card-title">${title}</h5>
                                      </div>
                                      <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                                      <img src="${cardImg}" class ="card-img" />
                                      <p class="card-text">${text}</p>
                                      <i class="bi bi-chat-left-text"></i>
                                      <p class="d-inline me-4">${comments}</p>
                                      <i class="bi bi-suit-heart"></i>
                                      <p class="d-inline">${react}</p>
                                      </div>
                                  </div>
                              `;
    }
  }
}
