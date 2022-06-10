import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";

export async function login(data, dispatch, token) {
  const URL = url + "auth/login";

  async function created(json) {
    dispatch({
      type: 'changeData',
      globalData: { auth: true, user: json}
    });
    await userData.set("user", json);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: token ? {
        Accept: "application/json",
        "Content-Type": "application/json",
      } : {
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
            : null,
          [{ text: "OK" }]
        )
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
