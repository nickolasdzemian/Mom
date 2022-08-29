import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { childsData } from "../storage/childs";
import { userLocale } from "../storage/locale";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export async function logout(token, global) {
  const URL = url + "auth/logout";

  async function created() {
    global(undefined);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
    await userData.clearAll();
    await childsData.clearAll();
    await userLocale.clearAll();
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
