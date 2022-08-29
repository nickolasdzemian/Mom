import { url } from "./env";
import { Alert, DeviceEventEmitter } from "react-native";

export async function chPostsAll(
  globalData,
  time,
  next,
  setNext,
  channelData,
  setChannelData,
  searchW,
  type = 2,
  uuid
) {
  const types = ["all", "subscribers", "channels"];
  let page = next ? next : "?page=1";
  let timestamp = `&timestamp=${Math.round(time / 1000)}`;
  let search = searchW ? `&search=${searchW}` : `&search=`;
  //const URL = url + "feed/" + types[type];
  const URL = url + "channel/" + uuid + "/posts";

  async function created(json) {
    let feed = json.data;
    if (json?.links?.next != null) {
      const num = json.links.next.slice(-5).match(/\d+/g);
      page = `?page=${num[0]}`;
      setNext ? setNext(page) : DeviceEventEmitter.emit("event.nextCh", page);
    } else {
      setNext ? setNext(null) : DeviceEventEmitter.emit("event.nextCh", null);
    }
    if (next) {
      feed = [...channelData, ...feed];
    }
    setChannelData(feed);
  }

  try {
    const response = await fetch(URL, {
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
