/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, COLORS } from "../../theme/main";
import { authIcons } from "../../../assets/auth/media";
import { YellowButton } from "../../components";
import { login } from "../../data";
import { useStateValue } from "../../provider";

export const SimpleAuthScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    pswrd: "",
  });
  const [{ globalData }, dispatch] = useStateValue();

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <ScrollView>
        <View style={[styles.ftop, { flex: 0.25 }]}>
          <Image style={styles.topimg} source={authIcons.topimg} />
          <Image style={styles.star1} source={authIcons.star1} />
          <Image style={styles.star2} source={authIcons.star2} />
        </View>
        <View style={[styles.center, { flex: 0.5 }]}>
          <Image style={[styles.default, {height: 150, marginTop: -50}]} resizeMode="contain" source={authIcons.logoC} />
          <Text style={[styles.title, { marginTop: 20 }]}>Мы скучали по вам!</Text>
          <Text style={styles.subTitle}>
            Введите данные для входа{" "}
          </Text>
          <TextInput
            style={[styles.input, { marginTop: 45 }]}
            placeholder="Имя"
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, email: txt })}
            value={data.email}
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, pswrd: txt })}
            maxLength={30}
            value={data.pswrd}
            secureTextEntry={true}
            textContentType="password"
          />
          <YellowButton
            txt="Войти"
            style={{ marginTop: 45 }}
            nav={navigation}
            event={() => login(data, dispatch)}
          />
        </View>
        <View style={[styles.bottom, { flex: 0.25 }]}>
          <Image style={styles.bottomimg} source={authIcons.bottomimg} />
          <Image style={styles.star3} source={authIcons.star3} />
          <Image style={styles.star4} source={authIcons.star4} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
