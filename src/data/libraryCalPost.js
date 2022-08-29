import { url } from "./env";
import { Alert } from "react-native";

export async function librarySinglePost(token, id, navigation, title) {
  const URL = url + "calendar-post/" + `${id}`;

  function created(json) {
    navigation.navigate("CalendarPostScreen", {
      data: json.data,
      title: title?.substring(0, 25) + "...",
    });
  }

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    json?.errors
      ? Alert.alert("Ошибка", "Нет данных для отображения", [{ text: "OK" }])
      : created(json);

    console.log(json.data);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
