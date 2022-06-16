import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { BUTTON, BLUETXT } from "../../theme/main";
import { Clock, Geo, ThreePoints } from "../../../assets/SVGpost";

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
};

export const Post = () => {
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
            <Text style={styles.uName}>{test.username}</Text>
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
    </View>
  );
};
