import { editMediaUrl } from "../../api/apiUrls.mjs";
import { putAPI } from "../../api/APIcalls/putAPI.mjs";

export function editMedia() {
  const updateForm = document.querySelector("#updateMediaForm");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const putContent = {
      banner: updateForm.banner.value,
      avatar: updateForm.avatar.value,
    };
    putAPI(editMediaUrl, putContent);
  });
}
