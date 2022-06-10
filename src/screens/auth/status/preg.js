/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import WheelPicker from "react-native-wheely";
import { styles } from "../styles";
import { bg_blue } from "../../../theme/main";
import { authIcons } from "../../../../assets/auth/media";
import { YellowButton } from "../../../components";

export const PregScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(10);
  const WeekPicker = () => {
    let weeks = [];
    for (let i = 1; i <= 40; i++) {
      weeks.push([i] + " недель");
    }
    return (
      <WheelPicker
        containerStyle={styles.wheel}
        selectedIndicatorStyle={styles.selectedIndicatorStyle}
        itemHeight={35}
        itemStyle={styles.wheelItem}
        itemTextStyle={styles.itemTextStyle}
        visibleRest={4}
        selectedIndex={selectedIndex}
        options={weeks}
        onChange={(index) => setSelectedIndex(index)}
      />
    );
  };

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.ftop}>
        <Image style={styles.topimg} source={authIcons.topimg} />
        <Image style={styles.star1} source={authIcons.star1} />
        <Image style={styles.star2} source={authIcons.star2} />
        <Image style={styles.bantic} source={authIcons.bantic} />
        <Image style={styles.bottle} source={authIcons.bottle} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>На каком вы сроке?</Text>
        <Text style={styles.subTitle}>
          Здесь будет краткое описание данного экрана. Несколько предложений!{" "}
        </Text>
        {WeekPicker()}
        <YellowButton
          txt="Продолжить"
          route="Reg"
          style={{ marginTop: 40 }}
          nav={navigation}
          rdata={{type: 0, selectedIndex: selectedIndex + 1}}
        />
      </View>
      <View style={styles.bottom}>
        <Image style={styles.bottomimg} source={authIcons.bottomimg} />
        <Image style={styles.star3} source={authIcons.star3} />
        <Image style={styles.star4} source={authIcons.star4} />
        <Image style={styles.lshirt} source={authIcons.lshirt} />
      </View>
    </ImageBackground>
  );
};
