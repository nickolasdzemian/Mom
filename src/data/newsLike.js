import { url } from "./env";
import { Alert } from "react-native";

export async function newsLike(token, uuid) {
  const URL = url + "feed/like/" + uuid;

  async function created(json) {};

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    json?.errors || json?.message
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
