/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  FlatList,
  DeviceEventEmitter,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { Looopa, BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, PostItem } from "../../components";
import { useStateValue } from "../../provider";
import { chPostsAll, chSub } from "../../data";
import { Strings } from "../../storage/strings";

const ChBaseImg = require("../../../assets/library/ChBase.png");

export const ChannelScreen = ({ route, navigation }) => {
  const { uuid, title } = route.params;
  const [{ globalData }, dispatch] = useStateValue();
  const [channelData, setChannelData] = React.useState();
  const [time, setTime] = React.useState(Date.now());
  const [next, setNext] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [type, setType] = React.useState(2);
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  DeviceEventEmitter.addListener("event.nextCh", (eventData) =>
    setNext(eventData)
  );
  DeviceEventEmitter.addListener("event.search", (eventData) =>
    setSearch(eventData)
  );
  DeviceEventEmitter.addListener("event.newPost", (eventData) =>
    eventData ? navigation.navigate("NewScreen") : navigation.navigate("News")
  );

  const renderItem = ({ item, index }) => (
    <PostItem
      item={item}
      token={globalData?.token}
      myUname={globalData?.user.username}
      navigation={navigation}
      isChannel={type == 2}
      isLast={index + 1 == channelData?.length}
    />
  );

  const update = () => {
    setTime(Date.now());
    setNext(null);
    setSearch(null);
    chPostsAll(
      globalData,
      Date.now(),
      null,
      setNext,
      channelData,
      setChannelData,
      null,
      type,
      uuid
    );
  };
  DeviceEventEmitter.addListener("event.update", (eventData) =>
    eventData ? update() : null
  );

  const more = () => {
    chPostsAll(
      globalData,
      time,
      next,
      setNext,
      channelData,
      setChannelData,
      search ? search : null,
      type,
      uuid
    );
  };

  const unsubscribe = (a) => {
    chSub(globalData?.token, a, uuid);
  };

  const chDescParce = () => {
    switch (title) {
      case "Здоровье":
        return Strings().ch_health;
      case "Спорт":
        return Strings().ch_sport;
      case "Моральная поддержка":
        return Strings().ch_psyho;
      case "Детская барахолка":
        return Strings().ch_things;
      case "Путешествия":
        return Strings().ch_walk;
      case "Роды":
        return Strings().ch_bearth;
      case "Грудное вскармливание":
        return Strings().ch_tits;
      case "Питание":
        return Strings().ch_food;
      case "Лекарства":
        return Strings().ch_aid;
      case "Врачи":
        return Strings().ch_docs;
      default:
        return Strings().ch_default;
    }
  };

  React.useEffect(() => {
    setNext(null);
    chPostsAll(
      globalData,
      time,
      next,
      setNext,
      channelData,
      setChannelData,
      null,
      type,
      uuid
    );
  }, []);

  const ChannelHeader = () => (
    <View style={[styles.chHeader, { height: 450 }]}>
      <Image
        style={styles.chHeaderImg}
        source={ChBaseImg}
        resizeMode="contain"
      />
      <Text style={styles.chTitle}>{title}</Text>
      <Text style={styles.chDesc}>{chDescParce()}</Text>
      <View style={styles.chBtns}>
        <TouchableOpacity
          style={styles.chBtn}
          onPress={() => unsubscribe("/subscribe")}
        >
          <Text style={styles.chBtnTxt}>{Strings().pr_uS}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chBtn}
          onPress={() => unsubscribe("/unsubscribe")}
        >
          <Text style={styles.chBtnTxt}>{Strings().pr_uuS}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0={Strings().news_n_ch}
        rIco={<Looopa />}
        // rEv={() => navigation.navigate("NewsSearch", { type: type })}
        updateEv={(t) => {
          chPostsAll(
            globalData,
            Date.now(),
            null,
            setNext,
            channelData,
            setChannelData,
            null,
            2,
            uuid
          );
          setType(2);
        }}
      />
      <FlatList
        data={channelData}
        style={{ marginBottom: 80 }}
        renderItem={renderItem}
        // stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.uuid.slice(10)}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={25}
        windowSize={41}
        refreshing={globalData?.feed == undefined}
        onRefresh={() => update()}
        onEndReached={() => (next ? more() : null)}
        onEndReachedThreshold={1}
        ListEmptyComponent={
          <Text style={styles.nocommentsTxt}>{Strings().no_data}</Text>
        }
        ListHeaderComponent={<ChannelHeader />}
      />
      <BottomShadow />
    </ImageBackground>
  );
};
