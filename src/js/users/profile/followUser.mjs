import { followUserUrl } from "../../api/apiUrls.mjs";
// import { putAPI } from "../../api/APIcalls/putAPI.mjs";

export function followUser() {
  const followUserBtn = document.querySelector("#followUser");

  followUserBtn.addEventListener("click", (event) => {
    // putAPI(followUserUrl);
  });
}
