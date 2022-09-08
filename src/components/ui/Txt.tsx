import { Text, TextProps } from 'react-native';
import { useTextColor } from '../../helpers/hooks/useColorMode';

const Txt: React.FC<TextProps> = ({ children, style, ...props }) => {
  const textColor = useTextColor();

  return (
    <Text
      selectable={true}
      {...props}
      style={{ color: textColor, ...(style as any) }}
    >
      {children}
    </Text>
  );
};

export default Txt;
