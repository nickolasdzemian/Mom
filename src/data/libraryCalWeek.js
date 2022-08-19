import { url } from "./env";
import { Alert } from "react-native";

export async function libraryCalWeek(token, id, week, navigation, title) {
  const URL = url + "calendar-week/" + `${id}/${week}`;

  function created(json) {
    navigation.navigate("CalendarPostScreen", {
      data: json.data,
      title: title,
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
