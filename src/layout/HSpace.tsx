import { View } from 'react-native';
import tw from '../lib/tailwind';

interface HSpaceProps {
  size?: number | SpaceSize;
}

const sizeToNumber = (size: SpaceSize) => {
  if (size == 'sm') return 4;
  if (size == 'md') return 6;
  if (size == 'lg') return 8;
  if (size == 'xl') return 10;
  return 5;
};

const HSpace: React.FC<HSpaceProps> = ({ size = 'base' }) => {
  const spacing = typeof size == 'number' ? size : sizeToNumber(size);

  return <View style={tw`px-${spacing}`} />;
};

export default HSpace;
