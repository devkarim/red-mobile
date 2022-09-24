import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Txt from '../../components/ui/Txt';
import tw from '../../lib/tailwind';
import Palette from '../../config/palette';
import HomeScreen from './home';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { APP_NAME } from '../../config/constants';
import MenuScreen from './menu';
import AllMatchesScreen from './allMatches';
import AllPrayerScreen from './allPrayers';
import CalendarScreen from './calendar';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle:
          Platform.OS == 'ios'
            ? () => (
                <View
                  style={tw`flex flex-row items-center justify-center center`}
                >
                  <Txt
                    style={tw`text-primary font-black text-xl tracking-widest pb-2 -ml-3`}
                  >
                    {APP_NAME}
                  </Txt>
                </View>
              )
            : undefined,
        tabBarStyle: tw`flex-col rounded-2xl bg-primary-dark h-20 my-6 mx-4`,
        tabBarItemStyle: tw`h-20`,
        headerShown: false,
        tabBarActiveTintColor: Palette.DARK,
        tabBarInactiveTintColor: Palette.INACTIVE_DARK,
        tabBarShowLabel: false,
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
      <Tab.Screen
        name="Prayers"
        component={AllPrayerScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="pray" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllMatches"
        component={AllMatchesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="football" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bars" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
