import * as React from "react";
import {
  StatusBar,
  View,
  ImageBackground,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
import { authIcons } from "../../assets/auth/media";
import { OS } from "../theme/main";
import { bottomBarTHeme as styles } from "../theme/bottomBar";
import { useStateValue } from "../provider";
import { userData } from "../storage/auth";
import { auth as authProvider } from "../data";
import { AuthStack } from "./AuthStack";
import { NewsStack } from "./NewsStack";
import { ProfileStack } from "./ProfileStack";
import { LibraryStack } from "./LibraryStack";
import { ChatStack } from "./ChatStack";

// function BlankScreen() {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{ flex: 1, backgroundColor: "red" }}>
//       <Text style={{ alignSelf: "center", marginTop: "40%" }}>
//         Blank screen. This is a placeholder
//       </Text>
//     </View>
//   );
// }

export const AppNavigation = () => {
  const [{ globalData }, dispatch] = useStateValue();
  const [splash, setSplash] = React.useState(true);
  const [newPost, setNewPost] = React.useState(false);

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
        authProvider(global, setSplash, true);
      } else setTimeout(() => setSplash(false), 1000);
    });
  }, []);

  console.log(globalData, "statestater 2");

  const _renderSplash = () => {
    return (
      <ImageBackground
        source={authIcons.splash}
        resizeMode="stretch"
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <ActivityIndicator
          size="large"
          color="white"
          style={{ marginBottom: "55%" }}
        />
      </ImageBackground>
    );
  };

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
      {splash ? (
        _renderSplash()
      ) : globalData ? (
        <CurvedBottomBar.Navigator
          type="up"
          style={styles.styles.bottomBar}
          strokeWidth={0.5}
          height={85}
          circleWidth={40}
          bgColor="white"
          initialRouteName="News"
          borderTopLeftRight
          //swipeEnabled
          renderCircle={({ selectedTab, navigate }) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.styles.btnCircleUp}
              onPress={() => {
                const switcher = !newPost;
                navigate("News");
                setNewPost(switcher);
                DeviceEventEmitter.emit("event.newPost", switcher);
              }}
            >
              <AddNew />
            </TouchableOpacity>
          )}
          tabBar={renderTabBar}
        >
          <CurvedBottomBar.Screen
            name="News"
            position="left"
            component={NewsStack}
          />
          <CurvedBottomBar.Screen
            name="Library"
            position="left"
            component={LibraryStack}
          />
          <CurvedBottomBar.Screen
            name="Chat"
            component={ChatStack}
            position="right"
          />
          <CurvedBottomBar.Screen
            name="Profile"
            component={ProfileStack}
            position="right"
          />
        </CurvedBottomBar.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
