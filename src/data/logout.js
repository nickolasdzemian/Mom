import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { childsData } from "../storage/childs";

export async function logout(token, global) {
  const URL = url + "auth/logout";

  async function created() {
    global(undefined);
    await userData.clearAll();
    await childsData.clearAll();
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    json?.errors
      ? Alert.alert(
          "Ошибка",
          json.errors?.email
            ? "Почта: " + json.errors.email
            : null + json.errors?.password
            ? "Пароль: " + json.errors.password
            : "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
