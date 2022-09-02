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
  DeviceEventEmitter,
} from "react-native";
import { styles } from "./styles";
import { COLORS, bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { ChevronRight } from "../../../assets/SVGprofile";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { logout, userEdit, userNewPassword, userDelete } from "../../data";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { userLocale } from "../../storage/locale";
import { Strings } from "../../storage/strings";

export const ProfileSettings = ({ navigation }) => {
  const states = [
    Strings().set_st_s1,
    Strings().set_st_s2,
    Strings().set_st_s3,
  ];
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  const [color, setColor] = React.useState(COLORS.blue_text);
  const [delCount, setDelCount] = React.useState(undefined);
  const [modals, setModals] = React.useState({
    pswrd: false,
    email: false,
    location: false,
    status: false,
    lang: false,
    del: false,
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

  function delAccount() {
    let i = 5;
    function time() {
      if (i == 0 && modals.del == true) {
        userDelete(globalData?.token, global);
        setModals({ ...modals, del: false });
        setDelCount(undefined);
        i = 5;
        clearInterval(counter);
      }
      setDelCount(i--);
    }
    const counter = setInterval(() => {
      time();
    }, 950);
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

  async function setLocale(locale) {
    await userLocale.set("lang", locale);
  }
  function lang(locale) {
    setLocale(locale);
    DeviceEventEmitter.emit("event.locale", locale);
    // DeviceEventEmitter.emit("event.updateProfile", true);
    DeviceEventEmitter.emit("event.HOME", true);
    // setTimeout(() => {
    //   navigation.goBack();
    // }, 100);
    return Strings();
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt0={Strings().set_ti}
      />
      <ScrollView style={[styles.main, { marginTop: -25 }]}>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_pr}</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, lang: !modals.lang })}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_lan}</Text>
            <View style={styles.settingValue}>
              <ChevronRight />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.lang}
            onRequestClose={() => {
              setModals({ ...modals, lang: false });
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
                  {Strings().set_lan_ti}
                </Text>
                <TouchableOpacity
                  style={[styles.modalBtn, { marginTop: 15 }]}
                  onPress={() => {
                    lang("ru");
                    setModals({ ...modals, lang: false });
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_lan_ru}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalBtn, { marginTop: 15 }]}
                  onPress={() => {
                    lang("uk");
                    setModals({ ...modals, lang: false });
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_lan_ua}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, lang: false });
                  }}
                >
                  {Strings().set_st_ca}
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_pu}</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => navi("ProfileEdit")}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_da}</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_fa}</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, status: !modals.status })}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_st}</Text>
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
                  {Strings().set_st_ti}
                </Text>
                {states.map((item, i) => (
                  <TouchableOpacity
                    key={i}
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
                  {Strings().set_st_ca}
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, location: !modals.location })}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_ad}</Text>
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
                  {Strings().set_ad_ti}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_ad_pl}
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
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_ad_sv}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, location: false });
                    setData({ ...data, location: "" });
                  }}
                >
                  {Strings().set_st_ca}
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
            <Text style={styles.settingsBtnTxt}>{Strings().set_em}</Text>
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
                  {Strings().set_em_ti}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_em_np}
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, email0: txt })}
                  maxLength={30}
                  value={data.email0}
                  textContentType="emailAddress"
                />
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_em_rp}
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
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_ad_sv}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, email: false });
                    setData({ ...data, email0: "", email1: "" });
                  }}
                >
                  {Strings().set_st_ca}
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, pswrd: !modals.pswrd })}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_ps}</Text>
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
                  {Strings().set_ps_ti}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_ps_op}
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, oldpswrd: txt })}
                  maxLength={30}
                  value={data.oldpswrd}
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_ps_n1}
                  placeholderTextColor={COLORS.gray1}
                  onChangeText={(txt) => setData({ ...data, pswrd0: txt })}
                  maxLength={30}
                  value={data.pswrd0}
                  secureTextEntry={true}
                  textContentType="newPassword"
                />
                <TextInput
                  style={styles.input}
                  placeholder={Strings().set_ps_n2}
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
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_ad_sv}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, pswrd: false });
                    setData({ ...data, pswrd0: "", pswrd1: "" });
                  }}
                >
                  {Strings().set_st_ca}
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
            <Text style={styles.settingsBtnTxt}>{Strings().set_he}</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn} onPress={() => out()}>
            <Text style={[styles.settingsBtnTxt, { color: color }]}>
              {Strings().set_ex}
            </Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.block,
            {
              backgroundColor: "transparent",
              marginTop: 0,
              marginBottom: 170,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setModals({ ...modals, del: !modals.del })}
          >
            <Text
              style={[
                styles.settingsBtnTxt,
                { color: "red", fontWeight: "300" },
              ]}
            >
              {Strings().set_DEL}
            </Text>
            <View />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modals.del}
            onRequestClose={() => {
              setModals({ ...modals, del: false });
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
                  {Strings().set_del_ti}
                </Text>
                <Text
                  style={[
                    styles.modalBtn,
                    styles.settingsBtnTxt,
                    { marginTop: 15, backgroundColor: "transparent" },
                  ]}
                >
                  {delCount
                    ? `${Strings().set_del_th}${delCount}`
                    : Strings().set_del_qwe}
                </Text>
                <TouchableOpacity
                  style={[styles.modalBtn, { marginTop: 15 }]}
                  onPress={() => {
                    setModals({ ...modals, del: false });
                    setDelCount(undefined);
                  }}
                >
                  <Text style={styles.settingsBtnTxt}>
                    {Strings().set_del_ca}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.settingsBtnTxt,
                    { marginTop: 15, color: "red" },
                  ]}
                  onPress={() => {
                    delAccount();
                  }}
                >
                  {Strings().set_del_dl}
                </Text>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
