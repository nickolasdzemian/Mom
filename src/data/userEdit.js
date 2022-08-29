import { url } from "./env";
import { Alert } from "react-native";
import { getAuth, updateProfile } from "firebase/auth";

export async function userEdit(globalData, data, global, assets) {
  const URL = url + "user/profile";

  let formdata = new FormData();
  formdata.append("_method", "PUT");
  if (data.username) {
    formdata.append("username", data.username);
  } else {
    formdata.append("username", globalData.user.username);
  }
  if (data.name) {
    formdata.append("name", data.name);
  } else {
    formdata.append("name", globalData.user.name);
  }
  if (data.email0) {
    formdata.append("email", data.email0);
  } else {
    formdata.append("email", globalData.user.email);
  }
  if (data.location) {
    formdata.append("city", data.location);
  } else {
    formdata.append("city", globalData.user.city);
  }
  if (data.status) {
    formdata.append("status", data.status);
  } else {
    formdata.append("status", globalData.user.status);
  }
  if (data.gestational_age) {
    formdata.append("gestational_age", data.gestational_age);
  } else {
    formdata.append("gestational_age", globalData.user.gestational_age);
  }
  if (assets) {
    formdata.append("avatar", {
      uri: assets.assets[0].uri,
      name: assets.assets[0].fileName,
      type: assets.assets[0].type,
    });
  }

  function done(json) {
    let newData = json.data;
    newData = { ...globalData, user: newData };
    global(newData);

    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: json.data.username,
      photoURL: json.data?.avatar_url,
    })
      .then(() => {})
      .catch((error) => {});

    Alert.alert("Выполнено", "Данные успешно обновлены", [{ text: "OK" }]);
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
    json?.errors?.content
      ? Alert.alert("Ошибка", json?.errors?.content[0], [{ text: "OK" }])
      : json?.message
      ? Alert.alert(
          "Ошибка",
          "Возникла непредвиденная ошибка, повторите попытку позднее",
          [{ text: "OK" }]
        )
      : done(json);

    console.log(json);
  } catch (e) {
    alert(String(e));
    console.warn(e);
  }
}
