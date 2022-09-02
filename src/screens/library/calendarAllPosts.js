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
import { bg_blue, COLORS, avatar } from "../../theme/main";
import { BackBtn, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader } from "../../components";
import { useStateValue } from "../../provider";
import { libraryCalendarAllPosts, librarySinglePost } from "../../data";
import { Strings } from "../../storage/strings";

export const CalendarAllPostsScreen = ({ route, navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const { id } = route.params;
  const [search, setSearch] = React.useState("");
  const [posts, setPosts] = React.useState();

  const getAll = () =>
    libraryCalendarAllPosts(globalData.token, id, posts, setPosts);

  function filler() {
    let filtered;
    if (search !== "" && posts) {
      filtered = posts.filter((item) => item.title.search(search) != -1);
      setPosts(filtered);
    } else {
      getAll();
    }
  }

  React.useEffect(() => {
    getAll();
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0={Strings().cal_all_ti}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <TouchableOpacity style={styles.searchIco} onPress={() => filler()}>
            <Looopa />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            onChangeText={(txt) => setSearch(txt)}
            onSubmitEditing={() => filler()}
            value={search}
            placeholder={Strings().cal_all}
            returnKeyType="search"
            placeholderTextColor={COLORS.gray1}
          />
        </View>
        <View style={styles.content}>
          {posts?.map((item, i) => (
            <TouchableOpacity
              style={[
                styles.postItem,
                { marginBottom: i + 1 == posts?.length ? 55 : 0 },
              ]}
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
                source={item?.image_url ? { uri: item.image_url } : avatar}
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
