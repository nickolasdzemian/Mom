import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { newsLike } from "../../data";
import { styles } from "./styles";
import { COLORS } from "../../theme/main";
import {
  Clock,
  Geo,
  ThreePoints,
  Like,
  UnLike,
  Comments,
  Reptiler,
} from "../../../assets/SVGpost";
import { commentPost, getUser } from "../../data";

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

export const Post = ({
  item,
  token,
  navigation,
  isAlone,
  isChannel,
  getComments,
}) => {
  const [more, setMore] = React.useState(item?.content.length > 500);
  const [like, setLike] = React.useState(item.like_status);
  const [likes, setLikes] = React.useState(item.likes_count);
  const [input, setInput] = React.useState(false);
  const [text, setText] = React.useState();
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
  date =
    thisDate == day
      ? "Сегодня"
      : parseInt(thisDate, 10) - 1 == day
      ? `Вчера в ${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}`
      : `${day < 10 ? `0${day}` : day}.${mon < 10 ? `0${mon}` : mon}.${yy}, ${
          hh < 10 ? `0${hh}` : hh
        }:${mm < 10 ? `0${mm}` : mm}`;

  const hasComment = item?.comments?.length > 0;
  const hasImages = item?.images?.length > 0;
  const [comment, setComment] = React.useState(
    hasComment ? item.comments : null
  );

  function sendComment() {
    commentPost(token, item?.uuid, text, commentsCount, setCommentsCount);
    setTimeout(() => {
      getComments();
    }, 500);
    setInput(false);
    setText();
  }

  function showUser(username) {
    getUser(token, username, navigation);
  }

  return (
    <View
      style={[
        styles.container,
        {
          // borderBottomWidth: isAlone && item?.comments_count ? 0 : 2,
          borderBottomStartRadius: isAlone && item?.comments_count ? 0 : 10,
          borderBottomEndRadius: isAlone && item?.comments_count ? 0 : 10,
        },
      ]}
    >
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
              <Text style={styles.subInfoTxt}>{test.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.info}>
          <ThreePoints />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.middle}
        horizontal
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
      >
        {hasImages
          ? item.images.map((img) => (
              <Image
                key={img}
                style={[styles.mainImg, { marginRight: 20 }]}
                source={{ uri: img }}
                resizeMode="cover"
              />
            ))
          : null}
      </ScrollView>
      <View style={styles.text}>
        <Text style={styles.post}>
          {more && !isAlone
            ? item?.content.substring(0, 500) + " ..."
            : item?.content}
          <Text style={styles.postShowTxt} onPress={() => setMore(!more)}>
            {more && !isAlone ? " Показать полностью" : null}
          </Text>
        </Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.likecomm}>
          {!isAlone ? (
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
          ) : null}

          <TouchableOpacity
            style={[styles.likecomm, { marginLeft: 8 }]}
            onPress={() => {}}
          >
            <Comments />
            <Text style={styles.count}>{commentsCount}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.likecomm}
          onPress={() => {
            !isAlone
              ? navigation.navigate("NewsPost", {
                  item: item,
                  token: token,
                  isChannel: isChannel,
                })
              : item?.comments_count
              ? setInput(!input)
              : null;
          }}
        >
          <Reptiler />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.comments,
          { marginBottom: !hasComment && !isAlone ? -27 : null },
        ]}
      >
        {input ? (
          <TextInput
            style={styles.input}
            placeholder="Введите текст комментария.."
            placeholderTextColor={COLORS.blue_text}
            onChangeText={(txt) => setText(txt)}
            maxLength={300}
            multiline
            numberOfLines={5}
            value={text}
            returnKeyType="send"
            onSubmitEditing={() => sendComment()}
          />
        ) : null}
        {!isAlone ? (
          <Text style={styles.post}>
            <Text style={styles.uName}>
              {hasComment ? comment[0].user.username : ""}
              {"  "}
            </Text>
            {hasComment ? comment[0].content : ""}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
