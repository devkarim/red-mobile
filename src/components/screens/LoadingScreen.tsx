import tw from '../../lib/tailwind';
import Loader from '../ui/Loader';
import Container from '../ui/Container';

const LoadingScreen: React.FC<any> = ({}) => {
  return (
    <Container centerScreen>
      <Loader size="large" style={tw`mt-12`} />
    </Container>
  );
};

export default LoadingScreen;
