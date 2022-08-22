import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  NewsScreen,
  NewsSetting,
  NewsSearch,
  NewsPost,
  NewScreen,
  NewScreenSet,
  UserScreen,
  ChatOnceScreen,
} from "../screens";

const StackNews = createNativeStackNavigator();

export function NewsStack() {
  return (
    <NavigationContainer independent={true}>
      <StackNews.Navigator
        initialRouteName="News"
        // options={{ animationEnabled: false }}
      >
        <StackNews.Screen
          name="News"
          component={NewsScreen}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="NewsSetting"
          component={NewsSetting}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="NewsSearch"
          component={NewsSearch}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="NewsPost"
          component={NewsPost}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="NewScreen"
          component={NewScreen}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="NewScreenSet"
          component={NewScreenSet}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <StackNews.Screen
          name="ChatTo"
          component={ChatOnceScreen}
          options={{ headerShown: false }}
        />
      </StackNews.Navigator>
    </NavigationContainer>
  );
}
