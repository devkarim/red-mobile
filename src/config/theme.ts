import { Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Palette from './palette';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: Palette.LIGHT,
    background: Palette.BACKGROUND_LIGHT,
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: Palette.DARK,
    background: Palette.BACKGROUND_DARK,
  },
};
