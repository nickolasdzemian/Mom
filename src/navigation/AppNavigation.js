import * as React from "react";
import {
  StatusBar,
  View,
  ImageBackground,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,Alert,  Pressable, 
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

function BlankScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>Blank screen. This is a placeholder</Text>
    </View>
  );
}

export const AppNavigation = () => {
  const [{ globalData }, dispatch] = useStateValue();
  const [splash, setSplash] = React.useState(true);
  const [showNew, setShowNew] = React.useState(false);

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
          swipeEnabled
          renderCircle={({ selectedTab, navigate }) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.styles.btnCircleUp}
              onPress={() => setShowNew(!showNew)}
            ><View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showNew}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowNew(!showNew);
        }}
      >
        <View style={styless.centeredView}>
          <View style={styless.modalView}>
            <Text style={styless.modalText}>Hello World!</Text>
            <Pressable
              style={[styless.button, styless.buttonClose]}
              onPress={() => setShowNew(!showNew)}
            >
              <Text style={styless.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
              <AddNew />
            </TouchableOpacity>
          )}
          // renderCircle={() => <AddNew />}
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

const styless = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});