import { url } from "./env";
import { Alert } from "react-native";

export async function getUser(token, username, navigation) {
  const URL = url + "user/profile/" + username;

  async function created(json) {
    navigation.navigate("UserScreen", { info: json.data, token: token });
  }

  try {
    const response = await fetch(URL, {
      method: "GET",
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
