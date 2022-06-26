/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { bg_blue, preg_state, child } from "../../theme/main";
import { BackBtn, Lines } from "../../../assets/SVGnewsHeader";
import { Geo } from "../../../assets/SVGpost";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

export const ProfileScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <ScrollView style={styles.background}>
        <NewsHeader
          lIco={<BackBtn />}
          rIco={<Lines />}
          rEv={() =>
            navigation.navigate("ProfileSettings")
          }
        />
        <View style={styles.profileContent}>
          <Image style={styles.userImg} source={test.img} resizeMode="cover" />
          <Text style={styles.name}>{globalData?.user.name}</Text>
          <Text style={styles.nick}>{"@" + globalData?.user.username}</Text>
          <View style={styles.subInfo}>
            <Geo />
            <Text style={styles.subInfoTxt}>{globalData.user?.city}</Text>
          </View>
          <View style={styles.counters}>
            <View style={styles.border}>
              <Text style={styles.counterTxt}>
                {globalData?.user.posts_count}
              </Text>
              <Text style={styles.counterSubTxt}>Записей</Text>
            </View>
            <View style={styles.center}>
              <Text style={styles.counterTxt}>
                {globalData?.user.subscribers_count}
              </Text>
              <Text style={styles.counterSubTxt}>Подписчики</Text>
            </View>
            <View style={styles.border}>
              <Text style={styles.counterTxt}>
                {globalData?.user.subscriptions_count}
              </Text>
              <Text style={styles.counterSubTxt}>Подписки</Text>
            </View>
          </View>
          <Text style={styles.title}>Семья</Text>
          <ScrollView style={styles.family} horizontal>
            {/* [Need to change to **[0]** (**[1]** set for tests only)] */}
            {globalData?.user.status == 1 &&
            globalData?.user?.gestational_age ? (
              <View>
                <ImageBackground style={styles.pregState} source={preg_state}>
                  <View
                    style={[
                      styles.pregState,
                      { backgroundColor: "rgba(124, 202, 226, 0.3)" },
                    ]}
                  >
                    <View style={styles.pregCount}>
                      <Text style={styles.pregCountTxt}>
                        {globalData?.user.gestational_age}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
                <Text style={styles.pregCountSubTxt}>
                  {globalData?.user.gestational_age + " неделя, " + "5 дней"}
                </Text>
              </View>
            ) : null}
            {globalData?.user?.children?.length > 0 ? (
              <View style={{flexDirection: "row"}}>
                {globalData?.user?.children.map((item) => (
                  <View>
                    <ImageBackground
                      style={[styles.pregState, { marginLeft: 10 }]}
                      source={child}
                    />
                    <Text style={[styles.pregCountSubTxt, { marginLeft: 10 }]}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </View>
            ) : null}
          </ScrollView>
          <Text style={styles.title}>Записи</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
