import secret from "../config/secret";

async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": secret.x_app_id,
      "x-app-key": secret.x_app_key,
    },
  });
  return response.json();
}

export default getData;
