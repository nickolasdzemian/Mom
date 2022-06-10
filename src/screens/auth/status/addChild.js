/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { styles } from "../styles";
import { bg_blue, COLORS } from "../../../theme/main";
import { authIcons } from "../../../../assets/auth/media";
import { Calendar } from "../../../../assets/SVGstartup";
import { YellowButton } from "../../../components";

import { addChild } from "../../../data/childAdd";

export const AddChild = ({ navigation }) => {
  const date = new Date();
  const [childData, setChildData] = React.useState({
    name: "",
    date: "",
    gender: 1,
  });
  const [open, setOpen] = React.useState(false);
  const route = (r) => {
    navigation.navigate(r);
  };

  function parsedDate(date) {
    const day = date.getDate() < 10 ? String('0' + date.getDate()) : date.getDate();
    const month = date.getMonth() < 10 ? String('0' + date.getMonth()) : date.getMonth();
    const year = date.getFullYear();
    return String(
      day + "-" + month + "-" + year
    );
  };

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.ftop}>
        <Image style={styles.topimg} source={authIcons.topimg} />
        <Image style={styles.star1} source={authIcons.star1} />
        <Image style={styles.star2} source={authIcons.star2} />
        <Image style={styles.cloud} source={authIcons.cloud} />
        <Image style={styles.babyShirt} source={authIcons.babyShirt} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>Добавьте вашего малыша</Text>
        <Text style={styles.subTitle}>
          Здесь будет краткое описание данного экрана. Несколько предложений!{" "}
        </Text>
        <TextInput
          style={[styles.input, { marginTop: 45 }]}
          placeholder="Имя"
          placeholderTextColor={COLORS.blue_text}
          onChangeText={(txt) => setChildData({ ...childData, name: txt })}
          maxLength={30}
          value={childData.name}
        />
        <TouchableOpacity style={styles.btnCAL} onPress={() => setOpen(!open)}>
          <Text style={styles.btnTXT}>
            {childData.date == "" ? "Дата рождения" : childData.date}
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
            <Text style={styles.selTxt}>Мальчик</Text>
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
            <Text style={styles.selTxt}>Девочка</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          locale="ru_RU"
          title="Выберите дату:"
          confirmText="Сохранить"
          onConfirm={(date) => {
            setOpen(false);
            setChildData({ ...childData, date: parsedDate(date) });
          }}
          cancelText="Отменить"
          onCancel={() => {
            setOpen(false);
          }}
        />

        <YellowButton
          txt="Продолжить"
          // route="Reg"
          style={{ marginTop: 40 }}
          nav={navigation}
          event={() => addChild(childData, null, navigation, "Reg")}
        />
        <TouchableOpacity
          onPress={() => alert("Отсутствует логика кнопки!!!")}
          style={[styles.btn, { marginTop: 8 }]}
        >
          <Text style={[styles.btnTXT, { color: "#FFF5DC" }]}>
            Добавить еще одного ребенка
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Image style={styles.bottomimg} source={authIcons.bottomimg} />
        <Image style={styles.star3} source={authIcons.star3} />
        <Image style={styles.star4} source={authIcons.star4} />
        <Image style={styles.horse} source={authIcons.horse} />
      </View>
    </ImageBackground>
  );
};
