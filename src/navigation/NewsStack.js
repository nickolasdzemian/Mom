import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StartupScreen,
  StatusScreen,
  PregScreen,
  AddChild,
  RegistrationScreen,
  SimpleAuthScreen,
} from "../screens";

const StackNews = createNativeStackNavigator();
function backIco() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 25, height: 15 }}
        resizeMode="contain"
        source={require("../../assets/auth/ArrowLeft.png")}
      />
    </TouchableOpacity>
  );
}

export function NewsStack() {
  return (
    <StackNews.Navigator>
      <StackNews.Screen
        name="Start"
        component={StartupScreen}
        options={{ headerShown: false }}
      />
      <StackNews.Screen
        name="Status"
        component={StatusScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => backIco(),
        }}
      />
      <StackNews.Screen
        name="Preg"
        component={PregScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => backIco(),
        }}
      />
      <StackNews.Screen
        name="Child"
        component={AddChild}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => backIco(),
        }}
      />
      <StackNews.Screen
        name="Reg"
        component={RegistrationScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => backIco(),
        }}
      />
      <StackNews.Screen
        name="SimpleAuth"
        component={SimpleAuthScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => backIco(),
        }}
      />
    </StackNews.Navigator>
  );
}
