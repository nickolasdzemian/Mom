/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  DeviceEventEmitter,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, avatar } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { Cloud1, Cloud2, Cloud3 } from "../../../assets/SVGLibrary";
import { NewsHeader, BottomShadow } from "../../components";
import { channelsAll, libraryGet, getUser, libRec, libPop } from "../../data";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

const test = require("../../../assets/library/cal.png");
const sampleMomIco = avatar;
const sampleBlogIco = avatar;

const clouds = [<Cloud1 />, <Cloud2 />, <Cloud3 />];

export const LibraryScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [channels, setChannels] = React.useState();
  const [calendars, setCalendars] = React.useState();
  const [rec, setRec] = React.useState();
  const [pop, setPop] = React.useState();

  const token = globalData.token;

  function showUser(toGoUsername) {
    getUser(
      globalData.token,
      toGoUsername,
      navigation,
      globalData.user.username
    );
  }

  function showChannel(uuid, title) {
    navigation.navigate("ChannelScreen", { uuid: uuid, title: title });
  }

  React.useEffect(() => {
    channelsAll(token, setChannels);
    libraryGet(token, setCalendars);
    libRec(token, setRec);
    libPop(token, setPop);
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => DeviceEventEmitter.emit("event.HOME", true)}
        tTxt0={Strings().lib_ti}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.libTitle}>{Strings().lib_ch}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {channels?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.cloud}
                onPress={() => showChannel(item.uuid, item.title)}
              >
                {clouds[i % 3]}
                <Text
                  style={styles.inCloud}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.title.toLocaleUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.libTitle}>{Strings().lib_enc}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {calendars?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.calItem}
                onPress={() =>
                  navigation.navigate("CalendarScreen", { item: item })
                }
              >
                <Image
                  style={styles.calItemImg}
                  source={item?.image_url ? { uri: item.image_url } : test}
                  resizeMode="contain"
                />
                <Text
                  style={styles.calItemTxt}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.libTitle}>{Strings().lib_nm}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {rec?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.calItem}
                onPress={() => showUser(item.username)}
              >
                <Image
                  style={styles.momItemImg}
                  source={
                    item?.avatar_url ? { uri: item.avatar_url } : sampleMomIco
                  }
                  resizeMode="contain"
                />
                <Text
                  style={styles.calItemTxt}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.libTitle}>{Strings().lib_pb}</Text>
          <ScrollView
            style={{ marginBottom: 75 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {pop?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.calItem}
                onPress={() => showUser(item.username)}
              >
                <Image
                  style={styles.momItemImg}
                  source={
                    item?.avatar_url ? { uri: item.avatar_url } : sampleBlogIco
                  }
                  resizeMode="contain"
                />
                <Text
                  style={styles.calItemTxt}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
