/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  DeviceEventEmitter,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, preg_state, child, avatar } from "../../theme/main";
import { BackBtn, Lines } from "../../../assets/SVGnewsHeader";
import { Geo } from "../../../assets/SVGpost";
import { NewsHeader, PostItem, BottomShadow } from "../../components";
import { newsUser } from "../../data";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

export const ProfileScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [time, setTime] = React.useState(Date.now());
  const [next, setNext] = React.useState(null);
  const type = 0;

  const [news, setNews] = React.useState();

  const update = () => {
    setTime(Date.now());
    setNext(null);
    newsUser(
      globalData,
      Date.now(),
      next,
      setNext,
      global,
      null,
      globalData?.user.username,
      news,
      setNews
    );
  };

  const more = () => {
    newsUser(
      globalData,
      time,
      next,
      setNext,
      global,
      null,
      globalData?.user.username,
      news,
      setNews
    );
  };

  React.useEffect(() => {
    setNews(undefined);
    setNext(null);
    newsUser(
      globalData,
      time,
      next,
      setNext,
      global,
      null,
      globalData?.user.username,
      news,
      setNews
    );
  }, []);

  const renderItem = ({ item, index }) => (
    <PostItem
      item={item}
      token={globalData?.token}
      myUname={globalData?.user.username}
      navigation={navigation}
      isChannel={type == 2}
      isLast={index + 1 == news?.length}
    />
  );

  const Header = (
    <View style={styles.background}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => DeviceEventEmitter.emit("event.HOME", true)}
        rIco={<Lines />}
        rEv={() => navigation.navigate("ProfileSettings")}
      />
      <View style={styles.profileContent}>
        <Image
          style={styles.userImg}
          source={
            globalData?.user?.avatar_url
              ? { uri: globalData.user.avatar_url }
              : avatar
          }
          resizeMode="cover"
        />
        <Text style={styles.name}>{globalData?.user.name}</Text>
        <Text style={styles.nick}>{"@" + globalData?.user.username}</Text>
        <View style={styles.subInfo}>
          <Geo />
          <Text style={styles.subInfoTxt}>{globalData.user?.city}</Text>
        </View>
        <View style={styles.counters}>
          <View style={styles.border}>
            <Text style={styles.counterTxt}>
              {globalData?.user.posts_count ? globalData.user.posts_count : 0}
            </Text>
            <Text style={styles.counterSubTxt}>{Strings().pr_pc}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.counterTxt}>
              {globalData?.user.subscribers_count
                ? globalData.user.subscribers_count
                : 0}
            </Text>
            <Text style={styles.counterSubTxt}>{Strings().pr_sc}</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.counterTxt}>
              {globalData?.user.subscriptions_count
                ? globalData.user.subscriptions_count
                : 0}
            </Text>
            <Text style={styles.counterSubTxt}>{Strings().pr_ssc}</Text>
          </View>
        </View>
        <Text style={styles.title}>{Strings().pr_f}</Text>
        <ScrollView
          style={styles.family}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/* [Need to change to **[0]** (**[1]** set for tests only)] */}
          {/* && globalData?.user?.gestational_age */}
          {globalData?.user.status == 0 ? (
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
                {globalData?.user.gestational_age +
                  " " +
                  Strings().reg_sVw +
                  ", " +
                  "5 " +
                  Strings().pr_udd}
              </Text>
            </View>
          ) : null}
          {globalData?.user?.children?.length > 0 ||
          globalData?.user.status == 1 ? (
            <View style={{ flexDirection: "row" }}>
              {globalData?.user?.children.map((item, index) => (
                <View>
                  <Image
                    style={[styles.pregState, { marginLeft: 10 }]}
                    source={item?.avatar_url ? { uri: item.avatar_url } : child}
                  />
                  <Text style={[styles.pregCountSubTxt, { marginLeft: 10 }]}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}
        </ScrollView>
        <Text style={styles.title}>{Strings().pr_pcT}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <FlatList
        data={news}
        style={{ marginBottom: 80 }}
        renderItem={renderItem}
        //stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.uuid.slice(10)}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={25}
        windowSize={41}
        refreshing={news == undefined && globalData?.user?.posts_count > 0}
        onRefresh={() => update()}
        onEndReached={() => (next ? more() : null)}
        onEndReachedThreshold={1}
        ListEmptyComponent={
          <View style={styles.nocomments}>
            <Text style={styles.nocommentsTxt}>{Strings().no_data}</Text>
          </View>
        }
        ListHeaderComponent={Header}
      />
      <BottomShadow />
    </ImageBackground>
  );
};
