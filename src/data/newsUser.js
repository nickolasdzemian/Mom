import { url } from "./env";
import { Alert, DeviceEventEmitter } from "react-native";

export async function newsUser(
  globalData,
  time,
  next,
  setNext,
  global,
  searchW,
  username,
  news,
  setNews
) {
  let page = next ? next : "?page=1";
  let timestamp = `&timestamp=${Math.round(time / 1000)}`;
  const URL = url + "feed/user/" + username;

  async function created(json) {
    let feed = json.data;
    if (json?.links?.next != null) {
      const num = json.links.next.slice(-5).match(/\d+/g);
      page = `?page=${num[0]}`;
      setNext
        ? setNext(page)
        : DeviceEventEmitter.emit("event.next.user", page);
    } else {
      setNext
        ? setNext(null)
        : DeviceEventEmitter.emit("event.next.user", null);
    }
    if (next) {
      feed = [...news, ...feed];
    }
    setNews(feed);
  }

  try {
    const response = await fetch(URL + page + timestamp, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${globalData.token}`,
      },
    });
    const json = await response.json();
    console.log(response);
    json?.errors || json?.message
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
