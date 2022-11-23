import * as storage from "../../storage/localStorage.mjs";

const path = location.pathname;

export async function putAPI(url, putContent) {
  try {
    const token = storage.get("token");

    const putData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(putContent),
    };

    const response = await fetch(url, putData);
    const json = await response.json();

    if (path === "/profile/edit/") {
      storage.set("avatar", json.avatar);
      storage.set("banner", json.banner);
    }
    console.log(json);

    // location.reload();
  } catch (error) {
    console.log(error);
  }
}
