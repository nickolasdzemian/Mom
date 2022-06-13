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
import { YellowButton } from "../../components";

export const NewsScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.ftop}>
        <Image style={styles.topimg} source={authIcons.topimg} />
        <Image style={styles.star1} source={authIcons.star1} />
        <Image style={styles.star2} source={authIcons.star2} />
      </View>
      <View style={styles.center}>
        <Image style={styles.default} source={authIcons.logoC} />
        <YellowButton
          txt="Создать аккаунт"
          route="Status"
          style={{ marginTop: 30 }}
          nav={navigation}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("SimpleAuth")}
          style={[styles.btn, { marginTop: 8 }]}
        >
          <Text style={[styles.btnTXT, { color: "#FFF5DC" }]}>
            У меня уже есть аккаунт
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Image style={styles.bottomimg} source={authIcons.bottomimg} />
        <Image style={styles.star3} source={authIcons.star3} />
        <Image style={styles.star4} source={authIcons.star4} />
      </View>
    </ImageBackground>
  );
};
