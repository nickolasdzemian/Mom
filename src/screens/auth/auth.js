/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, window, COLORS, OS } from "../../theme/main";
import { authIcons } from "../../../assets/auth/media";
import { YellowButton } from "../../components";
import { login } from "../../data";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

export const SimpleAuthScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    pswrd: "",
  });
  const [{ globalData }, dispatch] = useStateValue();
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });
  const [focus, setFocus] = React.useState(false);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <KeyboardAvoidingView
        behavior={!OS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={[styles.ftop, { flex: 0.25 }]}>
          <Image style={styles.topimg} source={authIcons.topimg} />
          <Image style={styles.star1} source={authIcons.star1} />
          <Image style={styles.star2} source={authIcons.star2} />
        </View>
        <View style={[styles.center, { flex: 0.5 }]}>
          <Image
            style={[styles.default, { height: 150, marginTop: -50 }]}
            resizeMode="contain"
            source={authIcons.logoC}
          />
          <Text style={[styles.title, { marginTop: 20 }]}>
            {Strings().acc_sku}
          </Text>
          <Text style={styles.subTitle}>Введите данные для входа </Text>
          <TextInput
            style={[styles.input, { marginTop: 45 }]}
            placeholder={Strings().acc_email}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, email: txt })}
            value={data.email}
            textContentType="emailAddress"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TextInput
            style={styles.input}
            placeholder={Strings().acc_pswrd}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, pswrd: txt })}
            maxLength={30}
            value={data.pswrd}
            secureTextEntry={true}
            textContentType="password"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <YellowButton
            txt={Strings().acc_enter}
            style={{ marginTop: 45 }}
            nav={navigation}
            event={() => login(data, global)}
          />
        </View>
        {!focus ? (
          <View
            style={[
              styles.bottom,
              {
                marginTop: 50,
                marginBottom:
                  window.height > 700 || window.width > 375
                    ? window.height / 1.35 - window.height
                    : window.height / 2.1 - window.height,
              },
            ]}
          >
            <Image style={styles.bottomimg} source={authIcons.bottomimg} />
            <Image style={styles.star3} source={authIcons.star3} />
            <Image style={styles.star4} source={authIcons.star4} />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
