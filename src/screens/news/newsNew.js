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
import { bg_blue, window } from "../../theme/main";
import { BackBtn, Check } from "../../../assets/SVGnewsHeader";
import { Geo, Gallery } from "../../../assets/SVGpost";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  location: "Киев",
};

const options = { mediaType: "mixed", presentationStyle: "pageSheet" };

export const NewScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [text, setText] = React.useState();
  const [fbtn, setFbtn] = React.useState(window.height / 1.65);
  const [assets, setAssets] = React.useState();
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <ScrollView style={styles.background}>
        <NewsHeader
          lIco={<BackBtn />}
          lEv={() => DeviceEventEmitter.emit("event.newPost", false)}
          tTxt0="Новая запись"
          rIco={<Check />}
          rEv={() =>
            navigation.navigate("NewScreenSet", {
              text: text,
              assets: assets ? assets : null,
            })
          }
        />
        <View style={styles.newContent}>
          <View style={post.info}>
            <Image style={post.userImg} source={test.img} resizeMode="cover" />
            <View style={post.postInfo}>
              <Text style={post.uName}>{globalData?.user.name}</Text>
              <View style={post.subInfo}>
                <Geo />
                <Text style={post.subInfoTxt}>{test.location}</Text>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.newInput}
            onChangeText={(txt) => setText(txt)}
            value={text}
            multiline
            onFocus={() => setFbtn(window.height / 2.7)}
            onBlur={() => setFbtn(window.height / 1.65)}
            placeholder={`Задайте вопрос, поделитесь\nэмоциями, историей или\nпереживаниями ...`}
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
