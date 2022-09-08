import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Txt from '../../components/ui/Txt';
import tw from '../../lib/tailwind';
import Palette from '../../config/palette';
import HomeScreen from './home';
import { Ionicons } from '@expo/vector-icons';
import { APP_NAME } from '../../config/constants';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle:
          Platform.OS == 'ios'
            ? () => (
                <View style={tw`flex flex-row items-center justify-center`}>
                  <Txt
                    style={tw`text-primary font-black text-xl tracking-widest pb-2 -ml-3`}
                  >
                    {APP_NAME}
                  </Txt>
                </View>
              )
            : undefined,
        // headerShown: Platform.OS == 'ios',
        headerShown: false,
        headerTintColor: Palette.PRIMARY,
        tabBarActiveTintColor: Palette.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
