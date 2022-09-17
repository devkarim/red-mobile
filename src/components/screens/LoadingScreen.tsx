import tw from '../../lib/tailwind';
import Loader from '../ui/Loader';
import SafeArea from '../../layout/SafeArea';

const LoadingScreen: React.FC<any> = ({}) => {
  return (
    <SafeArea centerScreen>
      <Loader size="large" style={tw`mt-12`} />
    </SafeArea>
  );
};

export default LoadingScreen;
