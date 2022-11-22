import { editMediaUrl } from "../../api/apiUrls.mjs";
import { editMediaAPI } from "./editAPI.mjs";

export function editMedia() {
  const updateForm = document.querySelector("#updateMediaForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mediaContent = {
      banner: updateForm.banner.value,
      avatar: updateForm.avatar.value,
    };
    editMediaAPI(editMediaUrl, mediaContent);
  });
}
