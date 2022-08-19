/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  DeviceEventEmitter,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, preg_state, child } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { UserThreePoints, Geo } from "../../../assets/SVGpost";
import { NewsHeader, PostItem, BottomShadow } from "../../components";
import { userSubscribe, newsUser } from "../../data";
import { useStateValue } from "../../provider";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

export const UserScreen = ({ route, navigation }) => {
  const { info, token, myUname } = route.params;
  const [sub, setSub] = React.useState(info.subscription_status);
  const [subCount, setSubCount] = React.useState(info.subscribers_count);

  const [news, setNews] = React.useState();
  const [{ globalData }, dispatch] = useStateValue();
  const [time, setTime] = React.useState(Date.now());
  const [next, setNext] = React.useState(null);
  const type = 0;

  // DeviceEventEmitter.addListener("event.next.user", (eventData) =>
  //   setNext(eventData)
  // );

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
      info.username,
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
      info.username,
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
      info.username,
      news,
      setNews
    );
  }, []);

  function subsrcribe() {
    userSubscribe(token, info.username, sub, setSub, subCount, setSubCount);
  }

  const renderItem = ({ item, index }) => (
    <PostItem
      item={item}
      token={globalData?.token}
      myUname={globalData?.user.username}
      navigation={navigation}
      isChannel={type == 2}
    />
  );

  const Header = (
    <View style={styles.background}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        rIco={<UserThreePoints />}
      />
      <View style={styles.profileContent}>
        <Image
          style={styles.userImg}
          source={
            info?.avatar_url ? {uri: info.avatar_url} : test.img
          }
          resizeMode="cover"
        />
        <Text style={styles.name}>{info.name}</Text>
        <Text style={styles.nick}>{"@" + info.username}</Text>
        <View style={styles.subInfo}>
          <Geo />
          <Text style={styles.subInfoTxt}>{info.city}</Text>
        </View>
        <View style={styles.counters}>
          <View style={styles.border}>
            <Text style={styles.counterTxt}>{info.posts_count}</Text>
            <Text style={styles.counterSubTxt}>Записей</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.counterTxt}>{subCount}</Text>
            <Text style={styles.counterSubTxt}>Подписчики</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.counterTxt}>{info.subscriptions_count}</Text>
            <Text style={styles.counterSubTxt}>Подписки</Text>
          </View>
        </View>
        {info.username != myUname ? (
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                subsrcribe();
              }}
            >
              <Text style={styles.btnTxt}>
                {sub ? "Отписаться" : "Подписаться"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.btnTxt}>Написать</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <Text style={styles.title}>Семья</Text>
        <ScrollView
          style={styles.family}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/* [Need to change to **[0]** (**[1]** set for tests only)] */}
          {info.status == 0 ? (
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
                      {info.gestational_age}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
              <Text style={styles.pregCountSubTxt}>
                {info.gestational_age + " неделя, " + "5 дней"}
              </Text>
            </View>
          ) : null}
          {info?.children?.length > 0 || globalData?.user.status == 1 ? (
            <View style={{ flexDirection: "row" }}>
              {info?.children.map((item) => (
                <View>
                  <Image
                    style={[styles.pregState, { marginLeft: 10 }]}
                    source={item?.avatar_url ? {uri: item.avatar_url} : child}
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
        refreshing={news == undefined && info.posts_count > 0}
        onRefresh={() => update()}
        onEndReached={() => (next ? more() : null)}
        onEndReachedThreshold={1}
        ListEmptyComponent={
          <View style={styles.nocomments}>
            <Text style={styles.nocommentsTxt}>Здесь пока ничего нет..</Text>
          </View>
        }
        ListHeaderComponent={Header}
      />
      <BottomShadow />
    </ImageBackground>
  );
};
