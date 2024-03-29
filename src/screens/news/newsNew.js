/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  DeviceEventEmitter,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { styles } from "./styles";
import { styles as post } from "../../components/newsItem/styles";
import { bg_blue, window, OSA, COLORS, avatar } from "../../theme/main";
import { BackBtn, Check } from "../../../assets/SVGnewsHeader";
import { Geo, Gallery } from "../../../assets/SVGpost";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";
import { Strings } from "../../storage/strings";

const options = { mediaType: "mixed", presentationStyle: "pageSheet" };

export const NewScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [text, setText] = React.useState();
  const [fbtn, setFbtn] = React.useState(window.height / 1.65);
  const [ftxt, setFTxt] = React.useState(window.height / 1.8);
  const [assets, setAssets] = React.useState();
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <ScrollView style={styles.background}>
        <NewsHeader
          lIco={<BackBtn />}
          lEv={() => DeviceEventEmitter.emit("event.newPost", false)}
          tTxt0={Strings().news_n_t}
          rIco={<Check />}
          rEv={() =>
            navigation.navigate("NewScreenSet", {
              text: text,
              assets: assets ? assets : null,
            })
          }
        />
        <View style={styles.newContent} behavior={!OSA ? "position" : "height"}>
          <View style={post.info}>
            <Image
              style={post.userImg}
              source={
                globalData?.user?.avatar_url
                  ? { uri: globalData.user.avatar_url }
                  : avatar
              }
              resizeMode="cover"
            />
            <View style={post.postInfo}>
              <Text style={post.uName}>{globalData?.user.name}</Text>
              <View style={post.subInfo}>
                <Geo />
                <Text style={post.subInfoTxt}>{globalData?.user.city}</Text>
              </View>
            </View>
          </View>
          <TextInput
            style={[styles.newInput, { height: ftxt }]}
            onChangeText={(txt) => setText(txt)}
            value={text}
            multiline
            onFocus={() => {
              setFbtn(window.height / 2.7);
              setFTxt(window.height / 2.9);
            }}
            onBlur={() => {
              setFbtn(window.height / 1.65);
              setFTxt(window.height / 1.8);
            }}
            placeholder={Strings().news_n_ph}
            placeholderTextColor={COLORS.gray1}
          />
          <TouchableOpacity
            style={[styles.gallery, { marginTop: fbtn }]}
            onPress={() => {
              launchImageLibrary(options, setAssets);
            }}
          >
            <Gallery />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
