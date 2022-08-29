import { url } from "./env";
import { Alert } from "react-native";

let users = [];

export async function getUserChat(token, chats, setUsers) {
  const URL = url + "user/profile/";

  for (let i = 0; i < chats.length; i++) {
    try {
      const response = await fetch(URL + chats[i].username, {
        method: "GET",
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
        : null;
      users = users.concat(json.data);
      if (i == chats.length - 1) {
        await setUsers(users);
        setTimeout(() => {
          users = [];
        }, 10);
        console.log(users, "setUsers");
      }
      console.log(json);
    } catch (e) {
      alert(String(e));
      console.warn(e);
    }
  }
}
