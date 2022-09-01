import { url } from "./env";
import { Alert } from "react-native";
import { userData } from "../storage/auth";
import { childsData } from "../storage/childs";
import { userLocale } from "../storage/locale";
import { auth } from "../firebase";
import { getAuth, deleteUser } from "firebase/auth";

export async function userDelete(token, global) {
  const URL = url + "user/delete/self";

  async function created() {
    const auth = getAuth();
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        console.log("User deleted");
      })
      .catch((error) => {
        alert(String(error));
      });
    global(undefined);
    await userData.clearAll();
    await childsData.clearAll();
    await userLocale.clearAll();
  }

  try {
    const response = await fetch(URL, {
      method: "DELETE",
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
