/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  DeviceEventEmitter,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { BackBtn, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { newsAll } from "../../data";
import { Strings } from "../../storage/strings";

export const NewsSearch = ({ route, navigation }) => {
  const { type } = route.params;
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });
  const [filter, setFilter] = React.useState({
    hash: [""],
    text: "",
    srch: true, // false - по мамам, true - по записям
  });
  const recentReq = [
    "#Беременность",
    "#Роды",
    "#Советы",
    "#Радость",
    "#Вопросы",
    "#Фото",
    "#Тесты",
  ];
  function saveBack() {
    if (filter.text != "") {
      const text = filter.text.replace("#", "%23");
      newsAll(globalData, Date.now(), null, null, global, text, type);
      DeviceEventEmitter.emit("event.search", text);
    }
    navigation.goBack();
  }
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        rIco={<Looopa />}
        sch
        filter={filter}
        setFilter={setFilter}
      />
      <View style={styles.main}>
        <View style={styles.btnCont}>
          <TouchableOpacity
            style={[
              styles.selBtn2,
              !filter.srch
                ? {
                    backgroundColor: "white",
                    borderColor: "#0002",
                    borderWidth: 0.3,
                    borderRightWidth: 2,
                  }
                : {
                    backgroundColor: "transparent",
                  },
            ]}
            onPress={() => setFilter({ ...filter, srch: !filter.srch })}
          >
            <Text style={styles.selTxt2}>{Strings().news_h_sm}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selBtn2,
              filter.srch
                ? {
                    backgroundColor: "white",
                    borderColor: "#0002",
                    borderWidth: 0.3,
                    borderLeftWidth: 2,
                  }
                : {
                    backgroundColor: "transparent",
                  },
            ]}
            onPress={() => setFilter({ ...filter, srch: !filter.srch })}
          >
            <Text style={styles.selTxt2}>{Strings().news_h_sn}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.upperTitle2}>{Strings().news_s_re}</Text>
        {recentReq.map((item) => (
          <Text
            key={item}
            style={styles.recentReq}
            onPress={() => {
              setFilter({ ...filter, text: item });
            }}
          >
            {item}
          </Text>
        ))}
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
