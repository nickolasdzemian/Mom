/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { ImageBackground, FlatList } from "react-native";
import BigList from "react-native-big-list";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { Parmalat, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, Post } from "../../components";
import { useStateValue } from "../../provider";
import { newsAll } from "../../data";

export const NewsScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [time, setTime] = React.useState(Date.now());
  const [next, setNext] = React.useState();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  const renderItem = ({ item, index }) => <Post item={item} />;

  const update = () => {
    setTime(Date.now());
    newsAll(globalData, Date.now(), null, null, global);
  };

  const more = () => {
    setTime(Date.now());
    newsAll(globalData, Date.now(), next, setNext, global);
  };

  React.useEffect(() => {
    newsAll(globalData, time, null, setNext, global);
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
        onEndReached={() => next ? more() : null}
        // onEndReached={() => alert("Пися")}
        onEndReachedThreshold={1}
        ListHeaderComponent={
          <NewsHeader
            lIco={<Parmalat />}
            lEv={() => navigation.navigate("NewsSetting")}
            tTxt="Лента новостей"
            tIco
            rIco={<Looopa />}
            rEv={() => navigation.navigate("NewsSearch")}
          />
        }
      />
      <BottomShadow />
    </ImageBackground>
  );
};
