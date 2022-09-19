import { View, ViewProps } from 'react-native';
import tw from '../lib/tailwind';

interface ContentProps extends ViewProps {}

const Content: React.FC<ContentProps> = ({ children, style, ...props }) => {
  return (
    <View style={{ ...tw`p-4`, ...(style as any) }} {...props}>
      {children}
    </View>
  );
};

export default Content;
