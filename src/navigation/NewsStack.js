import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsScreen, NewsSetting, NewsSearch } from "../screens";

const StackNews = createNativeStackNavigator();

export function NewsStack() {
  return (
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
    </StackNews.Navigator>
  );
}
