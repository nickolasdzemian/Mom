import { url } from "./env";
import { Alert } from "react-native";

export async function userNewPassword(token, data) {
  const URL = url + "user/password";

  function done() {
    Alert.alert("Выполнено", "Данные успешно обновлены", [{ text: "OK" }]);
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
        password: data.oldpswrd,
        new_password: data.pswrd0,
        new_password_confirmation: data.pswrd1,
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
      : done(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
