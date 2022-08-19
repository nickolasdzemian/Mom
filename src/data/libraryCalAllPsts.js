import { url } from "./env";
import { Alert } from "react-native";

export async function libraryCalendarAllPosts(token, id, posts, setPosts) {
  let URL = url + `calendar-post/${id}/posts?page=1`;

  function created(json) {
    if (posts) {
      setPosts([...posts, ...json.data]);
    } else {
      setPosts(json.data);
    }
  }

  while (URL) {
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
      URL = json?.links?.next || null;
      json?.errors
        ? Alert.alert(
            "Ошибка",
            "Возникла непредвиденная ошибка, повторите попытку позднее",
            [{ text: "OK" }]
          )
        : created(json);

      console.log(json.data);
    } catch (e) {
      alert(String(e));
      console.warn(e);
    }
  }
}
