import { View, ViewProps } from 'react-native';
import { useTextColor } from '../../helpers/hooks/useColorMode';

interface VerticalLineProps extends ViewProps {}

const VerticalLine: React.FC<VerticalLineProps> = ({ style, ...props }) => {
  const textColor = useTextColor();

  return (
    <View
      {...props}
      style={{
        borderRightColor: textColor,
        borderRightWidth: 0.8,
        height: '40%',
        alignSelf: 'center',
        opacity: 0.2,
        marginHorizontal: 14,
        ...(style as any),
      }}
    />
  );
};

export default VerticalLine;
