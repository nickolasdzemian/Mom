/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { View, Text, ImageBackground, Switch } from "react-native";
import { styles, switcher } from "./styles";
import { bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { newsSetting } from "../../data";
import { Strings } from "../../storage/strings";

export const NewsSetting = ({ route, navigation }) => {
  const { type } = route.params;
  const [{ globalData }, dispatch] = useStateValue();
  const { from_pregnant, from_planing, from_mom } = globalData?.feed_settings;
  const [set, setSet] = React.useState({
    from_pregnant: from_pregnant,
    from_planing: from_planing,
    from_mom: from_mom,
  });
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });
  function saveBack() {
    navigation.goBack();
    if (
      from_pregnant != set.from_pregnant ||
      from_planing != set.from_planing ||
      from_mom != set.from_mom
    ) {
      newsSetting(globalData, set, global, type);
    }
  }
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt0={Strings().news_s_t}
      />
      <View style={styles.main}>
        <Text style={styles.upperTitle}>{Strings().news_s_p}</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>{Strings().news_s_pl}</Text>
          <Switch
            trackColor={{ false: switcher.false, true: switcher.true }}
            thumbColor="white"
            ios_backgroundColor="rgba(120, 120, 128, 0.16)"
            onValueChange={() =>
              setSet({ ...set, from_planing: !set.from_planing })
            }
            value={set.from_planing}
          />
        </View>
        <Text style={styles.fieldSubTitle}>{Strings().news_s_plD}</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>{Strings().news_s_pr}</Text>
          <Switch
            trackColor={{ false: switcher.false, true: switcher.true }}
            thumbColor="white"
            ios_backgroundColor="rgba(120, 120, 128, 0.16)"
            onValueChange={() =>
              setSet({ ...set, from_pregnant: !set.from_pregnant })
            }
            value={set.from_pregnant}
          />
        </View>
        <Text style={styles.fieldSubTitle}>{Strings().news_s_prD}</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>{Strings().news_s_mo}</Text>
          <Switch
            trackColor={{ false: switcher.false, true: switcher.true }}
            thumbColor="white"
            ios_backgroundColor="rgba(120, 120, 128, 0.16)"
            onValueChange={() => setSet({ ...set, from_mom: !set.from_mom })}
            value={set.from_mom}
          />
        </View>
        <Text style={styles.fieldSubTitle}>{Strings().news_s_moD}</Text>
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
