import { View, ViewProps } from 'react-native';
import { useTextColor } from '../../helpers/hooks/useColorMode';

interface HorizontalLineProps extends ViewProps {}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ style, ...props }) => {
  const textColor = useTextColor();

  return (
    <View
      {...props}
      style={{
        borderBottomColor: textColor,
        borderBottomWidth: 0.8,
        width: '60%',
        alignSelf: 'center',
        opacity: 0.2,
        marginVertical: 16,
        ...(style as any),
      }}
    />
  );
};

export default HorizontalLine;
