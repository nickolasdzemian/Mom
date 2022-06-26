import { url } from "./env";
import { Alert } from "react-native";

export async function commentPost(token, uuid, text, commentsCount, setCommentsCount) {
  const URL = url + "comment";

  function done() {
    setCommentsCount(commentsCount + 1);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        uuid: uuid,
        content: text,
        type: "post",
      }),
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
      : done();

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
