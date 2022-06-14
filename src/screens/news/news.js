/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import {
  BackBtn,
  Parmalat,
  Looopa,
  Check,
} from "../../../assets/SVGnewsHeader";
import { authIcons } from "../../../assets/auth/media";
import { YellowButton, NewsHeader } from "../../components";

export const NewsScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<Parmalat />}
        tTxt="Лента новостей ˅"
        rIco={<Looopa />}
      />
      <LinearGradient colors={["#FFF0", "#0005"]} style={styles.shadow} />
    </ImageBackground>
  );
};
