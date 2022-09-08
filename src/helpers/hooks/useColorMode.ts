import { useTheme } from '@react-navigation/native';

const useColorMode = (darkModeColor: string, lightModeColor: string) => {
  const theme = useTheme();
  return theme.dark ? darkModeColor : lightModeColor;
};

export const useTextColor = () => {
  const theme = useTheme();
  return theme.colors.text;
};

export const useBackgroundColor = () => {
  const theme = useTheme();
  return theme.colors.background;
};

export const useTextColorWithOpacity = (
  darkOpacity: string = '0.4',
  lightOpacity: string = '0.6'
) => {
  const theme = useTheme();
  if (theme.dark) return `#rgba(255, 255, 255, ${darkOpacity})`;
  return `#rgba(0, 0, 0, ${lightOpacity})`;
};

export default useColorMode;
