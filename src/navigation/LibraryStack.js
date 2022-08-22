import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  LibraryScreen,
  UserScreen,
  CalendarScreen,
  CalendarPostScreen,
  CalendarAllPostsScreen,
} from "../screens";

const StackLibrary = createNativeStackNavigator();

export function LibraryStack() {
  return (
    <NavigationContainer independent={true}>
      <StackLibrary.Navigator initialRouteName="Library">
        <StackLibrary.Screen
          name="Library"
          component={LibraryScreen}
          options={{ headerShown: false }}
        />
        <StackLibrary.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <StackLibrary.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
        <StackLibrary.Screen
          name="CalendarPostScreen"
          component={CalendarPostScreen}
          options={{ headerShown: false }}
        />
        <StackLibrary.Screen
          name="CalendarAllPostsScreen"
          component={CalendarAllPostsScreen}
          options={{ headerShown: false }}
        />
      </StackLibrary.Navigator>
    </NavigationContainer>
  );
}
