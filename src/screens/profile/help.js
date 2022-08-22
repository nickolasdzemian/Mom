/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { ChevronRight } from "../../../assets/SVGprofile";
import { NewsHeader, BottomShadow } from "../../components";

export const HelpTo = ({ navigation }) => {
  function saveBack() {
    navigation.goBack();
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt0="Помощь и поддержка"
      />
      <ScrollView style={[styles.main, { marginTop: -25 }]}>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Обратная связь</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Помощь по приложению</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>Правила сообщества</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>
              Пользовательское соглашение
            </Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
