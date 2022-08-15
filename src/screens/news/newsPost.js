/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  ImageBackground,
  FlatList,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import { styles as commentStyles } from "../../components/newsItem/styles";
import { bg_blue, OS } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, Post } from "../../components";
import { getComments, getUser } from "../../data";

export const NewsPost = ({ route, navigation }) => {
  const { item, token, isChannel, myUname } = route.params;
  const [comments, setComments] = React.useState();
  const [next, setNext] = React.useState(null);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        commentStyles.commentsContent,
        styles.commentsItem,
        {
          borderBottomStartRadius: index + 1 == comments?.length ? 10 : 0,
          borderBottomEndRadius: index + 1 == comments?.length ? 10 : 0,
          paddingBottom: index + 1 == comments?.length ? 30 : 15,
        },
      ]}
    >
      <Text style={[commentStyles.post, { fontSize: 12 }]}>
        <Text
          style={[commentStyles.uName, { fontSize: 12 }]}
          onPress={() => showUser(item?.user.username)}
        >
          {item.user.username}
          {"  "}
        </Text>
        {item.content}
      </Text>
    </View>
  );

  const update = () => {
    setNext(null);
    getComments(item.uuid, token, null, setNext, comments, setComments);
  };

  const more = () => {
    getComments(item.uuid, token, next, setNext, comments, setComments);
  };

  function showUser(username) {
    getUser(token, username, navigation, myUname);
  }

  React.useEffect(() => {
    item?.comments_count
      ? getComments(item.uuid, token, null, setNext, comments, setComments)
      : null;
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <KeyboardAvoidingView
        behavior={!OS ? "position" : "height"}
        style={{ flex: 1, marginBottom: 130 }}
        keyboardVerticalOffset={
          item?.images?.length > 0 || item?.content?.length > 250 ? -5 : -200
        }
      >
        <NewsHeader lIco={<BackBtn />} lEv={() => navigation.goBack()} />

        <FlatList
          data={comments}
          style={styles.comments}
          renderItem={renderItem}
          keyExtractor={(item) => item.uuid}
          refreshing={comments == undefined && !"comments_count" in item}
          onRefresh={() => update()}
          onEndReached={() => (next ? more() : null)}
          onEndReachedThreshold={1}
          ListEmptyComponent={
            "comments_count" in item ? null : (
              <Text style={styles.nocommentsTxt}>
                Комментарии к данному посту отключены :(
              </Text>
            )
          }
          ListHeaderComponent={
            <Post
              item={item}
              token={token}
              myUname={myUname}
              navigation={navigation}
              isAlone
              isChannel={isChannel}
              getComments={() =>
                getComments(
                  item.uuid,
                  token,
                  null,
                  setNext,
                  comments,
                  setComments
                )
              }
            />
          }
        />
      </KeyboardAvoidingView>
      <BottomShadow />
    </ImageBackground>
  );
};
