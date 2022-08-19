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
import { styles } from "./styles";
import { bg_blue, child, COLORS } from "../../theme/main";
import { BackBtn, Check } from "../../../assets/SVGnewsHeader";
import { Edit } from "../../../assets/SVGprofile";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";
import { userEdit } from "../../data";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

const options = { mediaType: "mixed", presentationStyle: "pageSheet" };

export const ProfileEditScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });
  const [data, setData] = React.useState({
    username: undefined,
    name: undefined,
  });
  const [assets, setAssets] = React.useState();
  const [modals, setModals] = React.useState({
    username: false,
    name: false,
  });

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.background}>
        <NewsHeader
          lIco={<BackBtn />}
          lEv={() => navigation.goBack()}
          tTxt0="Данные профиля"
          rIco={<Check />}
          rEv={() => userEdit(globalData, data, global, assets ? assets : null)}
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
              source={
                assets?.assets
                  ? { uri: assets.assets[0].uri }
                  : globalData?.user?.avatar_url
                  ? { uri: globalData.user.avatar_url }
                  : test.img
              }
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
              {globalData?.user.name}
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
                    Изменение имени
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Ваше имя"
                    placeholderTextColor={COLORS.gray1}
                    onChangeText={(txt) => setData({ ...data, name: txt })}
                    maxLength={30}
                    value={data.location}
                  />
                  <TouchableOpacity
                    style={styles.modalBtn}
                    onPress={() => {
                      setModals({ ...modals, name: false });
                      userEdit(globalData, data, global);
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
            onPress={() => setModals({ ...modals, username: true })}
          >
            <Text
              style={[styles.nick, { marginTop: 0, marginRight: 5 }]}
              onPress={() => setModals({ ...modals, username: true })}
            >
              {"@" + globalData?.user.username}
            </Text>
            <Edit />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modals.username}
              onRequestClose={() => {
                setModals({ ...modals, username: false });
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
                    Изменение никнейма
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Ваш новый никнейм"
                    placeholderTextColor={COLORS.gray1}
                    onChangeText={(txt) => setData({ ...data, username: txt })}
                    maxLength={30}
                    value={data.location}
                  />
                  <TouchableOpacity
                    style={styles.modalBtn}
                    onPress={() => {
                      setModals({ ...modals, username: false });
                      userEdit(globalData, data, global);
                    }}
                  >
                    <Text style={styles.settingsBtnTxt}>Сохранить</Text>
                  </TouchableOpacity>
                  <Text
                    style={[styles.settingsBtnTxt, { marginTop: 15 }]}
                    onPress={() => {
                      setModals({ ...modals, username: false });
                      setData({ ...data, username: undefined });
                    }}
                  >
                    Отменить
                  </Text>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <Text style={styles.title}>Семья</Text>
          <ScrollView
            style={styles.family}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {globalData?.user ? (
              <View style={{ flexDirection: "row" }}>
                <View>
                  <TouchableOpacity
                    style={[
                      styles.pregState,
                      { marginLeft: 10, backgroundColor: COLORS.blue_darling },
                    ]}
                    onPress={() => navigation.navigate("ChildAdd")}
                  >
                    <Text
                      style={[
                        styles.pregCountSubTxt,
                        {
                          marginLeft: 10,
                          color: COLORS.blue_text,
                          textAlign: "center",
                        },
                      ]}
                    >
                      {`Добавить\nчлена семьи`}
                    </Text>
                  </TouchableOpacity>
                </View>
                {globalData?.user?.children.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ChildEdit", { item: item })
                    }
                  >
                    <Image
                      style={[styles.pregState, { marginLeft: 10 }]}
                      source={
                        item?.avatar_url ? { uri: item.avatar_url } : child
                      }
                    />
                    <Text style={[styles.pregCountSubTxt, { marginLeft: 10 }]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};
