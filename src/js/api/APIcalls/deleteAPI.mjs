export async function deleteAPI(url) {
  try {
    const token = storage.get("token");

    const deleteData = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, deleteData);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
