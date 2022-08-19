/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, COLORS } from "../../theme/main";
import { BackBtn, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";
import { libraryCalendarAllPosts, librarySinglePost } from "../../data";

const sampleBlogIco = require("../../../assets/library/sampleb.jpeg");

export const CalendarAllPostsScreen = ({ route, navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const { id } = route.params;
  const [search, setSearch] = React.useState("");
  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    libraryCalendarAllPosts(globalData.token, id, posts, setPosts);
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0="Статьи"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <TouchableOpacity style={styles.searchIco}>
            <Looopa />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            onChangeText={(txt) => setSearch(txt)}
            value={search}
            placeholder="Ищите любые темы в статьях"
            returnKeyType="search"
            placeholderTextColor={COLORS.gray1}
          />
        </View>
        <View style={styles.content}>
          {posts?.map((item) => (
            <TouchableOpacity
              style={styles.postItem}
              onPress={() =>
                librarySinglePost(
                  globalData.token,
                  item.uuid,
                  navigation,
                  item.title
                )
              }
            >
              <Image
                style={styles.calPostAv}
                source={
                  item?.image_url ? { uri: item.image_url } : sampleBlogIco
                }
                resizeMode="contain"
              />
              <View style={styles.postTitle}>
                <Text
                  style={styles.postTitleTxt}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item?.title}
                </Text>
                <Text style={[styles.calItemTxt, { textAlign: "left" }]}>
                  {item?.uuid}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
