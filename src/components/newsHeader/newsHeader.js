import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../theme/main";
import { DropDown } from "../../../assets/SVGnewsHeader";
import { Strings } from "../../storage/strings";

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

export const NewsHeader = ({
  lIco,
  lEv,
  tTxt,
  tTxt0,
  tIco,
  tEv,
  rIco,
  rEv,
  load,
  sch,
  filter,
  setFilter,
  updateEv,
}) => {
  const titles = [
    Strings().news_h_all,
    Strings().news_h_sub,
    Strings().news_h_ch,
  ];
  const [modal, setModal] = React.useState(false);
  const [title, setTitle] = React.useState(titles[tTxt]);
  const [loading, setLoading] = React.useState(false);

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
          placeholder={Strings().news_h_sch}
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
      <TouchableOpacity style={styles.btn} onPress={() => (lEv ? lEv() : null)}>
        {lIco}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => (tIco ? setModal(!modal) : tEv ? tEv() : null)}
      >
        <Text style={styles.titleTxt} numberOfLines={1} ellipsizeMode="tail">
          {tTxt0 ? tTxt0 : title ? title : null}
        </Text>
        {tIco ? <DropDown /> : null}
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onShow={() => {
          // setTimeout(() => setModal(false), 7000);
        }}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <TouchableOpacity
          onPress={() => setModal(!modal)}
          style={styles.centeredView}
        >
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
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: rIco ? "white" : "transparent",
            borderColor: rIco ? "white" : "transparent",
          },
        ]}
        onPress={() => (rEv && load ? rEv(setLoading) : rEv ? rEv() : null)}
      >
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.gray1} />
        ) : (
          rIco
        )}
      </TouchableOpacity>
    </View>
  );
};
