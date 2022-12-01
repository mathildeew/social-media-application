export function displayPost(post) {
  const author = document.querySelector("#author");
  const avatar = document.querySelector("#avatar");

  const title = document.querySelector("#title");
  const date = document.querySelector("#date");
  const img = document.querySelector("#image");
  const text = document.querySelector("#text");

  const postDate = new Date(post.created).toLocaleDateString();
  var cardImg;
  if (post.media === null) {
    var cardImg = "";
  } else {
    var cardImg = post.media;
  }

  var postAvatar;
  if (post.author.avatar === null || post.author.avatar === "") {
    var postAvatar =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  } else {
    var postAvatar = post.author.avatar;
  }

  avatar.src = postAvatar;
  author.innerHTML = `${post.author.name}`;
  title.innerHTML = `${post.title}`;
  date.innerHTML = `${postDate}`;
  img.src = `${cardImg}`;
  text.innerHTML = `${post.body}`;
  console.log(post);

  // Display comments
  const commentsContainer = document.querySelector("#comments");

  const comments = post.comments;

  if (comments.length !== 0) {
    for (let i = 0; i < comments.length; i++) {
      const date = new Date(comments[i].created).toLocaleDateString();
      commentsContainer.innerHTML += `
                                    <div class="rounded form-control d-flex flex-column ">
                                        <div class="d-flex justify-content-between">
                                            <h3>${comments[i].owner}</h3>
                                            <p class="text-muted">${date}</h4>
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
