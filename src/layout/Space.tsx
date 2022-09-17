import { View } from 'react-native';
import tw from '../lib/tailwind';

interface SpaceProps {
  size?: number | SpaceSize;
}

const sizeToNumber = (size: SpaceSize) => {
  if (size == 'sm') return 1;
  if (size == 'md') return 4;
  if (size == 'lg') return 6;
  if (size == 'xl') return 8;
  return 2;
};

const Space: React.FC<SpaceProps> = ({ size = 'base' }) => {
  const spacing = typeof size == 'number' ? size : sizeToNumber(size);

  return <View style={tw`py-${spacing}`} />;
};

export default Space;
