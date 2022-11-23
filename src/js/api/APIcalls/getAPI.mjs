const token = localStorage.getItem("token");

export const authDataArray = [
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
];
