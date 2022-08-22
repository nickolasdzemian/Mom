/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import DatePicker from "react-native-date-picker";
import { styles } from "./styles";
import { bg_blue, child, COLORS } from "../../theme/main";
import { BackBtn, Check } from "../../../assets/SVGnewsHeader";
import { Edit } from "../../../assets/SVGprofile";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";
import { childStore } from "../../data";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

const options = { mediaType: "mixed", presentationStyle: "pageSheet" };

export const ChildAddScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });
  const date = new Date();
  const [data, setData] = React.useState({
    name: undefined,
    birthday: undefined,
    gender: 0,
  });
  const [assets, setAssets] = React.useState();
  const [modals, setModals] = React.useState({
    name: false,
    birthday: false,
    gender: false,
  });

  function parsedDate(date) {
    const day =
      date.getDate() < 10 ? String("0" + date.getDate()) : date.getDate();
    const month =
      date.getMonth() < 10 ? String("0" + date.getMonth()) : date.getMonth();
    const year = date.getFullYear();
    return String(day + "-" + month + "-" + year);
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.background}>
        <NewsHeader
          lIco={<BackBtn />}
          lEv={() => navigation.goBack()}
          tTxt0="Член семьи"
          rIco={<Check />}
          rEv={() => childStore(globalData, data, global, assets, navigation)}
        />
        <View style={styles.profileContent}>
          <TouchableOpacity
            style={styles.userImgEditView}
            onPress={() => {
              launchImageLibrary(options, setAssets);
            }}
          >
            <Image
              style={styles.userImg}
              source={assets?.assets ? { uri: assets.assets[0].uri } : test.img}
              resizeMode="cover"
            />
            <View style={styles.editIco}>
              <Edit />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.name,
              { flexDirection: "row", marginTop: 0, alignItems: "center" },
            ]}
            onPress={() => setModals({ ...modals, name: true })}
          >
            <Text style={[styles.name, { marginTop: 0, marginRight: 5 }]}>
              {data.name ? data.name : "Имя ребенка >"}
            </Text>
            <Edit />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modals.name}
              onRequestClose={() => {
                setModals({ ...modals, name: false });
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
                    Имя ребенка
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Введите имя"
                    placeholderTextColor={COLORS.gray1}
                    onChangeText={(txt) => setData({ ...data, name: txt })}
                    maxLength={30}
                    value={data.location}
                  />
                  <TouchableOpacity
                    style={styles.modalBtn}
                    onPress={() => {
                      setModals({ ...modals, name: false });
                    }}
                  >
                    <Text style={styles.settingsBtnTxt}>Сохранить</Text>
                  </TouchableOpacity>
                  <Text
                    style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                    onPress={() => {
                      setModals({ ...modals, name: false });
                      setData({ ...data, name: undefined });
                    }}
                  >
                    Отменить
                  </Text>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.name,
              { flexDirection: "row", marginTop: 10, alignItems: "center" },
            ]}
            onPress={() => setModals({ ...modals, birthday: true })}
          >
            <Text
              style={[styles.nick, { marginTop: 0, marginRight: 5 }]}
              onPress={() => setModals({ ...modals, birthday: true })}
            >
              {data.birthday ? data.birthday : "Дата рождения >"}
            </Text>
            <Edit />
            <DatePicker
              modal
              mode="date"
              open={modals.birthday}
              date={date}
              locale="ru_RU"
              title="Выберите дату:"
              confirmText="Сохранить"
              onConfirm={(date) => {
                setModals({ ...modals, birthday: false });
                setData({ ...data, birthday: parsedDate(date) });
              }}
              cancelText="Отменить"
              onCancel={() => {
                setModals({ ...modals, birthday: false });
                setData({ ...data, birthday: undefined });
              }}
            />
          </TouchableOpacity>

          <View style={styles.sex}>
            <TouchableOpacity
              style={[
                styles.selBtn,
                data.gender == 0
                  ? {
                      backgroundColor: "white",
                      borderColor: "#0002",
                      borderWidth: 0.3,
                      borderRightWidth: 2,
                    }
                  : {
                      backgroundColor: "transparent",
                    },
              ]}
              onPress={() => setData({ ...data, gender: 0 })}
            >
              <Text style={styles.selTxt}>Мальчик</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.selBtn,
                data.gender == 1
                  ? {
                      backgroundColor: "white",
                      borderColor: "#0002",
                      borderWidth: 0.3,
                      borderLeftWidth: 2,
                    }
                  : {
                      backgroundColor: "transparent",
                    },
              ]}
              onPress={() => setData({ ...data, gender: 1 })}
            >
              <Text style={styles.selTxt}>Девочка</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
