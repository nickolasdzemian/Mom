import { url } from "./env";
import { Alert } from "react-native";

export async function userSubscribe(token, username, sub, setSub, subCount, setSubCount) {
  const URL = url + "user/subscription/" + username;

  async function created() {
    setSub(!sub);
    setSubCount(!sub ? subCount + 1 : subCount - 1);
  }

  try {
    const response = await fetch(URL, {
      method: !sub ? "POST" : "DELETE",
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
