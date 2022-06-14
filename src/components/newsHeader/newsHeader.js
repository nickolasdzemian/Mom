import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { BUTTON, BLUETXT } from "../../theme/main";

/**
 * @param {Function} lIco Иконка хедера слева.
 * @param {Function} lEv Действие левой иконки хедера.
 * @param {String} tTxt Центальный заголовок.
 * @param {Function} tIco Иконка справа от заголовка.
 * @param {Function} tEv Действие центрального заголовка хедера.
 * @param {Function} rIco Иконка хедера справа.
 * @param {Function} rEv Действие правой иконки хедера.
 * @param {Boolean} sch Есть ли в хедере компонент поиска.
 */
export const NewsHeader = ({ lIco, lEv, tTxt, tIco, tEv, rIco, rEv, sch }) => {
  const action = (event, route) => {
    event ? event() : null;
    route ? nav.navigate(route) : null;
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => action()}>
        {lIco}
      </TouchableOpacity>
      <TouchableOpacity style={styles.title} onPress={() => action()}>
        <Text style={styles.titleTxt}>{tTxt ? tTxt : null}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => action()}>
        {rIco}
      </TouchableOpacity>
    </View>
  );
};
