import { View, ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export default Container;
