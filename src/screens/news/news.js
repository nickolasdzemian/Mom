/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  FlatList,
  DeviceEventEmitter,
  Text,
} from "react-native";
// import BigList from "react-native-big-list";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { Parmalat, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, PostItem } from "../../components";
import { useStateValue } from "../../provider";
import { newsAll } from "../../data";
import { Strings } from "../../storage/strings";

export const NewsScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [time, setTime] = React.useState(Date.now());
  const [next, setNext] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [type, setType] = React.useState(0);
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  DeviceEventEmitter.addListener("event.next", (eventData) =>
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
      isLast={index + 1 == globalData?.feed?.length}
    />
  );

  const update = () => {
    setTime(Date.now());
    setNext(null);
    setSearch(null);
    newsAll(globalData, Date.now(), null, setNext, global, null, type);
  };
  DeviceEventEmitter.addListener("event.update", (eventData) =>
    eventData ? update() : null
  );

  const more = () => {
    newsAll(
      globalData,
      time,
      next,
      setNext,
      global,
      search ? search : null,
      type
    );
  };

  React.useEffect(() => {
    setNext(null);
    const loadAll = newsAll(
      globalData,
      time,
      next,
      setNext,
      global,
      null,
      type
    );
    return () => {
      loadAll;
    };
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      {/* <BigList
        data={globalData?.feed}
        style={{ marginBottom: 80 }}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.uuid}
        itemHeight={500}
        headerHeight={100}
        refreshing={globalData?.feed == undefined}
        onRefresh={() => update()}
        onEndReached={() => (next ? more() : null)}
        onEndReachedThreshold={1}
        ListEmptyComponent={
          <Text style={styles.nocommentsTxt}>Здесь пока ничего нет..</Text>
        }
        ListHeaderComponent={
          <NewsHeader
            lIco={<Parmalat />}
            lEv={() => navigation.navigate("NewsSetting", { type: type })}
            tTxt={type}
            tIco
            rIco={<Looopa />}
            rEv={() => navigation.navigate("NewsSearch", { type: type })}
            updateEv={(t) => {
              newsAll(globalData, Date.now(), null, setNext, global, null, t);
              setType(t);
            }}
          />
        }
      /> */}
      <FlatList
        data={globalData?.feed}
        style={{ marginBottom: 80 }}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
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
        ListHeaderComponent={
          <NewsHeader
            lIco={<Parmalat />}
            lEv={() => navigation.navigate("NewsSetting", { type: type })}
            tTxt={type}
            tIco
            rIco={<Looopa />}
            rEv={() => navigation.navigate("NewsSearch", { type: type })}
            updateEv={(t) => {
              newsAll(globalData, Date.now(), null, setNext, global, null, t);
              setType(t);
            }}
          />
        }
      />
      <BottomShadow />
    </ImageBackground>
  );
};
