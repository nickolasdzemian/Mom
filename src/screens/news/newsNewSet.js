/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Switch,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { styles, switcher } from "./styles";
import { COLORS, OS, bg_blue } from "../../theme/main";
import { BackBtn, Check } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { channelsAll, newsAdd } from "../../data";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

export const NewScreenSet = ({ route, navigation }) => {
  const { text, assets } = route.params;
  const [{ globalData }, dispatch] = useStateValue();
  const [set, setSet] = React.useState({
    type: false, // false feed : channel
    channel_uuid: undefined,
    comments_disabled: false,
    comments_hidden: false,
    subscribers_only: false,
  });
  const [channels, setChannels] = React.useState();
  const [selCh, setSelCh] = React.useState(null);

  function saveBack() {
    navigation.goBack();
  }
  function publish() {
    let channel;
    if (channels) {
      channel = channels.find((el, id) => id == selCh);
    }
    newsAdd(
      globalData?.token,
      set,
      channel,
      text,
      assets ? assets : null,
      navigation
    );
  }

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.chItem,
        { marginBottom: index + 1 == channels.length ? 50 : 0 },
      ]}
    >
      <View style={styles.chLogo}>
        <Image style={styles.chLogoImg} source={test.img} resizeMode="cover" />
        <Text style={styles.chTitle}>{item.title}</Text>
      </View>
      <CheckBox
        value={index == selCh}
        onValueChange={() => {
          setSelCh(index);
          setSet({ ...set, channel_uuid: item.uuid });
        }}
        style={OS ? null : styles.checkbox}
        tintColors={{ true: COLORS.blue_text, false: COLORS.gray1 }}
        lineWidth={1}
        onCheckColor={COLORS.blue_text}
        onTintColor={COLORS.blue_text}
      />
    </View>
  );

  React.useEffect(() => {
    channelsAll(globalData?.token, setChannels);
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt0="Настройки записи"
        rIco={<Check />}
        rEv={() => publish()}
      />
      <View style={styles.main}>
        <Text style={[styles.upperTitle, { fontSize: 18 }]}>
          Опубликовать в:
        </Text>
        <View style={[styles.btnCont, { marginTop: 20, marginBottom: 25 }]}>
          <TouchableOpacity
            style={[
              styles.selBtn2,
              !set.type
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
            onPress={() => setSet({ ...set, type: !set.type })}
          >
            <Text style={styles.selTxt2}>Ленту</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selBtn2,
              set.type
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
            onPress={() => setSet({ ...set, type: !set.type })}
          >
            <Text style={styles.selTxt2}>Канал</Text>
          </TouchableOpacity>
        </View>
        {!set.type ? (
          <View>
            <Text style={[styles.upperTitle, { fontSize: 18 }]}>
              Дополнительно:
            </Text>
            <View style={styles.field}>
              <Text style={styles.fieldTitle}>Отключить комментарии</Text>
              <Switch
                trackColor={{ false: switcher.false, true: switcher.true }}
                thumbColor="white"
                ios_backgroundColor="rgba(120, 120, 128, 0.16)"
                onValueChange={() =>
                  setSet({ ...set, comments_disabled: !set.comments_disabled })
                }
                value={set.comments_disabled}
              />
            </View>
            <Text style={styles.fieldSubTitle}>
              Пользователи не смогут комментировать запись
            </Text>
            <View style={styles.field}>
              <Text style={styles.fieldTitle}>Скрыть комментарии</Text>
              <Switch
                trackColor={{ false: switcher.false, true: switcher.true }}
                thumbColor="white"
                ios_backgroundColor="rgba(120, 120, 128, 0.16)"
                onValueChange={() =>
                  setSet({ ...set, comments_hidden: !set.comments_hidden })
                }
                value={set.comments_hidden}
              />
            </View>
            <Text style={styles.fieldSubTitle}>
              Только вы видите все комментарии
            </Text>
            <View style={styles.field}>
              <Text style={styles.fieldTitle}>Только подписчикам</Text>
              <Switch
                trackColor={{ false: switcher.false, true: switcher.true }}
                thumbColor="white"
                ios_backgroundColor="rgba(120, 120, 128, 0.16)"
                onValueChange={() =>
                  setSet({ ...set, subscribers_only: !set.subscribers_only })
                }
                value={set.subscribers_only}
              />
            </View>
            <Text style={styles.fieldSubTitle}>
              Запись будет видна только вашим подписчикам
            </Text>
          </View>
        ) : (
          <View>
            <Text style={[styles.upperTitle, { fontSize: 18 }]}>
              Канал для публикации:
            </Text>
            <FlatList
              data={channels}
              style={styles.chList}
              renderItem={renderItem}
              keyExtractor={(item) => item.uuid}
              removeClippedSubviews
              refreshing={channels == undefined}
              ListEmptyComponent={
                <Text style={styles.nocommentsTxt}>
                  Здесь пока ничего нет..
                </Text>
              }
            />
          </View>
        )}
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
