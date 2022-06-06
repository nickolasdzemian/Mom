import * as React from 'react';
import {Platform, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
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
} from '../assets/SVGicons';
import {bottomBarTHeme as styles} from '../theme/bottomBar';
// import {core} from '../data/core/index';
import {useStateValue} from '../provider';
import {userData} from '../storage/auth';
import {AuthStack} from './AuthStack';

function BlankScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Blank screen. This is placeholder</Text>
    </View>
  );
}

export const AppNavigation = () => {
  const [auth, setAuth] = React.useState(false);
  const [{globalData}, dispatch] = useStateValue();

  // *** [Global listener from provider] ***
  const global = newData =>
    dispatch({
      type: 'changeData',
      newGlobalData: newData,
    });

  // *** [Initialization, getting and setting all DATA] ***
  React.useEffect(() => {
    // core({global, setRunning});
    userData.get('user').then(response => {
      if (response !== undefined) {
        setAuth(true);
      }
    });
  });
  console.log(auth, globalData, 'statestater');

  const _renderIcon = (routeName, selectedTab) => {
    switch (routeName) {
      case 'News':
        return routeName === selectedTab ? <HomeActive /> : <HomeInactive />;
      case 'Library':
        return routeName === selectedTab ? (
          <LibraryActive />
        ) : (
          <LibraryInactive />
        );
      case 'Chat':
        return routeName === selectedTab ? <ChatActive /> : <ChatInactive />;
      case 'Profile':
        return routeName === selectedTab ? (
          <ProfileActive />
        ) : (
          <ProfileInactive />
        );
    }
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        activeOpacity={0.9}
        style={styles.styles.touch}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return auth ? (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <StatusBar
          animated={true}
          backgroundColor="rgba(159, 225, 239, 0.24)"
          translucent={true}
          barStyle="dark-content"
        />
      ) : null}
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
        renderCircle={({selectedTab, navigate}) => (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.styles.btnCircleUp}
            onPress={() => alert('Не так быстро, дорогой!')}>
            <AddNew />
          </TouchableOpacity>
        )}
        // renderCircle={() => <AddNew />}
        tabBar={renderTabBar}>
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

      {/* [Classic tabbar navigator without theme] */}
      {/* <Tab.Navigator
        // initialRouteName={'Wines'}
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
          tabBarStyle: bottomBarTHeme.barStyle,
          tabBarShowLabel: false,

          // tabBarActiveTintColor: COLOR.CLR_GRAY,
          // tabBarInactiveTintColor: COLOR.CLR_GRAY_LIGHT,
          // header: props => <Header {...props} />,
        }}>
        <Tab.Screen
          name="News"
          component={BlankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) =>
              focused ? <HomeActive /> : <HomeInactive />,
          }}
        />
        <Tab.Screen
          name="Library"
          component={BlankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) =>
              focused ? <LibraryActive /> : <LibraryInactive />,
          }}
        />
        <Tab.Screen
          name="AddNew"
          component={BlankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: () => <AddNew />,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={BlankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) =>
              focused ? <ChatActive /> : <ChatInactive />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={BlankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            //  tabBarBadge: 1,
            tabBarIcon: ({focused}) =>
              focused ? <ProfileActive /> : <ProfileInactive />,
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  ) : (
    <AuthStack />
  );
};
