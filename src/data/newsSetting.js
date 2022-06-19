import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { newsAll } from "./";

export async function newsSetting(globalData, data, global) {
  const URL = url + "feed/settings";
  const { from_pregnant, from_planing, from_mom } = data;

  async function created(json) {
    const newData = { ...globalData, feed_settings: json.data };
    global(newData);
    await userData.set("user", {
      data: newData,
    });
    newsAll(newData, Date.now(), null, null, global);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${globalData.token}`,
      },
      body: JSON.stringify({
        from_pregnant: from_pregnant,
        from_planing: from_planing,
        from_mom: from_mom,
        _method: "PUT",
      }),
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
