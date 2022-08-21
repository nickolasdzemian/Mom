import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { sec } from '../storage/sec';

export async function login(data, global) {
  const URL = url + "auth/login";

  const signin = (username) => {
    signInWithEmailAndPassword(auth, data.email, data.pswrd)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  async function created(json) {
    global(json.data);
    await userData.set("user", json);
    // await sec.set("sec", data.pswrd);
    seetTimeout(() => {signin(json.data.username);}, 500);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
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
