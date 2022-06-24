/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { ImageBackground, FlatList, View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { styles as commentStyles } from "../../components/newsItem/styles";
import { bg_blue } from "../../theme/main";
import { BackBtn } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow, Post } from "../../components";
import { getComments } from "../../data";

export const NewsPost = ({ route, navigation }) => {
  const { item, token } = route.params;
  const [comments, setComments] = React.useState();
  const [next, setNext] = React.useState(null);

  const renderItem = ({ item, index }) => (
    <View style={[commentStyles.commentsContent, styles.commentsItem]}>
      <Text style={[commentStyles.post, {fontSize: 12}]}>
        <Text style={[commentStyles.uName, {fontSize: 12}]}>
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

  React.useEffect(() => {
    item?.comments_count
      ? getComments(item.uuid, token, null, setNext, comments, setComments)
      : null;
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader lIco={<BackBtn />} lEv={() => navigation.goBack()} />
      {item?.comments_count ? (
        <FlatList
          data={comments}
          style={styles.comments}
          renderItem={renderItem}
          keyExtractor={(item) => item.uuid}
          removeClippedSubviews
          refreshing={comments == undefined}
          onRefresh={() => update()}
          onEndReached={() => (next ? more() : null)}
          onEndReachedThreshold={1}
          ListHeaderComponent={
            <Post item={item} token={token} navigation={navigation} isAlone />
          }
        />
      ) : (
        <View style={styles.nocomments}>
          <Post item={item} token={token} navigation={navigation} isAlone />
          <Text style={styles.nocommentsTxt}>
            Комментарии к данному посту отключены :(
          </Text>
        </View>
      )}
      <BottomShadow />
    </ImageBackground>
  );
};
