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
import { authIcons } from "../../../assets/auth/media";

export const StatusScreen = ({ navigation }) => {
  const route = (r) => {
    r == "Reg"
      ? navigation.navigate(r, { rdata: { type: 2 } })
      : navigation.navigate(r);
  };

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.ftop}>
        <Image style={styles.topimg} source={authIcons.topimg} />
        <Image style={styles.star1} source={authIcons.star1} />
        <Image style={styles.star2} source={authIcons.star2} />
        <Image style={styles.fly} source={authIcons.fly} />
        <Image style={styles.smoky} source={authIcons.smoky} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>Какой у вас статус?</Text>
        <Text style={styles.subTitle}>
          Здесь будет краткое описание данного экрана. Несколько предложений!{" "}
        </Text>
        <TouchableOpacity
          style={[styles.btn3, { marginTop: 45 }]}
          onPress={() => route("Preg")}
        >
          <Text style={styles.btnTXT}>Беременна</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} onPress={() => route("Child")}>
          <Text style={styles.btnTXT}>Уже мама</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} onPress={() => route("Reg")}>
          <Text style={styles.btnTXT}>Планирую</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Image style={styles.bottomimg} source={authIcons.bottomimg} />
        <Image style={styles.star3} source={authIcons.star3} />
        <Image style={styles.star4} source={authIcons.star4} />
        <Image style={styles.shirt} source={authIcons.shirt} />
      </View>
    </ImageBackground>
  );
};
