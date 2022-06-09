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

export const RegistrationScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: "",
    city: "",
    email: "",
    pswrd: "",
  });
  const route = (r) => {
    navigation.navigate(r);
  };

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
    <ScrollView>
      <View style={[styles.ftop, { flex: 0.21 }]}>
        <Image style={styles.topimg} source={authIcons.topimg} />
        <Image style={styles.star1} source={authIcons.star1} />
        <Image style={styles.star2} source={authIcons.star2} />
        <Image style={styles.bear} source={authIcons.bear} />
        <Image style={styles.smoky2} source={authIcons.smoky2} />
      </View>
      <View style={[styles.center, { flex: 0.7 }]}>
        <Text style={styles.title}>Создаем аккаунт</Text>
        <Text style={styles.subTitle}>
          Здесь будет краткое описание данного экрана. Несколько предложений!{" "}
        </Text>
        <TextInput
          style={[styles.input, { marginTop: 45 }]}
          placeholder="Имя"
          placeholderTextColor={COLORS.blue_text}
          onChangeText={(txt) => setData({ ...data, name: txt })}
          maxLength={30}
          value={data.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Город"
          placeholderTextColor={COLORS.blue_text}
          onChangeText={(txt) => setData({ ...data, city: txt })}
          maxLength={30}
          value={data.city}
          textContentType="addressCity"
        />
        <TextInput
          style={styles.input}
          placeholder="Эл. почта"
          placeholderTextColor={COLORS.blue_text}
          onChangeText={(txt) => setData({ ...data, email: txt })}
          maxLength={30}
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
          textContentType="newPassword"
        />
        <YellowButton
          txt="Создать аккаунт"
          route="Reg"
          style={{ marginTop: 45 }}
          nav={navigation}
        />
      </View>
      <View style={[styles.bottom, { flex: 0.25 }]}>
        <Image style={styles.bottomimg} source={authIcons.bottomimg} />
        <Image style={styles.star3} source={authIcons.star3} />
        <Image style={styles.star4} source={authIcons.star4} />
        <Image style={styles.pchel} source={authIcons.pchel} />
      </View>
      </ScrollView>
    </ImageBackground>
  );
};
