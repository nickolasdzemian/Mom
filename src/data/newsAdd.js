import { url } from "./env";
import { Alert, DeviceEventEmitter } from "react-native";

export async function newsAdd(token, set, channel, text, assets, navigation) {
  const URL = url + "feed";

  let formdata = new FormData();
  formdata.append("type", set.type ? "channel" : "feed");
  formdata.append("comments_disabled", set.comments_disabled ? "1" : "0");
  formdata.append("comments_hidden", set.comments_hidden ? "1" : "0");
  formdata.append("subscribers_only", set.subscribers_only ? "1" : "0");
  if (text) {
    formdata.append("content", text);
  }
  if (channel) {
    formdata.append("channel_uuid", set.channel_uuid);
  }
  if (assets) {
    formdata.append("images[0]", {
      uri: assets.assets[0].uri,
      name: assets.assets[0].fileName,
      type: assets.assets[0].type,
    });
  }

  function done() {
    navigation.navigate("News");
    DeviceEventEmitter.emit("event.update", true);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        Connection: "keep-alive",
      },
      body: formdata,
    });
    const json = await response.json();
    json?.errors?.content
      ? Alert.alert("Ошибка", json?.errors?.content[0], [{ text: "OK" }])
      : json?.message
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : done();

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
