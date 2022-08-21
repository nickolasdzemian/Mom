import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  ChatOnceScreen,
  UserScreen,
  NewsPost,
  AllChatsScreen,
} from "../screens";

const StackChat = createNativeStackNavigator();

export function ChatStack() {
  return (
    <NavigationContainer independent={true}>
      <StackChat.Navigator initialRouteName="AllChats">
        <StackChat.Screen
          name="AllChats"
          component={AllChatsScreen}
          options={{ headerShown: false }}
        />
        <StackChat.Screen
          name="ChatTo"
          component={ChatOnceScreen}
          options={{ headerShown: false }}
        />
        <StackChat.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <StackChat.Screen
          name="NewsPost"
          component={NewsPost}
          options={{ headerShown: false }}
        />
      </StackChat.Navigator>
    </NavigationContainer>
  );
}
