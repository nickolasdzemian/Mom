import * as React from "react";
import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../theme/main";
import { DropDown } from "../../../assets/SVGnewsHeader";
import { newsAll } from "../../data";

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

const titles = ["Лента новостей", "Лента подписок", "Лента каналов"];

export const NewsHeader = ({
  lIco,
  lEv,
  tTxt,
  tTxt0,
  tIco,
  tEv,
  rIco,
  rEv,
  sch,
  filter,
  setFilter,
  updateEv,
}) => {
  const [modal, setModal] = React.useState(false);
  const [title, setTitle] = React.useState(titles[tTxt]);

  const changeNews = (item) => {
    setTitle(item);
    setModal(!modal);
    const type = titles.indexOf(item);
    updateEv(type);
  };

  return sch ? (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => (lEv ? lEv() : null)}>
        {lIco}
      </TouchableOpacity>
      <View style={styles.search}>
        {rIco}
        <TextInput
          style={styles.input}
          placeholder="Ищи по запросам"
          placeholderTextColor={COLORS.gray1}
          onChangeText={(txt) => setFilter({ ...filter, text: txt })}
          value={filter.text}
          onSubmitEditing={() => lEv()}
          returnKeyType="search"
        />
      </View>
    </View>
  ) : (
    <View
      style={[
        styles.header,
        { backgroundColor: modal ? "white" : "transparent" },
      ]}
    >
      <TouchableOpacity style={styles.btn} onPress={() => lEv ? lEv() : null}>
        {lIco}
      </TouchableOpacity>
      <TouchableOpacity style={styles.title} onPress={() => setModal(!modal)}>
        <Text style={styles.titleTxt}>
          {tTxt0 ? tTxt0 : title ? title : null}
        </Text>
        {tIco ? <DropDown /> : null}
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onShow={() => {
          setTimeout(() => setModal(false), 7000);
        }}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {titles.map((item) => (
              <Text
                key={item}
                style={styles.modalText}
                onPress={() => changeNews(item)}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: rIco ? "white" : "transparent",
            borderColor: rIco ? "white" : "transparent",
          },
        ]}
        onPress={() => (rEv ? rEv() : null)}
      >
        {rIco}
      </TouchableOpacity>
    </View>
  );
};
