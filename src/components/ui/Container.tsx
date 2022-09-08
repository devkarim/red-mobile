import React from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import NativeKeyboardAvoiding from './NativeKeyboardAvoiding';

export interface ContainerProps extends SafeAreaViewProps {
  centerScreen?: boolean;
  behavior?: KeyboardingAvoidingViewBehavior;
  noKeyboardAvoiding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  behavior,
  centerScreen,
  noKeyboardAvoiding,
  style,
  ...props
}) => {
  const safeArea = (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        {...props}
        style={{
          ...(centerScreen ? tw`h-full justify-center items-center` : {}),
          ...(style as any),
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );

  if (noKeyboardAvoiding) {
    return safeArea;
  }
  return (
    <NativeKeyboardAvoiding behavior={behavior}>
      {safeArea}
    </NativeKeyboardAvoiding>
  );
};

export default Container;
