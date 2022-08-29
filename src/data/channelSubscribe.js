import { url } from "./env";
import { Alert } from "react-native";

export async function chSub(token, action, uuid) {
  const URL = url + "channel/" + uuid + action;

  function created() {
    const msg = action == "/subscribe" ? "подписались" : "отписались";
    Alert.alert("Выполнено", `Вы успешно ${msg}`, [{ text: "Ура!" }]);
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
    created();
    console.log(response);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
