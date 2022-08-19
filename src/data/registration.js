import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { sec } from '../storage/sec';

export async function registration(data, global) {
  const URL = url + "auth/register";

  // FireBase
  const register = () => {
    createUserWithEmailAndPassword(auth, data.email, data.pswrd)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        updateProfile(user, {
          displayName: data.name,
        })
          .then(() => {
            // Login FireBase
            signInWithEmailAndPassword(auth, data.email, data.pswrd)
              .then((userCredential) => {})
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  // ---

  async function created(json) {
    global(json.data);
    await userData.set("user", json);
    // await sec.set("sec", data.pswrd);
    register();
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
