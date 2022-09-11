/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { styles } from "../styles";
import { bg_blue, COLORS, window, OS } from "../../../theme/main";
import { authIcons } from "../../../../assets/auth/media";
import { Calendar } from "../../../../assets/SVGstartup";
import { YellowButton } from "../../../components";

import { addChild } from "../../../data/childAdd";
import { Strings } from "../../../storage/strings";

export const AddChild = ({ navigation }) => {
  const date = new Date();
  const [childData, setChildData] = React.useState({
    name: "",
    date: "",
    gender: 1,
  });
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  // const route = (r) => {
  //   navigation.navigate(r);
  // };

  function parsedDate(date) {
    const day =
      date.getDate() < 10 ? String("0" + date.getDate()) : date.getDate();
    const month =
      date.getMonth() < 10 ? String("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    const year = date.getFullYear();
    return String(day + "-" + month + "-" + year);
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <KeyboardAvoidingView
        behavior={!OS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.ftop}>
          <Image style={styles.topimg} source={authIcons.topimg} />
          <Image style={styles.star1} source={authIcons.star1} />
          <Image style={styles.star2} source={authIcons.star2} />
          <Image style={styles.cloud} source={authIcons.cloud} />
          <Image style={styles.babyShirt} source={authIcons.babyShirt} />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{Strings().reg_aC}</Text>
          <Text style={styles.subTitle}>{Strings().reg_aCd}</Text>
          <TextInput
            style={[styles.input, { marginTop: 45 }]}
            placeholder={Strings().reg_acN}
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setChildData({ ...childData, name: txt })}
            maxLength={30}
            value={childData.name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TouchableOpacity
            style={styles.btnCAL}
            onPress={() => setOpen(!open)}
          >
            <Text style={styles.btnTXT}>
              {childData.date == "" ? Strings().reg_acDate : childData.date}
            </Text>
            <Calendar />
          </TouchableOpacity>
          <View style={styles.sex}>
            <TouchableOpacity
              style={[
                styles.selBtn,
                childData.gender == 0
                  ? {
                      backgroundColor: "white",
                      borderColor: "#0002",
                      borderWidth: 0.3,
                      borderRightWidth: 2,
                    }
                  : {
                      backgroundColor: "transparent",
                    },
              ]}
              onPress={() => setChildData({ ...childData, gender: 0 })}
            >
              <Text style={styles.selTxt}>{Strings().reg_s1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.selBtn,
                childData.gender == 1
                  ? {
                      backgroundColor: "white",
                      borderColor: "#0002",
                      borderWidth: 0.3,
                      borderLeftWidth: 2,
                    }
                  : {
                      backgroundColor: "transparent",
                    },
              ]}
              onPress={() => setChildData({ ...childData, gender: 1 })}
            >
              <Text style={styles.selTxt}>{Strings().reg_s2}</Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            theme="light"
            mode="date"
            open={open}
            date={date}
            locale="ru_RU"
            title={Strings().dp_title}
            confirmText={Strings().dp_save}
            onConfirm={(date) => {
              setOpen(false);
              setChildData({ ...childData, date: parsedDate(date) });
            }}
            cancelText={Strings().dp_cancel}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <YellowButton
            txt={Strings().reg_sVCC}
            style={{ marginTop: 40 }}
            nav={navigation}
            event={() => addChild(childData, null, navigation, "Reg")}
          />
          <TouchableOpacity
            onPress={() =>
              addChild(childData, null, navigation, null).then(
                setChildData({ name: "", date: "", gender: 1 })
              )
            }
            style={[styles.btn, { marginTop: 8 }]}
          >
            <Text style={[styles.btnTXT, { color: "#FFF5DC" }]}>
              {Strings().reg_aMore}
            </Text>
          </TouchableOpacity>
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
                    : window.height / 1.95 - window.height,
              },
            ]}
          >
            <Image style={styles.bottomimg} source={authIcons.bottomimg} />
            <Image style={styles.star3} source={authIcons.star3} />
            <Image style={styles.star4} source={authIcons.star4} />
            <Image style={styles.horse} source={authIcons.horse} />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
