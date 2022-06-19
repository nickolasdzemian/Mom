import { url } from "./env";
import { Alert } from "react-native";

export async function newsAll(globalData, time, next, setNext, global, searchW) {
  let page = next ? next : "?page=1";
  let timestamp = `&timestamp=${time}`;
  let search = searchW ? `&search=${searchW}` :`&search=`;
  const URL = url + "feed/all";

  async function created(json) {
    let feed = json.data;
    if (json?.links?.next != null) {
      page = (json?.links?.next).slice(1);
      if (next) {setNext(page)};
    };
    if (next) {
        feed = [...globalData?.feed, ...feed];
    };
    global({ ...globalData, feed: feed });
  }

  try {
    const response = await fetch(URL + page + timestamp + search, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${globalData.token}`,
      },
    });
    const json = await response.json();
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
