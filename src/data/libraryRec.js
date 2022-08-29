import { url } from "./env";
import { Alert } from "react-native";

export async function libRec(token, setRec) {
  const URL = url + "user/newbie";

  function done(json) {
    setRec(json.data);
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
    json?.errors?.content
      ? Alert.alert("Ошибка", json?.errors?.content[0], [{ text: "OK" }])
      : json?.message
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : done(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
