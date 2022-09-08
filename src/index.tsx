import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import SplashScreen from './pages/splash';
import MainScreen from './pages/main';
import store from './state/store';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './config/theme';

const Stack = createNativeStackNavigator();

const Root = () => {
  const colorScheme = useColorScheme();

  // const [loaded] = useFonts({
  //   RobotoBlack: require('../assets/fonts/Roboto-Black.ttf'),
  //   RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
  //   RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
  //   RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
  //   RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  //   RobotoThin: require('../assets/fonts/Roboto-Thin.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={colorScheme == 'dark' ? darkTheme : lightTheme}
      >
        <Stack.Navigator
          initialRouteName="/splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/splash" component={SplashScreen} />
          <Stack.Screen name="/main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Root;
