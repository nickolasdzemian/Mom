import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { newsAll } from "./";

export async function auth(global, setSplash, load) {
  const prevData = await userData.get("user");
  const token = prevData.data.token;
  const URL = url + "auth/user";

  function error(json) {
    Alert.alert(
      "Ошибка",
      json.errors?.email
        ? "Почта: " + json.errors.email
        : null + json.errors?.password
        ? "Пароль: " + json.errors.password
        : json?.message
        ? String(json.message)
        : "Возникла непредвиденная ошибка, повторите попытку позднее",
      [{ text: "OK" }]
    );
  }

  async function created(json) {
    let newData = json.data;
    newData = await { ...prevData.data, ...newData };
    await userData.set("user", {data: newData});
    global(newData);
    // Initialization homescreen [iOS fix]
    if (load) {await newsAll(newData, Date.now(), null, null, global)};
    // Starting the app
    setTimeout(() => setSplash(false), 1200);
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
    json?.errors || json?.message
      ? error(json)
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
