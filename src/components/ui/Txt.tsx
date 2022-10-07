import { Text, TextProps } from 'react-native';
import { useTextColor } from '../../helpers/hooks/useColorMode';

interface TxtProps extends TextProps {
  c?: string;
}

const Txt: React.FC<TxtProps> = ({ children, c, style, ...props }) => {
  const textColor = useTextColor();

  return (
    <Text
      selectable={true}
      {...props}
      style={{ color: c ?? textColor, ...(style as any) }}
    >
      {children}
    </Text>
  );
};

export default Txt;
