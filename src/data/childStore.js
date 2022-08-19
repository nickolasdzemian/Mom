import { url } from "./env";
import { auth } from "./auth";
import { Alert } from "react-native";

export async function childStore(globalData, data, global, assets, navigation) {
  const URL = url + "child";

  let formdata = new FormData();
  //   formdata.append("_method", "PUT");
  formdata.append("name", data.name);
  formdata.append("birthday", data.birthday);
  formdata.append("gender", data.gender);
  if (assets) {
    formdata.append("avatar", {
      uri: assets.assets[0].uri,
      name: assets.assets[0].fileName,
      type: assets.assets[0].type,
    });
  }

  function done(json) {
    auth(global);
    Alert.alert("Выполнено", "Данные успешно добавлены", [{ text: "OK" }]);
    setTimeout(() => {
      navigation.goBack();
    }, 250);
  }

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${globalData?.token}`,
        Connection: "keep-alive",
      },
      body: formdata,
    });
    const json = await response.json();
    json?.errors
      ? Alert.alert(
          "Ошибка",
          json.errors?.name
            ? "Имя: " + json.errors.name
            : null + json.errors?.birthday
            ? "Дата рождения: " + json.errors.birthday
            : null + json.errors?.gender
            ? "Пол: " + json.errors.gender
            : Alert.alert(
                "Ошибка",
                "Возникла непредвиденная ошибка, повторите попытку позднее",
                [{ text: "OK" }]
              ),
          [{ text: "OK" }]
        )
      : done(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
