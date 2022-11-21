export function displayUser() {
  const username = document.querySelector("#username");
  const avatar = document.querySelector("#avatarPic");
  const banner = document.querySelector("#banner");

  const name = localStorage.getItem("name");
  const avatarLink = localStorage.getItem("avatar");
  const bannerLink = localStorage.getItem("banner");

  username.innerHTML = `@${name}`;
  avatar.src = `${avatarLink}`;
  banner.src = `${bannerLink}`;
  console.log(bannerLink);
}
