import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen, ProfileSettings, HelpTo, NewsPost } from "../screens";

const StackProfile = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <NavigationContainer independent={true}>
      <StackProfile.Navigator initialRouteName="Profile">
        <StackProfile.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <StackProfile.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{ headerShown: false }}
        />
        <StackProfile.Screen
          name="Help"
          component={HelpTo}
          options={{ headerShown: false }}
        />
        <StackProfile.Screen
          name="NewsPost"
          component={NewsPost}
          options={{ headerShown: false }}
        />
      </StackProfile.Navigator>
    </NavigationContainer>
  );
}
