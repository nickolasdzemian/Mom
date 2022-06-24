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
import { NewsHeader, BottomShadow, Post } from "../../components";
import { useStateValue } from "../../provider";
import { newsAll } from "../../data";

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

  const renderItem = ({ item, index }) => (
    <Post
      item={item}
      token={globalData?.token}
      navigation={navigation}
      isChannel={type == 2}
    />
  );

  const update = () => {
    setTime(Date.now());
    setNext(null);
    setSearch(null);
    newsAll(globalData, Date.now(), null, setNext, global, null, type);
  };

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
    newsAll(globalData, time, next, setNext, global, null, type);
  }, []);
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <FlatList
        data={globalData?.feed}
        style={{ marginBottom: 80 }}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.uuid}
        removeClippedSubviews
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
            lEv={() => navigation.navigate("NewsSetting", {type: type})}
            tTxt={type}
            tIco
            rIco={<Looopa />}
            rEv={() => navigation.navigate("NewsSearch", {type: type})}
            updateEv={(t) => {
              newsAll(globalData, Date.now(), null, setNext, global, null, t);
              setType(t);
            }}
          />
        }
      />
      {globalData?.feed == [] ? (
        <Text style={styles.noNews}>123123321321321</Text>
      ) : null}
      <BottomShadow />
    </ImageBackground>
  );
};
