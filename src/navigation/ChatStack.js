import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChatOnceScreen } from "../screens";

const StackChat = createNativeStackNavigator();

export function ChatStack() {
  return (
    <NavigationContainer independent={true}>
      <StackChat.Navigator initialRouteName="ChatOnceScreen">
      {/* !!!Change initial route to ALL chats list!!! */}
        <StackChat.Screen
          name="ChatOnceScreen"
          component={ChatOnceScreen}
          options={{ headerShown: false }}
        />
      </StackChat.Navigator>
    </NavigationContainer>
  );
}
