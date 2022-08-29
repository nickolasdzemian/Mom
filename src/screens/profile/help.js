/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import OpenFile from "react-native-doc-viewer";
import { styles } from "./styles";
import { bg_blue, OS, COLORS } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { ChevronRight } from "../../../assets/SVGprofile";
import { NewsHeader, BottomShadow } from "../../components";
import { Strings } from "../../storage/strings";

export const HelpTo = ({ navigation }) => {
  const [loading, setLoading] = React.useState({ policy: false, rules: false });
  function saveBack() {
    navigation.goBack();
  }

  function handleDocs(type) {
    let url;
    if (type == "policy") {
      url = "https://u-mom.com/Privacy_policy.pdf";
    } else if (type == "rules") {
      url = "https://u-mom.com/Terms_of_use.pdf";
    }
    if (!OS) {
      OpenFile.openDoc(
        [
          {
            url: url,
          },
        ],
        (error, url) => {
          if (error) {
            alert(String(error));
          } else {
            console.log(url);
            setTimeout(() => {
              setLoading({ policy: false, rules: false });
            }, 350);
          }
        }
      );
    } else {
      //Android
      OpenFile.openDoc(
        [
          {
            url: url,
            fileName: type,
            cache: true,
          },
        ],
        (error, url) => {
          if (error) {
            if (error.slice(0, 8) == 'Activity') {
              alert('Отсутствует приложение для просмотра PDF!')
            }
            setLoading({ policy: false, rules: false });
            console.error(error);
          } else {
            console.log(url);
            setTimeout(() => {
              setLoading({ policy: false, rules: false });
            }, 350);
          }
        }
      );
    }
  }

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => saveBack()}
        tTxt0={Strings().set_he}
      />
      <ScrollView style={[styles.main, { marginTop: -25 }]}>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_re}</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_he}</Text>
            <ChevronRight />
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_ru}</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_cc}</Text>
            <ChevronRight />
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => {
              handleDocs("rules");
              setLoading({ ...loading, rules: true });
            }}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_uu}</Text>
            {loading.rules ? (
              <ActivityIndicator size="small" color={COLORS.blue_text} />
            ) : (
              <ChevronRight />
            )}
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => {
              handleDocs("policy");
              setLoading({ ...loading, policy: true });
            }}
          >
            <Text style={styles.settingsBtnTxt}>{Strings().set_h_pl}</Text>
            {loading.policy == true ? (
              <ActivityIndicator size="small" color={COLORS.blue_text} />
            ) : (
              <ChevronRight />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
