export function displayFeed(allPosts) {
  const cardPosts = document.querySelector(".cardJSON");

  for (let i = 0; i < allPosts.length; i++) {
    const cardTitle = allPosts[i].title;
    const cardDate = allPosts[i].created;
    const cardText = allPosts[i].body;
    const cardComments = allPosts[i]._count.comments;
    const cardReactions = allPosts[i]._count.reactions;

    var cardImg;
    if (allPosts[i].media === null) {
      var cardImg = "";
    } else {
      var cardImg = allPosts[i].media;
    }

    if (i <= 10) {
      cardPosts.innerHTML += `
                              <div class="card mb-3">
                                  <div class="card-body">
                                      <div class="d-flex align-items-center mb-3">
                                          <h5 class="card-title">${cardTitle}</h5>
                                      </div>
                                      <h6 class="card-subtitle mb-2 text-muted">${cardDate}</h6>
                                      <img src="${cardImg}" class ="card-img" />
                                      <p class="card-text">${cardText}</p>
                                      <i class="bi bi-chat-left-text"></i>
                                      <p class="d-inline me-4">${cardComments}</p>
                                      <i class="bi bi-suit-heart"></i>
                                      <p class="d-inline">${cardReactions}</p>
                                      </div>
                                  </div>
                              `;
    }
  }
}
