import { url } from "./env";
import { Alert } from "react-native";

export async function getComments(
  uuid,
  token,
  next,
  setNext,
  comments,
  setComments
) {
  let page = next ? next : "page=1";
  let type = "?type=post&";
  const URL = url + "comment/";

  async function created(json) {
    let feed = json.data;
    if (json?.links?.next != null) {
      const num = json.links.next.slice(-5).match(/\d+/g);
      page = `page=${num[0]}`;
      setNext(page);
    } else {
      setNext(null);
    }

    if (next) {
      feed = [...comments, ...feed];
      setComments(feed);
    } else {
      setComments(feed);
    }
  }

  try {
    const response = await fetch(URL + uuid + type + page, {
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
      : created(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
