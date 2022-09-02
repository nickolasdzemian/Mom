import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { newsLike } from "../../data";
import { styles } from "./styles";
import {
  Clock,
  Geo,
  ThreePoints,
  Like,
  UnLike,
  Comments,
  Reptiler,
} from "../../../assets/SVGpost";
import { avatar } from "../../theme/main";
import { getUser } from "../../data";
import { Strings } from "../../storage/strings";

export const PostItem = ({
  item,
  token,
  myUname,
  navigation,
  isChannel,
  isLast,
}) => {
  const [more, setMore] = React.useState(item?.content.length > 500);
  const [like, setLike] = React.useState(item.like_status);
  const [likes, setLikes] = React.useState(item.likes_count);
  const [commentsCount, setCommentsCount] = React.useState(
    item?.comments_count
  );

  const thisDate = new Date().getDate();
  let date = new Date(item.created_at.replace(" ", "T"));
  const day = date.getDate();
  const mon = date.getMonth();
  const yy = date.getFullYear();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const time = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}`;
  date =
    thisDate == day
      ? Strings().news_p_to
      : parseInt(thisDate, 10) - 1 == day
      ? `${Strings().news_p_ye}${time}`
      : `${day < 10 ? `0${day}` : day}.${
          mon < 10 ? `0${mon}` : mon
        }.${yy}, ${time}`;

  function showUser(username) {
    getUser(token, username, navigation, myUname);
  }
  function showChannel() {
    navigation.navigate("ChannelScreen", {
      uuid: item.channel.uuid,
      title: item.channel.title,
    });
  }

  return (
    <View style={[styles.container, { marginBottom: isLast ? 50 : 0 }]}>
      <View style={styles.topContent}>
        <TouchableOpacity
          style={styles.info}
          onPress={() =>
            !isChannel ? showUser(item?.user.username) : showChannel()
          }
        >
          <Image
            style={styles.userImg}
            source={item?.user?.avatar ? { uri: item.user.avatar } : avatar}
            resizeMode="cover"
          />
          <View style={styles.postInfo}>
            <Text style={styles.uName}>
              {isChannel ? item?.channel?.title : item?.user?.username}
            </Text>
            <View style={styles.subInfo}>
              <Clock />
              <Text style={styles.subInfoTxt}>{date}</Text>
              <Geo />
              <Text style={styles.subInfoTxt}>{item?.user?.city}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.info}>
          <ThreePoints color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Image
          style={item?.images?.length > 0 ? styles.mainImg : null}
          source={{ uri: item?.images?.[0] }}
          resizeMode="cover"
        />
      </View>
      {/* {item?.images?.length > 0 ? (
        <View style={styles.middle}>
          <Image
            style={styles.mainImg}
            source={{ uri: item?.images?.[0] }}
            resizeMode="cover"
          />
        </View>
      ) : (
        <View style={styles.middle}>
          <Image style={styles.mainImg} source={test.img} resizeMode="cover" />
        </View>
      )} */}
      <View style={styles.text}>
        <Text style={styles.post}>
          {more ? item?.content.substring(0, 500) + " ..." : item?.content}
          <Text style={styles.postShowTxt} onPress={() => setMore(!more)}>
            {more ? Strings().news_p_sa : null}
          </Text>
        </Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.likecomm}>
          <TouchableOpacity
            style={styles.likecomm}
            onPress={() => {
              setLike(!like);
              setLikes(like ? likes - 1 : likes + 1);
              newsLike(token, item.uuid);
            }}
          >
            {like ? <Like /> : <UnLike />}
            <Text style={styles.count}>{likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.likecomm, { marginLeft: 8 }]}
            onPress={() => {
              navigation.navigate("NewsPost", {
                item: item,
                token: token,
                myUname: myUname,
                isChannel: isChannel,
              });
            }}
          >
            <Comments />
            <Text style={styles.count}>{commentsCount}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.likecomm}
          onPress={() => {
            navigation.navigate("NewsPost", {
              item: item,
              token: token,
              myUname: myUname,
              isChannel: isChannel,
            });
          }}
        >
          <Reptiler />
        </TouchableOpacity>
      </View>
      {item?.comments?.length ? (
        <View style={styles.comments}>
          <Text style={styles.post}>
            <Text style={styles.uName}>
              {item.comments[0].user.username}
              {"  "}
            </Text>
            {item.comments[0].content}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
