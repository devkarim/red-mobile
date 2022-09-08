import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import Palette from '../../config/palette';

interface LoaderProps extends ActivityIndicatorProps {}

const Loader: React.FC<LoaderProps> = ({ ...props }) => {
  return <ActivityIndicator color={Palette.PRIMARY} {...props} />;
};

export default Loader;
