import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";

export async function registration(data, dispatch) {
  const URL = url + "auth/register";

  async function created(json) {
    dispatch({
      type: 'changeData',
      globalData: json.data,
    });
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
        name: data.name,
        email: data.email,
        password: data.pswrd,
        city: data.city,
        status: data.status,
        gestational_age: data.gestational,
        children: data.children,
      }),
    });
    const json = await response.json();
    json?.errors
      ? Alert.alert(
          "Ошибка",
          json.errors?.name
            ? "Имя: " + json.errors.name
            : null + json.errors?.city
            ? "Город: " + json.errors.city
            : null + json.errors?.email
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
