export function displayPost(post) {
  const title = document.querySelector("#currentTitle");
  const date = document.querySelector("#currentDate");
  const img = document.querySelector("#currentImg");
  const text = document.querySelector("#currentText");

  title.innerHTML = `Current title: ${post.title}`;
  date.innerHTML = `Date created: ${post.created}`;
  img.src = `${post.media}`;
  text.innerHTML = `Current text: ${post.body}`;
}
