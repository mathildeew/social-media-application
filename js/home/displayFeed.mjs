export function displayFeed(json) {
  const cardPosts = document.querySelector(".cardJSON");

  for (let i = 0; i < json.length; i++) {
    const cardTitle = json[i].title;
    const cardDate = json[i].created;
    const cardText = json[i].body;
    const cardComments = json[i]._count.comments;
    const cardReactions = json[i]._count.reactions;

    var cardImg;
    if (json[i].media === null) {
      var cardImg = "";
    } else {
      var cardImg = json[i].media;
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
