/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { bg_blue, COLORS } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";

export const CalendarPostScreen = ({ route, navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const { data, title } = route.params;
  const [attributes, setAttributes] = React.useState();

  function getAttrs() {
    if (data?.attributes) {
      let l = Object.keys(data.attributes).length;
      const keys = Object.keys(data.attributes);
      const values = Object.values(data.attributes);
      setAttributes({ keys: keys, values: values });
    }
  }

  React.useEffect(() => {
    getAttrs();
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0={title}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.content, { marginBottom: 75 }]}>
          <Text style={[styles.libTitle, { marginTop: 10 }]}>
            {data?.title}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.images?.map((item) => (
              <Image
                style={[styles.calTopImg, { marginRight: 15 }]}
                source={{ uri: item }}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
          <View style={[styles.trimArea, { justifyContent: "space-between" }]}>
            {attributes?.keys?.map((key, i) => (
              <View style={{ marginRight: 110 }}>
                <Text
                  style={[
                    styles.calItemTxt,
                    { marginBottom: 0, textAlign: "left" },
                  ]}
                >
                  {key}
                </Text>
                <Text style={[styles.valTxtBld, { textAlign: "left" }]}>
                  {attributes?.values[i]}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.postContentTxt}>{data?.content}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
