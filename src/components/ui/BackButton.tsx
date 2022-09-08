import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface BackButtonProps extends TouchableWithoutFeedbackProps {
  onPress?: () => void;
  iconStyle?: TextStyle;
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  iconStyle,
  ...props
}) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <TouchableWithoutFeedback onPress={onPress ?? goBack} {...props}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="white"
        size={42}
        style={iconStyle}
      />
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
