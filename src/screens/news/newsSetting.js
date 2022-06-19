/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { View, Text, ImageBackground, Switch } from "react-native";
import { styles, switcher } from "./styles";
import { bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { newsSetting } from "../../data";

export const NewsSetting = ({ navigation }) => {
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
      newsSetting(globalData, set, global);
    }
  }
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt="Настройки ленты"
      />
      <View style={styles.main}>
        <Text style={styles.upperTitle}>ЗАПИСИ ОТ</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Планирующих</Text>
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
        <Text style={styles.fieldSubTitle}>
          Вы будете видеть записи от планирующих беременность
        </Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Беременных</Text>
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
        <Text style={styles.fieldSubTitle}>
          Краткий текст, описание данного фильтра
        </Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Мам</Text>
          <Switch
            trackColor={{ false: switcher.false, true: switcher.true }}
            thumbColor="white"
            ios_backgroundColor="rgba(120, 120, 128, 0.16)"
            onValueChange={() => setSet({ ...set, from_mom: !set.from_mom })}
            value={set.from_mom}
          />
        </View>
        <Text style={styles.fieldSubTitle}>
          Все тот же небольшой текст, с описанием
        </Text>
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
