export function displayPost(post) {
  const title = document.querySelector("#currentTitle");
  const date = document.querySelector("#currentDate");
  const img = document.querySelector("#currentImg");
  const text = document.querySelector("#currentText");

  var cardImg;
  if (post.media === null) {
    var cardImg = "";
  } else {
    var cardImg = post.media;
  }

  title.innerHTML = `Current title: ${post.title}`;
  date.innerHTML = `Date created: ${post.created}`;
  img.src = `${cardImg}`;
  text.innerHTML = `Current text: ${post.body}`;
}
