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
import { bg_blue, avatar } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { Book } from "../../../assets/SVGLibrary";
import { NewsHeader } from "../../components";
import { libraryCalWeek } from "../../data";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

const tri1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const tri2 = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
const tri3 = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];

export const CalendarScreen = ({ route, navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const { item } = route.params;

  function showWeek(week) {
    libraryCalWeek(globalData.token, item.uuid, week, navigation, item.title);
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0={item.title}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image
            style={styles.calTopImg}
            source={item?.image_url ? { uri: item.image_url } : avatar}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.pedia}
            onPress={() =>
              navigation.navigate("CalendarAllPostsScreen", { id: item.uuid })
            }
          >
            <View style={styles.pediaIco}>
              <Book />
            </View>
            <View style={styles.pediaTxtArea}>
              <Text style={[styles.libTitle, { marginBottom: 0 }]}>
                {Strings().cal_btn}
              </Text>
              <Text style={styles.calItemTxt}>{Strings().cal_btnD}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.libTitle}>1 триместр</Text>
          <View style={styles.trimArea}>
            {tri1?.map((week, i) => (
              <TouchableOpacity
                style={[styles.triItem, { backgroundColor: "#C8ECF4" }]}
                onPress={() => showWeek(week)}
              >
                <Text style={styles.triTxt}>{week}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.libTitle}>2 триместр</Text>
          <View style={styles.trimArea}>
            {tri2?.map((week, i) => (
              <TouchableOpacity
                style={[styles.triItem, { backgroundColor: "#FFEAA6" }]}
                onPress={() => showWeek(week)}
              >
                <Text style={styles.triTxt}>{week}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.libTitle}>3 триместр</Text>
          <View style={[styles.trimArea, { marginBottom: 80 }]}>
            {tri3?.map((week, i) => (
              <TouchableOpacity
                style={[styles.triItem, { backgroundColor: "#FFC897" }]}
                onPress={() => showWeek(week)}
              >
                <Text style={styles.triTxt}>{week}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
