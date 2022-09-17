import { View } from 'react-native';
import tw from '../../lib/tailwind';
import SafeArea, { SafeAreaProps } from '../../layout/SafeArea';
import Txt from '../ui/Txt';
import BackButton from '../ui/BackButton';

interface ErrorScreenProps extends SafeAreaProps {
  message: string;
  backButton?: boolean;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  children,
  backButton,
  message,
  ...props
}) => {
  return (
    <SafeArea {...props}>
      {backButton ? <BackButton iconStyle={tw`mt-5 self-start`} /> : null}
      <View
        style={{
          alignItems: 'center',
          marginTop: backButton ? 'auto' : 0,
          marginBottom: backButton ? 'auto' : 0,
        }}
      >
        <Txt style={tw`text-3xl font-bold text-center mt-6 mb-4 text-red-500`}>
          Ooops!
        </Txt>
        <Txt style={tw`font-light text-center`}>{message}</Txt>
        {children}
      </View>
    </SafeArea>
  );
};

export default ErrorScreen;
