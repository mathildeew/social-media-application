export function displayPost(post) {
  const title = document.querySelector("#currentTitle");
  const date = document.querySelector("#currentDate");
  const img = document.querySelector("#currentImg");
  const text = document.querySelector("#currentText");

  const postDate = new Date(post.created).toLocaleDateString();
  var cardImg;
  if (post.media === null) {
    var cardImg = "";
  } else {
    var cardImg = post.media;
  }

  title.innerHTML = `${post.title}`;
  date.innerHTML = `${postDate}`;
  img.src = `${cardImg}`;
  text.innerHTML = `${post.body}`;
}
