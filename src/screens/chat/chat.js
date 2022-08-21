/* eslint-disable react-native/no-inline-styles */
import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { ImageBackground, Image, View, Text, Alert } from "react-native";
import {
  GiftedChat,
  Send,
  Bubble,
  InputToolbar,
} from "react-native-gifted-chat";
import { styles } from "./styles";
import { bg_blue, window } from "../../theme/main";
import { BackBtn, Lines } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { getUser } from "../../data";

import { auth, db } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

let chatID = "";
let msgCount = 0;

export const ChatOnceScreen = ({ route, navigation }) => {
  const uName = route?.params?.uName;
  const [{ globalData }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  function getChatID() {
    if (uName) {
      const users = [String(uName), String(globalData.user.username)];
      users.sort((a, b) => a.localeCompare(b));
      chatID = users[0] + "-" + users[1];
    } else {
      Alert.alert(
        "Ошибка",
        "Вы не можете отправить сообщение. Возникла внутренняя ошибка или включена блокировка.",
        [{ text: "OK" }]
      );
    }
  }

  function showUser() {
    getUser(globalData.token, uName, navigation, globalData.user.username);
  }

  const renderMessageText = (props) => {
    const { currentMessage } = props;
    return <Text style={styles.msgTxt}>{currentMessage.text}</Text>;
  };

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendBtn}>
          <Image
            source={require("../../../assets/chat/SendFullImg.png")}
            resizeMode="contain"
          />
        </View>
      </Send>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: styles.renderLeftBubble,
          right: styles.renderRightBubble,
        }}
      />
    );
  }

  function renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        renderSend={(props) => renderSend(props)}
        primaryStyle={styles.msgInputContainer}
      />
    );
  }

  useEffect(() => {
    getChatID();
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "LOADING..",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "Service Support",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    // ]);
  }, []);

  useLayoutEffect(() => {
    getChatID();
    const q = query(
      collection(db, "chats", "chats", chatID),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      msgCount = snapshot.docs.length;
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
          sent: true,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    if (msgCount < 1) {
      addDoc(collection(db, "user", globalData.user.username, "list"), {
        _id: uName,
      });
      addDoc(collection(db, "user", uName, "list"), {
        _id: globalData.user.username,
      });
    }
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "chats", "chats", chatID), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader
        lIco={<BackBtn />}
        lEv={() => navigation.goBack()}
        tTxt0={uName ? uName : "Чат"}
        rIco={<Lines />}
      />
      <View style={styles.content}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={false}
          onSend={(messages) => onSend(messages)}
          onPressAvatar={() => showUser()}
          renderMessageText={(props) => renderMessageText(props)}
          renderBubble={(props) => renderBubble(props)}
          renderInputToolbar={(props) => renderInputToolbar(props)}
          isCustomViewBottom={true}
          listViewProps={{
            showsVerticalScrollIndicator: false,
            width: window.width * 0.94,
            marginTop: -(window.height * 0.065),
            marginBottom: 50,
            alignSelf: "center",
          }}
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL
              ? auth?.currentUser?.photoURL
              : "",
          }}
          placeholder="Ваше сообщение..."
          textInputProps={{ returnKeyType: "send" }}
          textInputStyle={styles.msgInputTxt}
        />
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
