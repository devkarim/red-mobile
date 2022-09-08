import {
  TextInput,
  TextInputProps,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { ReactNode, useRef } from 'react';

import tw from '../../lib/tailwind';
import { useTextColor } from '../../helpers/hooks/useColorMode';
import Palette from '../../config/palette';

type TextFieldVariant = 'outlined' | 'underlined';

export const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface TextFieldProps extends TextInputProps {
  variant?: TextFieldVariant;
  activeColor?: string;
  icon?: (color: Animated.AnimatedInterpolation) => ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  style,
  variant = 'outlined',
  activeColor = Palette.PRIMARY,
  icon,
  ...props
}) => {
  const textColor = useTextColor();
  const animation = useRef(new Animated.Value(0)).current;

  let variantStyle = tw`px-3 py-3 rounded-lg font-medium border-2`;
  if (variant == 'underlined') {
    variantStyle = tw`border-b-2 py-3`;
  }

  const borderColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [textColor, activeColor],
  });

  const iconStyle = icon ? tw`pl-10` : {};

  return (
    <View style={tw`flex-row`}>
      {icon && (
        <View style={tw`absolute top-1/4 left-3`}>{icon(borderColor)}</View>
      )}
      <AnimatedTextInput
        {...props}
        style={{
          color: textColor,
          borderColor: borderColor,
          ...variantStyle,
          ...iconStyle,
          ...(style as any),
        }}
        onFocus={() =>
          Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }).start()
        }
        onBlur={() =>
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start()
        }
      />
    </View>
  );
};

export default TextField;
