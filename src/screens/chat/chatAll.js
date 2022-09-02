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
  DeviceEventEmitter,
} from "react-native";
import { styles } from "./styles";
import { bg_blue, COLORS, avatar } from "../../theme/main";
import { BackBtn, Looopa } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { getUserChat } from "../../data";
import { Strings } from "../../storage/strings";

import { db } from "../../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

export const AllChatsScreen = ({ navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [search, setSearch] = React.useState("");
  const [users, setUsers] = React.useState();

  function filler() {
    let filtered;
    if (users && search !== "") {
      filtered = users.filter((item) => item.name.search(search) != -1);
      setUsers(filtered);
    } else {
      const q = query(collection(db, "user", globalData.user.username, "list"));
      onSnapshot(q, (snapshot) => {
        const u = snapshot.docs.map((item) => item.username);
        if (users?.length !== u?.length) {
          getUserChat(
            globalData.token,
            snapshot.docs.map((doc) => ({
              username: doc.data()._id,
            })),
            setUsers
          );
        }
      });
    }
  }

  React.useEffect(() => {
    const q = query(collection(db, "user", globalData.user.username, "list"));
    onSnapshot(q, (snapshot) => {
      const u = snapshot.docs.map((item) => item.username);
      if (users?.length !== u?.length) {
        getUserChat(
          globalData.token,
          snapshot.docs.map((doc) => ({
            username: doc.data()._id,
          })),
          setUsers
        );
      }
    });
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => DeviceEventEmitter.emit("event.HOME", true)}
        tTxt0={Strings().chat_t}
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
            placeholder={Strings().chat_s}
            returnKeyType="search"
            placeholderTextColor={COLORS.gray1}
          />
        </View>
        <View style={styles.content}>
          {users ? (
            users?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.postItem,
                  { marginBottom: i + 1 == users?.length ? 55 : 10 },
                ]}
                onPress={() =>
                  navigation.navigate("ChatTo", {
                    uName: item?.username,
                  })
                }
              >
                <Image
                  style={styles.calPostAv}
                  source={item?.avatar_url ? { uri: item.avatar_url } : avatar}
                  resizeMode="contain"
                />
                <View style={styles.postTitle}>
                  <Text
                    style={styles.postTitleTxt}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item?.username}
                  </Text>
                  <Text style={[styles.calItemTxt, { textAlign: "left" }]}>
                    {item?.city}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={[styles.libTitle, styles.noChats]}>
              {Strings().chat_no}
            </Text>
          )}
        </View>
      </ScrollView>
      <BottomShadow />
    </ImageBackground>
  );
};
