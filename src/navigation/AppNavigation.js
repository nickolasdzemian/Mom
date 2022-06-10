import * as React from "react";
import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import {
  HomeActive,
  HomeInactive,
  LibraryActive,
  LibraryInactive,
  AddNew,
  ChatInactive,
  ChatActive,
  ProfileInactive,
  ProfileActive,
} from "../../assets/SVGicons";
import { OS } from "../theme/main";
import { bottomBarTHeme as styles } from "../theme/bottomBar";
import { useStateValue } from "../provider";
import { userData } from "../storage/auth";
import { AuthStack } from "./AuthStack";

function BlankScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>Blank screen. This is a placeholder</Text>
    </View>
  );
}

export const AppNavigation = () => {
  const [auth, setAuth] = React.useState(false);
  const [{ globalData }, dispatch] = useStateValue();

  // *** [Global listener from provider] ***
  const global = (newData) =>
    dispatch({
      type: "changeData",
      newGlobalData: newData,
    });

  // *** [Initialization, getting and setting all DATA] ***
  React.useEffect(() => {
    userData.get("user").then((response) => {
      if (response !== undefined && globalData == undefined) {
        setAuth(true);
        global(response.data);
      }
    });
  });
  console.log(globalData, "statestater");

  const _renderIcon = (routeName, selectedTab) => {
    switch (routeName) {
      case "News":
        return routeName === selectedTab ? <HomeActive /> : <HomeInactive />;
      case "Library":
        return routeName === selectedTab ? (
          <LibraryActive />
        ) : (
          <LibraryInactive />
        );
      case "Chat":
        return routeName === selectedTab ? <ChatActive /> : <ChatInactive />;
      case "Profile":
        return routeName === selectedTab ? (
          <ProfileActive />
        ) : (
          <ProfileInactive />
        );
    }
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        activeOpacity={0.9}
        style={styles.styles.touch}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      {OS ? (
        <StatusBar
          animated={true}
          backgroundColor="rgba(159, 225, 239, 0.24)"
          translucent={true}
          barStyle="dark-content"
        />
      ) : null}
      {auth ? (
        <CurvedBottomBar.Navigator
          type="up"
          style={styles.styles.bottomBar}
          strokeWidth={0.5}
          height={85}
          circleWidth={40}
          bgColor="white"
          initialRouteName="News"
          borderTopLeftRight
          swipeEnabled
          renderCircle={({ selectedTab, navigate }) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.styles.btnCircleUp}
              onPress={() => alert("Не так быстро, дорогой!")}
            >
              <AddNew />
            </TouchableOpacity>
          )}
          // renderCircle={() => <AddNew />}
          tabBar={renderTabBar}
        >
          <CurvedBottomBar.Screen
            name="News"
            position="left"
            component={BlankScreen}
          />
          <CurvedBottomBar.Screen
            name="Library"
            position="left"
            component={BlankScreen}
          />
          <CurvedBottomBar.Screen
            name="Chat"
            component={BlankScreen}
            position="right"
          />
          <CurvedBottomBar.Screen
            name="Profile"
            component={BlankScreen}
            position="right"
          />
        </CurvedBottomBar.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
