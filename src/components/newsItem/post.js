import * as React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { BUTTON, BLUETXT } from "../../theme/main";
import {
  Clock,
  Geo,
  ThreePoints,
  Like,
  UnLike,
  Comments,
  Reptiler,
} from "../../../assets/SVGpost";

/**
 * @param {Function} lIco Иконка хедера слева.
 * @param {Function} lEv Действие левой иконки хедера.
 * @param {String} tTxt Центальный заголовок.
 * @param {Boolean} tIco Иконка справа от заголовка.
 * @param {Function} tEv Действие центрального заголовка хедера.
 * @param {Function} rIco Иконка хедера справа.
 * @param {Function} rEv Действие правой иконки хедера.
 * @param {Boolean} sch Есть ли в хедере компонент поиска.
 */

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

export const Post = ({ item }) => {
  const [more, setMore] = React.useState(item?.content.length > 500);
  const [like, setLike] = React.useState(item.like_status);
  const hasComment = item?.comments?.length > 0;
  const hasImages = item?.images?.length > 0;
  const [comment, setComment] = React.useState(
    hasComment ? item.comments : null
  );
  console.log(item?.images);
  //   const action = (event, route) => {
  //     event ? event() : null;
  //     route ? nav.navigate(route) : null;
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <TouchableOpacity style={styles.info}>
          <Image style={styles.userImg} source={test.img} resizeMode="cover" />
          <View style={styles.postInfo}>
            <Text style={styles.uName}>{item?.user.username}</Text>
            <View style={styles.subInfo}>
              <Clock />
              <Text style={styles.subInfoTxt}>{test.time}</Text>
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
      <Image source={{
        method: "GET",
        uri: "http://185.174.173.232/storage/feed/FJtbxMJIH1RqcE71lUOPQUSeS40xMvLzBGojLmqR.jpg"
        }}
          style={[styles.mainImg, { marginRight: 20 }]}
          resizeMode="cover" />
      {hasImages ? 
        item.images.map((img) => 
        <Image
          key={img}
          style={[styles.mainImg, { marginRight: 20 }]}
          source={{uri: img}}
          resizeMode="cover"
        />)
      : null}
      </ScrollView>
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
            onPress={() => setLike(!like)}
          >
            {like ? <Like /> : <UnLike />}
            <Text style={styles.count}>{item.likes_count}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.likecomm, { marginLeft: 8 }]}
            onPress={() => {}}
          >
            <Comments />
            <Text style={styles.count}>{item.comments_count}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.likecomm} onPress={() => {}}>
          <Reptiler />
        </TouchableOpacity>
      </View>
      <View style={styles.comments}>
        <Text style={styles.post}>
          <Text style={styles.uName}>
            {hasComment ? comment[0].user.username : ""}
            {"  "}
          </Text>
          {hasComment ? comment[0].content : ""}
        </Text>
      </View>
    </View>
  );
};
