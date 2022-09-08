import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native';

interface NativeKeyboardAvoidingProps extends KeyboardAvoidingViewProps {
  behavior?: KeyboardingAvoidingViewBehavior;
}

const NativeKeyboardAvoiding: React.FC<NativeKeyboardAvoidingProps> = ({
  behavior,
  children,
  ...props
}) => {
  return (
    <KeyboardAvoidingView behavior={behavior || 'padding'} {...props}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default NativeKeyboardAvoiding;
