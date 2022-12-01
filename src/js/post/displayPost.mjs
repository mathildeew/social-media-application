export function displayPost(post) {
  const author = document.querySelector("#author");
  const avatar = document.querySelector("#avatar");

  const title = document.querySelector("#title");
  const date = document.querySelector("#date");
  const img = document.querySelector("#image");
  const text = document.querySelector("#text");
  const link = document.querySelector("#userprofileLink");
  const commentsCount = document.querySelector("#postComments");
  const reactsCount = document.querySelector("#postReacts");
  const postDate = new Date(post.created).toLocaleDateString();

  // Set placeholder if post is missing image
  var cardImg;
  if (post.media === null) {
    var cardImg =
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
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

  if (location.pathname === "/home/post/") {
    link.href = `/users/profile/?name=${post.author.name}`;
  }
  avatar.src = postAvatar;
  author.innerHTML = post.author.name;
  title.innerHTML = post.title;
  date.innerHTML = postDate;
  img.src = cardImg;
  text.innerHTML = post.body;
  console.log(post);

  commentsCount.innerHTML = post._count.comments;
  reactsCount.innerHTML = post._count.reactions;

  // Display comments
  const commentsContainer = document.querySelector("#comments");

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
}
