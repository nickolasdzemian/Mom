import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";

export async function login(data, global) {
  const URL = url + "auth/login";

  async function created(json) {
    global(json.data);
    await userData.set("user", json);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.pswrd,
      }),
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
