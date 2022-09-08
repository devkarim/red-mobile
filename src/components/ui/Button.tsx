import { ReactNode } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import tw from '../../lib/tailwind';
import Txt from './Txt';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  bgColor?: string;
  variant?: 'solid';
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  bgColor,
  children,
  style,
  textStyle,
  variant = 'solid',
  icon,
  ...props
}) => {
  let variantStyle = tw``;

  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: bgColor,
        ...tw`rounded-lg p-2 flex-row justify-center items-center`,
        ...variantStyle,
        ...(style as any),
      }}
    >
      {icon}
      <Txt
        style={{
          color: color || '#fff',
          ...tw`font-medium text-center`,
          ...(textStyle as any),
        }}
      >
        {title}
      </Txt>
    </TouchableOpacity>
  );
};

export default Button;
