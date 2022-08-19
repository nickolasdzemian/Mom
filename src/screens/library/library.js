/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { Cloud1, Cloud2, Cloud3 } from "../../../assets/SVGLibrary";
import { NewsHeader, BottomShadow } from "../../components";
import { channelsAll, libraryGet, getUser } from "../../data";
import { useStateValue } from "../../provider";

const test = require("../../../assets/library/cal.png");
const sampleMomIco = require("../../../assets/library/samplem.jpeg");
const sampleBlogIco = require("../../../assets/library/sampleb.jpeg");
const sampleMoms = [
  { name: "Евангелина", img: sampleMomIco },
  { name: "Кристина", img: sampleMomIco },
  { name: "Карина", img: sampleMomIco },
  { name: "Виталина", img: sampleMomIco },
  { name: "Евгения", img: sampleMomIco },
  { name: "Руслан", img: sampleMomIco },
  { name: "Анастасия", img: sampleMomIco },
  { name: "Изабелла", img: sampleMomIco },
  { name: "Жанна", img: sampleMomIco },
  { name: "Петрович", img: sampleMomIco },
];
const sampleBlogs = [
  { name: "Евангелина", img: sampleBlogIco },
  { name: "Кристина", img: sampleBlogIco },
  { name: "Карина", img: sampleBlogIco },
  { name: "Виталина", img: sampleBlogIco },
  { name: "Евгения", img: sampleBlogIco },
  { name: "Руслан", img: sampleBlogIco },
  { name: "Анастасия", img: sampleBlogIco },
  { name: "Изабелла", img: sampleBlogIco },
  { name: "Жанна", img: sampleBlogIco },
  { name: "Петрович", img: sampleBlogIco },
];

const clouds = [<Cloud1/>, <Cloud2/>, <Cloud3/>];

export const LibraryScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [channels, setChannels] = React.useState();
  const [calendars, setCalendars] = React.useState();

  const token = globalData.token;

  function showUser(toGoUsername) {
    getUser(
      globalData.token,
      toGoUsername,
      navigation,
      globalData.user.username
    );
  }

  React.useEffect(() => {
    channelsAll(token, setChannels);
    libraryGet(token, setCalendars);
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader lIco={<BackBtn />} tTxt0="Библиотека" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.libTitle}>Каналы</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {channels?.map((item, i) => (
              <TouchableOpacity style={styles.cloud}>
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
          <Text style={styles.libTitle}>Энциклопедия</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {calendars?.map((item) => (
              <TouchableOpacity
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

          <Text style={styles.libTitle}>Новые мамы</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sampleMoms?.map((item) => (
              <TouchableOpacity style={styles.calItem}>
                <Image
                  style={styles.momItemImg}
                  source={item?.image_url ? { uri: item.image_url } : item.img}
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
          <Text style={styles.libTitle}>Популярные блоги</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sampleBlogs?.map((item) => (
              <TouchableOpacity style={styles.calItem}>
                <Image
                  style={styles.momItemImg}
                  source={item?.image_url ? { uri: item.image_url } : item.img}
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
