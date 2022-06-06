import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {startupScreen} from '../screens/auth/startup';

const StackAuth = createNativeStackNavigator();

export function AuthStack() {
  return (
    <NavigationContainer>
      <StackAuth.Navigator>
        <StackAuth.Screen
          name="Start"
          component={startupScreen}
          options={{headerShown: false}}
        />
      </StackAuth.Navigator>
    </NavigationContainer>
  );
}
