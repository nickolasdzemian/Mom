/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import {
  BackBtn,
  Parmalat,
  Looopa,
  Check,
} from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, Post } from "../../components";

export const NewsScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<Parmalat />}
        tTxt="Лента новостей"
        tIco
        rIco={<Looopa />}
      />
      <Post />
      {/* <BigList data={data} renderItem={renderItem} itemHeight={490} /> */}
      <BottomShadow />
    </ImageBackground>
  );
};
