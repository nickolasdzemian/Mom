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
import { bg_blue, COLORS, window, OS } from "../../theme/main";
import { authIcons } from "../../../assets/auth/media";
import { YellowButton } from "../../components";
import { registration } from "../../data";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

export const RegistrationScreen = ({ route, navigation }) => {
  //alert(window.height)
  const { rdata } = route.params;
  const [data, setData] = React.useState({
    name: "",
    city: "",
    email: "",
    pswrd: "",
    status: rdata.type,
    gestational: rdata.type == 0 ? rdata.selectedIndex : 1,
    children: rdata.type == 1 ? rdata.newChildsIds : [],
  });
  const [{ globalData }, dispatch] = useStateValue();
  const [focus, setFocus] = React.useState(false);

  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <KeyboardAvoidingView
        behavior={!OS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={[styles.ftop, { flex: 0.21 }]}>
          <Image style={styles.topimg} source={authIcons.topimg} />
          <Image style={styles.star1} source={authIcons.star1} />
          <Image style={styles.star2} source={authIcons.star2} />
          <Image style={styles.bear} source={authIcons.bear} />
          <Image style={styles.smoky2} source={authIcons.smoky2} />
        </View>
        <View style={[styles.center, { flex: 0.7 }]}>
          <Text style={styles.title}>{Strings().reg_acc_c}</Text>
          <Text style={styles.subTitle}>{Strings().reg_acc_cd}</Text>
          <TextInput
            style={[styles.input, { marginTop: 45 }]}
            placeholder={Strings().reg_acN}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, name: txt })}
            maxLength={30}
            value={data.name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TextInput
            style={styles.input}
            placeholder={Strings().reg_acc_cc}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, city: txt })}
            maxLength={30}
            value={data.city}
            textContentType="addressCity"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TextInput
            style={styles.input}
            placeholder={Strings().reg_acc_ce}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, email: txt })}
            value={data.email}
            textContentType="emailAddress"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TextInput
            style={styles.input}
            placeholder={Strings().reg_acc_cp}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setData({ ...data, pswrd: txt })}
            value={data.pswrd}
            secureTextEntry={true}
            textContentType="newPassword"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <YellowButton
            txt={Strings().reg_acc_cg}
            // route="Reg"
            style={{ marginTop: 45 }}
            nav={navigation}
            event={() => registration(data, global)}
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
                    ? window.height / 1.09 - window.height
                    : window.height / 1.35 - window.height,
              },
            ]}
          >
            <Image style={styles.bottomimg} source={authIcons.bottomimg} />
            <Image style={styles.star3} source={authIcons.star3} />
            <Image style={styles.star4} source={authIcons.star4} />
            <Image style={styles.pchel} source={authIcons.pchel} />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
