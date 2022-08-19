/* eslint-disable react-native/no-inline-styles */
import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { styles } from "./styles";
import { bg_blue, COLORS } from "../../theme/main";
import { BackBtn, Lines } from "../../../assets/SVGnewsHeader";
import { NewsHeader, BottomShadow } from "../../components";
import { useStateValue } from "../../provider";
import { auth, db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export const ChatOnceScreen = ({ route, navigation }) => {
  const [{ globalData }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(auth?.currentUser, 'skdjfhskdjfhskdjhfskjdfh');
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  useLayoutEffect(() => {
    const q = query(collection(db, "chats"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  //   Sample test
  //   const onSend = useCallback((messages = []) => {
  //     setMessages((previousMessages) =>
  //       GiftedChat.append(previousMessages, messages)
  //     );
  //   }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "chats"), { _id, createdAt, text, user });
  }, []);

  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <NewsHeader lIco={<BackBtn />} tTxt0={`Юзернейм`} rIco={<Lines />} />
      <View style={styles.content}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL,
          }}
        />
      </View>
      <BottomShadow />
    </ImageBackground>
  );
};
