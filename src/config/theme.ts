import { Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: '#000',
    background: '#fafafa',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: '#fff',
    background: '#090909',
  },
};
