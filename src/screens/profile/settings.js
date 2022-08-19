/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { COLORS, bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { ChevronRight } from "../../../assets/SVGprofile";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { logout, userEdit, userNewPassword } from "../../data";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const states = ["Беременна", "Мама", "Планирую беременность"];

export const ProfileSettings = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  const [color, setColor] = React.useState(COLORS.blue_text);
  const [modals, setModals] = React.useState({
    pswrd: false,
    email: false,
    location: false,
    status: false,
  });
  const [data, setData] = React.useState({
    oldpswrd: null,
    pswrd0: null,
    pswrd1: null,
    email0: null,
    email1: null,
    location: null,
    status: 0,
  });

  const signOutNow = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  function saveBack() {
    navigation.goBack();
  }
  function navi(r) {
    navigation.navigate(r);
  }
  function edit() {
    userEdit(globalData, data, global);
  }

  function parseStatus() {
    let status = globalData?.user.status;
    switch (status) {
      case 0:
        return states[status];
      case 1:
        return states[status];
      case 2:
        return states[status];
    }
  }

  function out() {
    setColor("red");
    setTimeout(() => {
      logout(globalData?.token, global);
      signOutNow();
    }, 750);
  }

  function validate(type) {
    switch (type) {
      case "pswrd":
        if (
          data.pswrd0 === data.pswrd1 &&
          data.pswrd0 != null &&
          data.pswrd1 != null &&
          data.oldpswrd != null
        ) {
          userNewPassword(globalData?.token, data);
        } else {
          Alert.alert("Ошибка", "Пароли не совпадают, проверьте поля ввода", [
            { text: "OK" },
          ]);
        }
      case "email":
        if (
          data.email0 === data.email1 &&
          data.email0 != null &&
          data.email1 != null
        ) {
          edit();
        } else {
          Alert.alert("Ошибка", "Адреса не совпадают, проверьте поля ввода", [
            { text: "OK" },
          ]);
        }
    }
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader lIco={<BackBtn />} lEv={() => saveBack()} tTxt0="Настройки" />
      <ScrollView style={[styles.main, { marginTop: -25 }]}>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Приватность</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Push Уведомления</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => navi("ProfileEdit")}
          >
            <Text style={styles.settingsBtnTxt}>Данные профиля</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Семья</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, status: !modals.status })}
          >
            <Text style={styles.settingsBtnTxt}>Мой статус</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueTxt}>{parseStatus()}</Text>
              <ChevronRight />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.status}
            onRequestClose={() => {
              setModals({ ...modals, status: false });
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={[
                    styles.settingsBtnTxt,
                    { fontSize: 18, marginBottom: 15 },
                  ]}
                >
                  Выберите Ваш статус:
                </Text>
                {states.map((item) => (
                  <TouchableOpacity
                    style={[styles.modalBtn, { marginTop: 15 }]}
                    onPress={() => {
                      setModals({ ...modals, status: false });
                      setData({ ...data, status: states.indexOf(item) });
                      edit();
                    }}
                  >
                    <Text style={styles.settingsBtnTxt}>{item}</Text>
                  </TouchableOpacity>
                ))}
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, status: false });
                    setData({ ...data, status: 0 });
                  }}
                >
                  Отменить
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, location: !modals.location })}
          >
            <Text style={styles.settingsBtnTxt}>Местоположение</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueTxt}>
                {globalData.user?.city}
              </Text>
              <ChevronRight />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.location}
            onRequestClose={() => {
              setModals({ ...modals, location: false });
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={[
                    styles.settingsBtnTxt,
                    { fontSize: 18, marginBottom: 15 },
                  ]}
                >
                  Изменение адреса
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Новый адрес"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, location: txt })}
                  maxLength={30}
                  value={data.location}
                  textContentType="addressCityAndState"
                />
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => {
                    setModals({ ...modals, location: false });
                    edit();
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>Сохранить</Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, location: false });
                    setData({ ...data, location: "" });
                  }}
                >
                  Отменить
                </Text>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, email: !modals.email })}
          >
            <Text style={styles.settingsBtnTxt}>E-mail</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueTxt}>
                {globalData?.user.email}
              </Text>
              <ChevronRight />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.email}
            onRequestClose={() => {
              setModals({ ...modals, email: false });
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={[
                    styles.settingsBtnTxt,
                    { fontSize: 18, marginBottom: 15 },
                  ]}
                >
                  Изменение почты
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Новый адрес эл.почты"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, email0: txt })}
                  maxLength={30}
                  value={data.email0}
                  textContentType="emailAddress"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Подтвердите новый адрес"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, email1: txt })}
                  maxLength={30}
                  value={data.email1}
                  textContentType="emailAddress"
                />
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => {
                    setModals({ ...modals, email: false });
                    validate("email");
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>Сохранить</Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, email: false });
                    setData({ ...data, email0: "", email1: "" });
                  }}
                >
                  Отменить
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, pswrd: !modals.pswrd })}
          >
            <Text style={styles.settingsBtnTxt}>Пароль</Text>
            <ChevronRight />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.pswrd}
            onRequestClose={() => {
              setModals({ ...modals, pswrd: false });
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={[
                    styles.settingsBtnTxt,
                    { fontSize: 18, marginBottom: 15 },
                  ]}
                >
                  Изменение пароля
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ваш текущий пароль"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, oldpswrd: txt })}
                  maxLength={30}
                  value={data.oldpswrd}
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ваш новый пароль"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, pswrd0: txt })}
                  maxLength={30}
                  value={data.pswrd0}
                  secureTextEntry={true}
                  textContentType="newPassword"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Подтвердите новый пароль"
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, pswrd1: txt })}
                  maxLength={30}
                  value={data.pswrd1}
                  secureTextEntry={true}
                  textContentType="newPassword"
                />
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => {
                    setModals({ ...modals, pswrd: false });
                    validate("pswrd");
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>Сохранить</Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, pswrd: false });
                    setData({ ...data, pswrd0: "", pswrd1: "" });
                  }}
                >
                  Отменить
                </Text>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => navi("Help")}
          >
            <Text style={styles.settingsBtnTxt}>Помощь и поддержка</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn} onPress={() => out()}>
            <Text style={[styles.settingsBtnTxt, { color: color }]}>
              Выйти из аккаунта
            </Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
