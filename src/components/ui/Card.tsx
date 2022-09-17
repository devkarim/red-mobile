import { View, ViewProps } from 'react-native';
import tw from '../../lib/tailwind';

interface CardProps extends ViewProps {}

const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
  return (
    <View style={{ ...tw`rounded-2xl p-4`, ...(style as any) }} {...props}>
      {children}
    </View>
  );
};

export default Card;
