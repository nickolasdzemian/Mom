import { url } from "./env";
import { Alert } from "react-native";

export async function libraryGet(token, setCalendars) {
  const URL = url + "calendar";

  function created(json) {
    setCalendars(json.data);
  }

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    json?.errors
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : created(json);

    console.log(json.data);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
