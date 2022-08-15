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
import { getUser } from "../../data";

const test = {
  img: require("../../../assets/tests/m8ivcpkrvfaq1vfm53mhxafmzna.jpeg"),
  username: "sandra1997",
  time: "Сегодня",
  location: "Киев",
  text1:
    "aЗдравствуйте дорогие мамы, я провожу исследовательскую работу, как питаются дети. Помогите пожалуйста, пройдите опрос. Буду очень благодарна!aЗдравствуйте дорогие мамы, я провожу исследовательскую работу, как питаются дети. Помогите пожалуйста, пройдите опрос. Буду очень благодарна!  ",
  text2:
    "Мамочки, здравствуйте! Моему сынишке пошла третья неделя и он стал беспокойным по ночам. Я подозреваю, что начались колики. Это мой первый ребенок и я опыта не имею в этом вопросе. Посоветуйте, кому что эффективно помогало? Спасибо заранее!",
  comment:
    "Привет, с удовольствием помогу вам, напишите мне в личку. Буду ждать)",
};

export const PostItem = ({ item, token, myUname, navigation, isChannel }) => {
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
      ? "Сегодня"
      : parseInt(thisDate, 10) - 1 == day
      ? `Вчера в ${time}`
      : `${day < 10 ? `0${day}` : day}.${
          mon < 10 ? `0${mon}` : mon
        }.${yy}, ${time}`;

  function showUser(username) {
    getUser(token, username, navigation, myUname);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <TouchableOpacity
          style={styles.info}
          onPress={() => (!isChannel ? showUser(item?.user.username) : null)}
        >
          <Image style={styles.userImg} source={test.img} resizeMode="cover" />
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
          <ThreePoints />
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
            {more ? " Показать полностью" : null}
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
