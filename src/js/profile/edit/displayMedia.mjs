export function displayMedia() {
  const currentBanner = document.querySelector("#currentBanner");
  const currentAvatar = document.querySelector("#currentAvatar");

  const avatar = localStorage.getItem("avatar");
  const banner = localStorage.getItem("banner");

  currentAvatar.src = `${avatar}`;
  console.log(currentAvatar.src);

  // currentBanner.src = `${banner}`;
}
